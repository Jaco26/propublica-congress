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
  },
  mutations: {
    SET_HOUSE_MEMBERS (state, payload) {
      state.houseMembers = payload.results[0].members;
    },
    SET_SENATE_MEMBERS (state, payload) {
      state.senateMembers = payload.results[0].members;
    },
    SET_BOOKMARKED_MEMBERS (state, payload) {
      console.log('PAYLOAD', payload);
      state.bookmarkedMembers = payload;
    }
  },
  actions: {
    async FETCH_HOUSE_MEMBERS ({commit}, {congress, chamber}) {
      commit(SET_HOUSE_MEMBERS, await members.getMemberList(congress, chamber));
    },
    async FETCH_SENATE_MEMBERS ({commit}, {congress, chamber}) {
      commit(SET_SENATE_MEMBERS, await members.getMemberList(congress, chamber));
    },
    async BOOKMARK_MEMBER ({dispatch}, member) {
      let result = await database.bookmarkMember(member);
      console.log(result);
      
      dispatch(FETCH_BOOKMARKED_MEMBERS);
    },
    async FETCH_BOOKMARKED_MEMBERS ({commit}) {
      commit(SET_BOOKMARKED_MEMBERS, await database.getBookmarkedMembers());
    }

  }
});

export default store;