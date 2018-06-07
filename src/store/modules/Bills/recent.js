import billsService from '@/services/propublica/bills.service';

export default { 
  namespaced: true,
  state: {
    bills: {
      list: [],
      offset: 0,
      isLoading: false,
      searchParams: {
        congress: '',
        chamber: '',
        type: '',
      },
      
    },
  },
  mutations: {
    'SET_RECENT' (state, payload) {
      console.log(payload);
      
      if(payload.results[0].offset == 0) {
        state.bills.list = payload.results[0].bills;
      } else {
        state.bills.list = [...state.bills.list, ...payload.results[0].bills];
      }
    
    },
    'SET_NEXT_PAGE' (state, payload) {
      state.bills.list = [...state.bills.list, ...payload.results[0].bills];
    },
    'SET_OFFSET' (state, payload) {
      if (payload) {
        state.bills.offset = 0;
      } else {
        state.bills.offset += 20;
      }
    },
    'SET_SEARCH_PARAMS' (state, payload) {
      if (payload) {
        const {congress, chamber, type} = payload;
        state.bills.searchParams.congress = congress;
        state.bills.searchParams.chamber = chamber;
        state.bills.searchParams.type = type;
      } 
    },
    'IS_LOADING' (state) {
      state.bills.isLoading = true;
    },
    'IS_DONE_LOADING' (state) {
      state.bills.isLoading = false;
    },
  },
  actions: {
    async 'FETCH_BILLS' ({commit, state}, payload) {
      commit('IS_LOADING');
      commit('SET_OFFSET', payload ? true: null);
      commit('SET_SEARCH_PARAMS', payload);
      const offset = state.bills.offset;
      let search;
      if (payload) {
        search = { ...payload, offset }
      } else {
        search = {...state.bills.searchParams, offset}
      }
      console.log(search);
      
      commit('SET_RECENT', await billsService.getRecent(search));
      commit('IS_DONE_LOADING');
    },

  },
  getters: {
    bills: state => state.bills.list,
    isLoading: state => state.bills.isLoading,
  }
}