import billsService from '../../services/propublica/bills.service';

export default {
  namespaced: true,
  state: {
    searchedBills: [],
  },
  mutations: {
    'SET_SEARCHED_BILLS' (state, payload) {
      console.log(payload.results[0].bills);
      
      state.searchedBills = payload.results[0].bills;
    },

  },
  actions: {
    async 'SEARCH_BILLS' ({commit}, payload) {
      commit('SET_SEARCHED_BILLS', await billsService.searchBills(payload))
    }
  },
  getters: {
    searchedBills: state => state.searchedBills,
  },
};



