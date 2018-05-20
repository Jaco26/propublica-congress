import billsService from '@/services/propublica/bills.service';
import search from './search';

export default {
  namespaced: true,
  modules: {
    search
  },
  state: {
    navItems: [
      { title: 'Search Bills', path: '/bills/search' },
      { title: 'Get Recent Bills', path: '/bills/recent' },
      { title: 'Get Upcoming Bills', path: '/bills/upcoming' },
    ],
    recentBills: {
      searchParams: {
        congress: '',
        chamber: '',
        type: '',
      },
      list: [],
      congress: '',
      chamber: '',
    },

  },
  mutations: {
    'SET_RECENT' (state, payload) {      
      state.recentBills.list = [...state.recentBills.list, ...payload.results[0].bills];
      state.recentBills.congress = payload.results[0].congress;
      state.recentBills.chamber = payload.results[0].chamber;
    },

  },
  actions: {
    async 'FETCH_NEXT_PAGE' ({commit, state}) {

    },
    async 'FETCH_RECENT' ({commit}, payload) {
      commit('SET_RECENT', await billsService.getRecent(payload));
    },
   

  },
  getters: {
    recentBills: state => state.recentBills.list,
    navItems: state => state.navItems,
  },
};



