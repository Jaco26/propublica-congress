import billsService from '@/services/propublica/bills.service'
import * as types from './bill-types'
import {isLoading} from '@/store/isLoading'

export const state = {
  bill: {
    main: {},
    loading: false
  }
};

export const mutations = {
  [types.SET_SPEC_BILL] (state, payload) {
    console.log(payload);
    
    state.bill.main = payload.results[0];
  },


  [types.IS_LOADING] (state, payload) {
    isLoading(state, payload);
  },
};

export const actions = {
  async [types.FETCH_SPEC_BILL] ({commit}, payload) {
    commit(types.IS_LOADING, { propsPath: 'bill', is: true });
    commit(types.SET_SPEC_BILL, await billsService.getSpecificBill(payload))
    commit(types.IS_LOADING, { propsPath: 'bill', is: false });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}