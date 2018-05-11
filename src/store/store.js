import Vue from 'vue';
import Vuex from 'vuex';

// import Propublica services
import members from '../services/propublica/members.service';
import bills from '../services/propublica/bills.service';
import votes from '../services/propublica/votes.service';
import statements from '../services/propublica/statements.service';
import committees from '../services/propublica/committees.service';

// import Database services
import database from '../services/database/bookmarks.service';

import { FETCH_HOUSE_MEMBERS, FETCH_SENATE_MEMBERS, BOOKMARK_MEMBER, FETCH_BOOKMARKED_MEMBERS } from './action-types';
import { SET_HOUSE_MEMBERS, SET_SENATE_MEMBERS, SET_BOOKMARKED_MEMBERS } from './mutation-types';

// Give all Vue components access to my Vuex store
Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== `production`, 
  state: {
    houseMembers: [],
    senateMembers: [],
    bookmarkedMembers: [],
    selectedProfile: {},
    selectedVotes: [],
    selectedBills: [],
  },
  mutations: {
    SET_HOUSE_MEMBERS (state, payload) {
      state.houseMembers = payload.results[0].members;
    },
    SET_SENATE_MEMBERS (state, payload) {
      state.senateMembers = payload.results[0].members;
    },
    SET_BOOKMARKED_MEMBERS (state, payload) {
      state.bookmarkedMembers = payload;
    },

    SET_PROFILE (state, payload) {          
      state.selectedProfile = payload.results[0];
    },
    SET_VOTES (state, payload) {
      state.selectedVotes = payload.results[0].votes;
    },
    SET_BILLS (state, payload) {
      state.selectedBills = payload.results[0].bills;
    }
  },
  actions: {
    async FETCH_HOUSE_MEMBERS ({commit}, payload) {
      const { congress, chamber } = payload;
      commit(SET_HOUSE_MEMBERS, await members.getMemberList(congress, chamber));
    },
    async FETCH_SENATE_MEMBERS ({commit}, payload) {
      const {congress, chamber} = payload;
      commit(SET_SENATE_MEMBERS, await members.getMemberList(congress, chamber));
    },
    async BOOKMARK_MEMBER ({dispatch}, payload) {
      dispatch(FETCH_BOOKMARKED_MEMBERS, await database.bookmarkMember(payload));
    },
    async FETCH_BOOKMARKED_MEMBERS ({commit}) {
      commit(SET_BOOKMARKED_MEMBERS, await database.getBookmarkedMembers());
    }, 

    async FETCH_PROFILE ({commit}, payload) {
      const { member_id } = payload;
      commit('SET_PROFILE', await members.getSpecificMember(member_id))
    },
    async FETCH_VOTES ({commit}, payload) {
      const {member_id} = payload;
      commit('SET_VOTES', await members.getSpecificMembersVotePositions(member_id));
    },
    async FETCH_BILLS ({commit}, payload) {
      const {member_id} = payload;
      commit('SET_BILLS', await members.getBillsCosponsoredBySpecificMember(member_id));
    }


  }
});

export default store;