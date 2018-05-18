import billsService from '@/services/propublica/bills.service';

export default {
  namespaced: true,
  state: {
    bills: {
      list: [],
      searchPhrase: '',
      isLoading: false,
    },

  },
  mutations: {
    'SET_SEARCHED_BILLS'(state, payload) {
      console.log(payload);
      const { returned, searchPhrase } = payload;
      if (state.bills.searchPhrase == searchPhrase) {
        state.bills.list = [...state.bills.list, ...returned.results[0].bills];
      } else {
        state.bills.list = returned.results[0].bills;
      }
      state.bills.searchPhrase = searchPhrase;
    },

    'SET_SEARCHED_BILLS_OFFSET'(state, payload) {
      const { searchPhrase } = payload;
      if (state.bills.searchPhrase == searchPhrase) {
        state.bills.offset += 20;
      } else {
        state.bills.offset = 0;
      }
    },

    'IS_LOADING'(state) {
      state.bills.isLoading = true;
    },

    'IS_DONE_LOADING'(state) {
      state.bills.isLoading = false;
    },

  },
  actions: {
    async 'SEARCH_BILLS'({ commit, state }, payload) {
      commit('IS_LOADING');
      let searchPhrase;
      if (payload) {
        searchPhrase = payload.searchPhrase;
      } else {
        searchPhrase = state.bills.searchPhrase;
      }
      commit('SET_SEARCHED_BILLS_OFFSET', { searchPhrase });
      const offset = state.bills.offset;
      const returned = await billsService.searchBills(searchPhrase, offset);
      commit('SET_SEARCHED_BILLS', { searchPhrase, returned });
      commit('IS_DONE_LOADING');
    },
  },
  getters: {
    results: state => state.bills.list,
    searchPhrase: state => state.bills.searchPhrase,
    isLoading: state => state.bills.isLoading,
  }

}