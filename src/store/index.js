import Vue from 'vue';
import Vuex from 'vuex';
import {FETCH_HOUSE_MEMBERS, FETCH_SENATE_MEMBERS} from './action-types';
import {SET_HOUSE_MEMBERS, SET_SENATE_MEMBERS} from './mutation-types';
// Give all Vue components access to my Vuex store
Vue.use(Vuex);

const store = new Vuex.Store({
  // enable "strict" mode during development
  strict: process.env.NODE_ENV !== `production`, 
  state: {
    senateMembers: [],
    houseMembers: [],
  },
  mutations: {

  },
  actions: {

  }
});

export default store;