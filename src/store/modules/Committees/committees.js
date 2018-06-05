import * as types from './types';
import committeesService from '@/services/propublica/committees.service';

const state = {
  committees: {
    list: [],
    loading: false,
  },
  specificCommittee: {
    main: {},
    loading: false,
    hearings: {
      list: [],
      loading: false,
    },
  },
};

const mutations = {
  [types.SET_COMMITTEES] (state, payload) {
    state.committeesList = payload.results[0].committees;
  },
  [types.SET_SPECIFIC_COMMITTEE] (state, payload) {
    state.specificCommittee.main = payload.results[0];
  },
  [types.IS_LOADING] (state, {prop, is}) {
    state[prop].loading = is;
  }
};

const actions = {
  [types.FETCH_COMMITTEES]: async ({commit}, payload) => {
    commit(types.SET_COMMITTEES, await committeesService.getCommitteeList(payload))
  },
  async [types.FETCH_SPECIFIC_COMMITTEE] ({commit}, payload) {
    commit(types.IS_LOADING, {prop: 'specificCommittee', is: true});
    commit(types.SET_SPECIFIC_COMMITTEE, await committeesService.getSpecificCommittee(payload));
    commit(types.IS_LOADING, { prop: 'specificCommittee', is: false });
  }
};

const getters = {
  [types.COMMITTEES]: state => state.committees.list,
  [types.COMS_LOADING]: state => state.committees.loading,
  [types.SPECIFIC_COMMITTEE]: state => state.specificCommittee.main,
  [types.SPEC_COM_LOADING]: state => state.specificCommittee.loading,
  [types.SPECIFIC_COMMMITTEE_HEARINGS]: state => state.specificCommittee.hearings.list,
  [types.SPEC_COM_HEARINGS_LOADING]: state => state.specificCommittee.hearings.loading,
};


export default {
  state,
  mutations,
  actions,
  getters
}

