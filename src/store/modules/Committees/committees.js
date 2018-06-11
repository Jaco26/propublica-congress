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
      offset: 0,
      loading: false,
    },
  },
};

const mutations = {
  [types.SET_COMMITTEES] (state, payload) {
    state.committees.list = payload.results[0].committees;
  },
  [types.SET_SPECIFIC_COMMITTEE] (state, payload) {    
    state.specificCommittee.main = payload.results[0];
  },
  [types.SET_SPECIFIC_COMMITTEE_HEARINGS] (state, payload) {
    state.specificCommittee.hearings.list = payload.results[0].hearings;
  },

  [types.IS_LOADING] (state, { propsPath, is}) {
    if (propsPath == '') {
      state.loading = is;
    } else {
      let mockState = state;
      let props = propsPath.split('.');
      let reducedMockState = props.reduce( (a, b) => {
        mockState = mockState[b];
        return mockState;
      }, mockState)
      reducedMockState.loading = is;
    }
  }
};


const actions = {
  async [types.FETCH_COMMITTEES] ({commit}, payload) {
    commit(types.SET_COMMITTEES, await committeesService.getCommitteeList(payload));
  },
  async [types.FETCH_SPECIFIC_COMMITTEE] ({commit}, payload) {
    commit(types.IS_LOADING, { propsPath: 'specificCommittee', is: true});
    commit(types.SET_SPECIFIC_COMMITTEE, await committeesService.getSpecificCommittee(payload));
    commit(types.IS_LOADING, { propsPath: 'specificCommittee', is: false });
  },
  async [types.FETCH_SPECIFIC_COMMITTEE_HEARINGS] ({commit}, payload) {
    commit(types.IS_LOADING, { propsPath: 'specificCommittee.hearings', is: true });
    commit(types.SET_SPECIFIC_COMMITTEE_HEARINGS, await committeesService.getSpecificCommitteeHearings(payload));
    commit(types.IS_LOADING, { propsPath: 'specificCommittee.hearings', is: false });
  }
};


const getters = {
  [types.SORTED_SPEC_COM_MEMBERS]: (state) => {
    if (state.specificCommittee.main.current_members) {      
      return state.specificCommittee.main.current_members.reduce( (a, b) => {
        switch(b.party){
          case 'R':
            a.r.members.push(b);
            return a;
          case 'D':
            a.d.members.push(b);
            return a;
          case 'I':
            a.i.members.push(b);
            return a;
        }
      }, {
        r: {title: 'Republicans', members: []}, 
        d: {title: 'Democrats', members: []}, 
        i: {title: 'Independents', members: []}
      });      
    }
  },
};


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

