import * as types from './search.bill.types'
import {isLoading} from '@/store/isLoading'
import billsService from '@/services/propublica/bills.service'

export const state = {
  results: {
    list: [],
    loading: false,
  },
  search: {
    type: '',
    recent: {
      congress: '',
      chamber: '',
      type: '',
    },
    keyword: {
      query: '',
      dir: '',
    },
    subject: {
      subjectUrl: ''
    },
    upcoming: {
      chamber: ''
    }
  },
  paginationOffset: 0,
  subjects: {
    recent: {
      list: [],
      loading: false,
    },
    all: {
      list: [],
      loading: false,
    }
  },

};

export const mutations = {

  [types.SET_RESULTS] (state, payload) {
    if (state.paginationOffset == 0) {
      state.results.list = payload.bills;
    } else {
      state.results.list = [...state.results.list, ...payload.bills]
    }
    
  },

  [types.SET_OFFSET] (state, payload) {
    payload ? state.paginationOffset = 0 : state.paginationOffset += 20;
  },

  [types.SET_SEARCH_PARAMS] (state, payload) {
    state.search.recent = { congress: '', chamber: '', type: '' }; // reset "recent" search parameters
    state.search.keyword = { query: '', dir: '' }; // reset "keyword" search parameters
    state.search.subject = { subjectUrl: '' }; // reset "subject" search parameters
    state.search.upcoming = { chamber: '' }; // reset "upcoming" search parameters
    state.search[payload.searchType] = payload.params;
    state.search.type = payload.searchType;
  },

  [types.IS_LOADING] (state, payload) {
    isLoading(state, payload)
  }

};


export const actions = {

  async [types.FETCH_RECENT] ({commit, state}, payload) {
    commit(types.IS_LOADING, { propsPath: 'results', is: true });
    const {congress, chamber, type} = state.search.recent;
    // if there is a payload
    if (payload) {
      // if new search parameters do NOT match stored search parameters
      if (congress != payload.congress || chamber != payload.chamber || type != payload.type) {
        commit(types.SET_OFFSET, true); // "true" sets offset to 0
        commit(types.SET_SEARCH_PARAMS, { params: payload, searchType: 'recent' });
        const response = await billsService.getRecent(payload);
        commit(types.SET_RESULTS, { bills: response.results[0].bills });
      }
    } else {
      // the request for next pages will be triggered by a different event which will NOT
      // dispatch a payload becaues we will use stored search parameters
      commit(types.SET_OFFSET); // a falsey payload will make state.paginationOffset += 20
      const response = await billsService.getRecent({...state.search.recent, offset: state.paginationOffset});
      commit(types.SET_RESULTS, {bills: response.results[0].bills});
    }
    commit(types.IS_LOADING, { propsPath: 'results', is: false });
  },

  async [types.FETCH_SEARCH] ({commit, state}, payload) {
    commit(types.IS_LOADING, { propsPath: 'results', is: true });    
    const {query, dir} = state.search.keyword;
    if (payload) {
      if (query != payload.query || dir != payload.dir) {
        commit(types.SET_OFFSET, true);
        commit(types.SET_SEARCH_PARAMS, {params: payload, searchType: 'keyword'});
        const response = await billsService.searchBills(payload);        
        commit(types.SET_RESULTS, { bills: response.results[0].bills });
      }
    } else {
      commit(types.SET_OFFSET);
      const response = await billsService.searchBills({...state.search.keyword, offset: state.paginationOffset});
      commit(types.SET_RESULTS, { bills: response.results[0].bills });
    }
    commit(types.IS_LOADING, { propsPath: 'results', is: false });
  },

  async [types.FETCH_UPCOMING] ({commit, state}, payload) {
    commit(types.IS_LOADING, { propsPath: 'results', is: true });
    const { chamber } = state.search.upcoming;
    if (payload) {
      if (chamber != payload.chamber) {
        // upcoming bills results are not paginated
        commit(types.SET_SEARCH_PARAMS, {params: payload, searchType: 'upcoming'});
        const response = await billsService.getUpcoming(payload);  
        console.log(response);
              
        commit(types.SET_RESULTS, {bills: response.results[0].bills});
      } 
    } else {
      // upcoming bills results are not paginated
      const response = await billsService.getUpcoming(state.search.upcoming);
      console.log(response);
      commit(types.SET_RESULTS, { bills: response.results[0].bills});
    }
    commit(types.IS_LOADING, { propsPath: 'results', is: false });
  },
  async [types.FETCH_BY_SUBJECT] ({commit}, payload) {
    console.log('Search bills by subject', payload);
    
  }

};

export const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters,
}