import billsService from '../../services/propublica/bills.service';

export default {
  namespaced: true,
  state: {
    searchedBills: {
      list: [],
      searchPhrase: '',
      offset: 0,
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
    'SET_SEARCHED_BILLS' (state, payload) {
      console.log(payload);
      
      const {returned, searchPhrase} = payload;
      if (state.searchedBills.searchPhrase == searchPhrase) {
        state.searchedBills.list = [...state.searchedBills.list, ...returned.results[0].bills];
      } else {
        state.searchedBills.list = returned.results[0].bills;
      }
      state.searchedBills.searchPhrase = searchPhrase;
    },

    'SET_SEARCHED_BILLS_OFFSET' (state, payload) {
      const {searchPhrase} = payload;
      if (state.searchedBills.searchPhrase == searchPhrase) {
        state.searchedBills.offset += 20;
      } else {
        state.searchedBills.offset = 0;
      }    
    },

    'SET_RECENT' (state, payload) {      
      state.recentBills.list = [...state.recentBills.list, ...payload.results[0].bills];
      state.recentBills.congress = payload.results[0].congress;
      state.recentBills.chamber = payload.results[0].chamber;
    },

  },
  actions: {
    async 'SEARCH_BILLS' ({commit, state}, payload) {
      let searchPhrase;
      if (payload) {
        searchPhrase = payload.searchPhrase;
      } else {
        searchPhrase = state.searchedBills.searchPhrase;
      }
      commit('SET_SEARCHED_BILLS_OFFSET', {searchPhrase})
      const offset = state.searchedBills.offset;
      const returned = await billsService.searchBills(searchPhrase, offset);
      commit('SET_SEARCHED_BILLS', {searchPhrase, returned});
    },
    async 'FETCH_RECENT' ({commit}, payload) {
      commit('SET_RECENT', await billsService.getRecent(payload));
    },
   

  },
  getters: {
    searchedBills: state => state.searchedBills.list,
    recentBills: state => state.recentBills.list,
  },
};



