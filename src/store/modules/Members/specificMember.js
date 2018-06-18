import * as types from './specificMember.types';
import memberService from '@/services/propublica/members.service';

export default {
  namespaced: true,
  state: { 
    profile: {
      main: {},
      loading: false,
    },
    votes: {
      list: [],
      loading: false,
    },
    bills: {
      list: [],
      loading: false,
    },
    statements: {
      list: [],
      loading: false,
    },
    qtrlyOfficeExpns: {},
  },
  mutations: {
    [types.SET_MEMBER] (state, payload) {
      state.profile.main = payload.results[0];
    },
    [types.SET_BILLS] (state, payload) {
      state.bills.list = payload.results[0].bills;
    },
    [types.SET_VOTES] (state, payload) {
      state.votes.list = payload.results[0].votes;
    },
    [types.SET_STATEMENTS] (state, payload) {
      state.statements.list = payload.results;
    },

    [types.IS_LOADING](state, { propsPath, is }) {
      if (propsPath == '') {
        state.loading = is;
      } else {
        let mockState = state;
        let props = propsPath.split('.');
        let reducedMockState = props.reduce((a, b) => {
          mockState = mockState[b];
          return mockState;
        }, mockState)
        reducedMockState.loading = is;
      }
     
    }

  
  },
  actions: {
    async [types.FETCH_MEMBER] ({ commit, dispatch,  state, rootGetters }, member_id) {
      if(member_id == state.profile.main.member_id) {
        return
      }
      commit(types.IS_LOADING, {propsPath: 'profile', is: true});
      commit(types.SET_MEMBER, await memberService.getSpecificMember(member_id));
      commit(types.IS_LOADING, { propsPath: 'profile', is: false });
      dispatch(types.FETCH_BILLS, member_id);
      dispatch(types.FETCH_VOTES, member_id);
      dispatch(types.FETCH_STATEMENTS, member_id);
      let newNavMember = {
        title: `${state.profile.first_name} ${state.profile.last_name}`,
        path: `/members/member/${member_id}`,
      };
      const paths = rootGetters['members/recentlyViewed'].map(item => item.path);
      if (paths.indexOf(newNavMember.path) == -1) {
        commit('members/ADD_MEMBER_TO_NAV', newNavMember, { root: true });
      }      
    },
    async [types.FETCH_BILLS] ({ commit }, member_id) {
      commit(types.IS_LOADING, { propsPath: 'bills', is: true });
      commit(types.SET_BILLS, await memberService.getBillsCosponsoredBySpecificMember(member_id));
      commit(types.IS_LOADING, { propsPath: 'bills', is: false });
    },
    async [types.FETCH_VOTES] ({ commit }, member_id) {
      commit(types.IS_LOADING, { propsPath: 'votes', is: true });
      commit(types.SET_VOTES, await memberService.getSpecificMembersVotePositions(member_id));
      commit(types.IS_LOADING, { propsPath: 'votes', is: false });
    },
    async [types.FETCH_STATEMENTS] ({ commit }, member_id) {
      commit(types.IS_LOADING, { propsPath: 'statements', is: true });
      commit(types.SET_STATEMENTS, await memberService.getStatementsBySpecificMember(member_id));
      commit(types.IS_LOADING, { propsPath: 'statements', is: false });
    }
  },
};