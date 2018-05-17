import billsService from '../../services/propublica/bills.service';

export default {
  namespaced: true,
  state: {
    searchedBills: [],
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
    'SET_SEARCHED_BILLS' (state, payload) {
      console.log(payload);
      
      state.searchedBills = payload.results[0].bills;
    },
    'SET_RECENT' (state, payload) {      
      state.recentBills.list = [...state.recentBills.list, ...payload.results[0].bills];
      state.recentBills.congress = payload.results[0].congress;
      state.recentBills.chamber = payload.results[0].chamber;
    },

  },
  actions: {
    async 'SEARCH_BILLS' ({commit}, payload) {
      commit('SET_SEARCHED_BILLS', await billsService.searchBills(payload))
    },
    async 'FETCH_RECENT' ({commit}, payload) {
      commit('SET_RECENT', await billsService.getRecent(payload));
    }
  },
  getters: {
    searchedBills: state => state.searchedBills,
    recentBills: state => state.recentBills.list,
  },
};



