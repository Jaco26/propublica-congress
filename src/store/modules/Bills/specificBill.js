import billsService from '@/services/propublica/bills.service'
import * as types from './bill-types'
import {isLoading} from '@/store/isLoading'

const state = {
  bill: {
    main: {},
    loading: false
  }
};

const mutations = {
  [types.SET_SPEC_BILL] (state, payload) {    
    state.bill.main = payload.results[0];
  },


  [types.IS_LOADING] (state, payload) {
    isLoading(state, payload);
  },
};

const actions = {
  async [types.FETCH_SPEC_BILL] ({commit}, payload) {    
    commit(types.IS_LOADING, { propsPath: 'bill', is: true });
    commit(types.SET_SPEC_BILL, await billsService.getSpecificBill(payload))
    commit(types.IS_LOADING, { propsPath: 'bill', is: false });
  }
};

export const getters = {
  [types.ACTION_DESCRIPTION_SLICES]: (state) => {
    if (state.bill.main.actions) {      
      return state.bill.main.actions
        .filter(action => action.description.length > 120)
        .map(action => action.description.slice(0, 120) + '...');
    } 
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}