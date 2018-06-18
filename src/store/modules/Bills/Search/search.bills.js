import * as types from './search.bill.types'
import {isLoading} from '@/store/isLoading'
import billsService from '@/services/propublica/bills.service'

export const state = {
  results: {
    list: [],
    loading: false,
  },
  prevSearch: {
    type: '',
    params: {},
  },
  paginationOffset: 0,
};

export const mutations = {
  [types.SET_SELECTED_SEARCH_TYPE] (state, payload) {
    state.selectedSearchType = payload;
  },
  [types.SET_SEARCH_PARAMS] (state, payload) {
    state[state.selectedSearchType]
  },

  [types.IS_LOADING] (state, payload) {
    isLoading(state, payload)
  }
};

export const actions = {
  async [types.FETCH_RECENT] ({commit}, payload) {
    commit(types.SET_PREV_SEARCH, payload);
    
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