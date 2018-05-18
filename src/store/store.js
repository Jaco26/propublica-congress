import Vue from 'vue';
import Vuex from 'vuex';

// import Database services
import database from '@/services/database/bookmarks.service';

import { FETCH_HOUSE_MEMBERS, FETCH_SENATE_MEMBERS, BOOKMARK_MEMBER, FETCH_BOOKMARKED_MEMBERS } from './action-types';
import { SET_HOUSE_MEMBERS, SET_SENATE_MEMBERS, SET_BOOKMARKED_MEMBERS } from './mutation-types';

import members from './modules/Members/members';
import votes from './modules/votes';
import bills from './modules/Bills/bills';
import statements from './modules/statements';

import fillers from './modules/Fillers/congressChamber';


// Give all Vue components access to my Vuex store
Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== `production`, 
  modules: {
    members,
    votes,
    bills,
    statements,
    fillers,
  },
});

export default store;