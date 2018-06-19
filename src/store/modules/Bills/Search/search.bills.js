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


  [types.IS_LOADING] (state, payload) {
    isLoading(state, payload)
  }
};

export const actions = {
  async [types.FETCH_RECENT] ({commit}, payload) {
    console.log(payload);
    
    // commit(types.SET_PREV_SEARCH, payload);
    
  },
  async [types.FETCH_SEARCH] ({commit}, payload) {
    console.log(payload);
    
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