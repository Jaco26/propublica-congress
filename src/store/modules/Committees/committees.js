import * as types from './types';
import committeesService from '@/services/propublica/committees.service';

const state = {
  committeesList: [],
  specificCommittee: {},
};

const mutations = {
  [types.SET_COMMITTEES] (state, payload) {
    state.committeesList = payload.results[0].committees;
  },
  [types.SET_SPECIFIC_COMMITTEE] (state, payload) {
    console.log(payload);
    state.specificCommittee = payload.results[0]
  }
};

const actions = {
  [types.FETCH_COMMITTEES]: async ({commit}, payload) => {
    commit(types.SET_COMMITTEES, await committeesService.getCommitteeList(payload))
  },
  async [types.FETCH_SPECIFIC_COMMITTEE] ({commit}, payload) {
    commit(types.SET_SPECIFIC_COMMITTEE, await committeesService.getSpecificCommittee(payload));
  }
};

const getters = {
  [types.COMMITTEES]: state => state.committeesList,
  [types.SPECIFIC_COMMITTEE]: state => state.specificCommittee,
};


export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
}

