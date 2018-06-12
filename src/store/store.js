import Vue from 'vue';
import Vuex from 'vuex';

// user module
import user from '@/store/modules/User/user'

// propublica modules
import members from './modules/Members/members';
import votes from './modules/Votes/votes';
import bills from './modules/Bills/bills';
import statements from './modules/statements';
import committees from './modules/Committees/committees';

import fillers from './modules/Fillers/congressChamber';


// Give all Vue components access to my Vuex store
Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== `production`, 
  modules: {
    user,
    members,
    votes,
    bills,
    statements,
    committees,
    fillers,
  },
});

export default store;