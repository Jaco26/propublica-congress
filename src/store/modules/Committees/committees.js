import * as types from './types';
import committeesService from '@/services/propublica/committees.service';

const state = {
  committeesList: [],
  specificCommittee: {
    main: {},
    hearings: [],
  },
};

const mutations = {
  [types.SET_COMMITTEES] (state, payload) {
    state.committeesList = payload.results[0].committees;
  },
  [types.SET_SPECIFIC_COMMITTEE] (state, payload) {
    console.log(payload);
    state.specificCommittee.main = payload.results[0];
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
  [types.SPECIFIC_COMMITTEE]: state => state.specificCommittee.main,
  [types.SPECIFIC_COMMMITTEE_HEARINGS]: state => state.specificCommittee.hearings,
};


export default {
  state,
  mutations,
  actions,
  getters
}

