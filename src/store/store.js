import Vue from 'vue';
import Vuex from 'vuex';
import {FETCH_HOUSE_MEMBERS, FETCH_SENATE_MEMBERS} from './action-types';
import {SET_HOUSE_MEMBERS, SET_SENATE_MEMBERS} from './mutation-types';
// import services
// import {members, bills, votes, statements, committees} from '../services/propublica';
import members from '../services/propublica/members.service';
import bills from '../services/propublica/bills.service';
import votes from '../services/propublica/votes.service';
import statements from '../services/propublica/statements.service';
import committees from '../services/propublica/committees.service';
// Give all Vue components access to my Vuex store
Vue.use(Vuex);

const store = new Vuex.Store({
  // enable "strict" mode during development
  strict: process.env.NODE_ENV !== `production`, 
  state: {
    houseMembers: [],
    senateMembers: [],
  },
  mutations: {
    SET_HOUSE_MEMBERS (state, payload) {
      state.houseMembers = payload.results[0].members;
    },
    SET_SENATE_MEMBERS (state, payload) {
      state.senateMembers = payload.results[0].members;
    },
  },
  actions: {
    async FETCH_HOUSE_MEMBERS ({commit}, {congress, chamber}) {
      commit(SET_HOUSE_MEMBERS, await members.getMemberList(congress, chamber));
    },
    async FETCH_SENATE_MEMBERS ({commit}, {congress, chamber}) {
      commit(SET_SENATE_MEMBERS, await members.getMemberList(congress, chamber));
    },
  }
});

export default store;