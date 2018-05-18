import billsService from '@/services/propublica/bills.service';
import search from './search';

export default {
  namespaced: true,
  modules: {
    search
  },
  state: {
    searchedBills: {
      list: [],
      searchPhrase: '',
      offset: 0,
      isLoading: false,
    },
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
    searchedBills: state => state.searchedBills.list,
    searchedBillsSearchPhrase: state => state.searchedBills.searchPhrase,
    searchedBillsLoading: state => state.searchedBills.isLoading,

    recentBills: state => state.recentBills.list,

  },
};



