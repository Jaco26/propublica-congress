import billsService from '@/services/propublica/bills.service';

export default {
  namespaced: true,
  state: {
    bills: {
      list: [],
      searchPhrase: '',
      isLoading: false,
    },
    searchOffset: 0,
    newSearchPhrase: ''
  },
  mutations: {
    'SET_FIRST_PAGE' (state, payload) {
      state.bills.list = payload.results[0].bills;
      state.bills.searchPhrase = state.newSearchPhrase;
    },
    'SET_NEXT_PAGE' (state, payload) {
      state.bills.list = [...state.bills.list, ...payload.results[0].bills];
    },
    'SET_SEARCH_OFFSET' (state, payload) {
      if (payload) {
        state.searchOffset = 0;
      } else {
        state.searchOffset += 20;
      }
    },
    'IS_LOADING' (state) {
      state.bills.isLoading = true;
    },
    'IS_DONE_LOADING' (state) {
      state.bills.isLoading = false;
    },
    'SET_NEW_SEARCH_PHRASE' (state, payload) {
      state.newSearchPhrase = payload;      
    }
  },
  actions: {
    async 'FETCH_FIRST_PAGE'({ commit, state }) {      
      commit('IS_LOADING');
      commit('SET_SEARCH_OFFSET', true);
      const searchPhrase = state.newSearchPhrase;
      const offset = state.searchOffset;
      commit('SET_FIRST_PAGE', await billsService.searchBills(searchPhrase, offset));
      commit('IS_DONE_LOADING');
    },
    async 'FETCH_NEXT_PAGE' ({commit, state}) {
      commit('IS_LOADING');
      commit('SET_SEARCH_OFFSET');
      const searchPhrase = state.bills.searchPhrase;
      const offset = state.searchOffset;
      commit('SET_NEXT_PAGE', await billsService.searchBills(searchPhrase, offset))
      commit('IS_DONE_LOADING');
    }
  },
  getters: {
    results: state => state.bills.list,
    resultsSearchPhrase: state => state.bills.searchPhrase,
    newSearchPhrase: state => state.newSearchPhrase,
    isLoading: state => state.bills.isLoading,
  }

}