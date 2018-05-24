import memberService from '@/services/propublica/members.service';

export default {
  namespaced: true,
  state: {
    isLoading: false,
    profile: {},
    votes: [],
    bills: [],
    statements: [],
    qtrlyOfficeExpns: {},
  },
  mutations: {
    'SET_SPECIFIC_MEMBER'(state, payload) {
      state.profile = payload.results[0];
      const { member_id } = state.profile;
      this.dispatch('members/specificMember/FETCH_MEMBER_BILLS', member_id);
      this.dispatch('members/specificMember/FETCH_MEMBER_VOTES', member_id);
      this.dispatch('members/specificMember/FETCH_MEMBER_STATEMENTS', member_id);
    },
    'SET_MEMBER_BILLS'(state, payload) {
      state.bills = payload.results[0].bills;
    },
    'SET_MEMBER_VOTES'(state, payload) {
      state.votes = payload.results[0].votes;
    },
    'SET_MEMBER_STATEMENTS'(state, payload) {
      state.statements = payload.results;
    },
    'IS_LOADING'(state) {
      state.isLoading = true;
    },
    'IS_DONE_LOADING'(state) {
      state.isLoading = false;
    }
  },
  actions: {
    async 'FETCH_MEMBER'({ commit,  state, rootGetters }, member_id) {
      commit('IS_LOADING');
      commit('SET_SPECIFIC_MEMBER', await memberService.getSpecificMember(member_id));
      commit('IS_DONE_LOADING');
      let newNavMember = {
        title: `${state.profile.first_name} ${state.profile.last_name}`,
        path: `/members/member/${member_id}`,
      };
      const paths = rootGetters['members/recentlyViewed'].map(item => item.path);
      if (paths.indexOf(newNavMember.path) == -1) {
        commit('members/ADD_MEMBER_TO_NAV', newNavMember, { root: true });
      }      
    },
    async 'FETCH_MEMBER_BILLS'({ commit }, member_id) {
      commit('SET_MEMBER_BILLS', await memberService.getBillsCosponsoredBySpecificMember(member_id));
    },
    async 'FETCH_MEMBER_VOTES'({ commit }, member_id) {
      commit('SET_MEMBER_VOTES', await memberService.getSpecificMembersVotePositions(member_id));
    },
    async 'FETCH_MEMBER_STATEMENTS'({ commit }, member_id) {
      commit('SET_MEMBER_STATEMENTS', await memberService.getStatementsBySpecificMember(member_id));
    }
  },
  getters: {
    member: state => state.profile,
    bills: state => state.bills,
    votes: state => state.votes,
    statements: state => state.statements,
    isLoading: state => state.isLoading,
  },
};