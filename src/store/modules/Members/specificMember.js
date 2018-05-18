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
      state.specificMember.profile = payload.results[0];
      const { member_id } = state.profile;
      this.dispatch('FETCH_MEMBER_BILLS', member_id);
      this.dispatch('FETCH_MEMBER_VOTES', member_id);
      this.dispatch('FETCH_MEMBER_STATEMENTS', member_id);
    },
    'SET_MEMBER_BILLS'(state, payload) {
      state.bills = payload.results[0].bills;
    },
    'SET_MEMBER_VOTES'(state, payload) {
      console.log(payload);
      state.votes = payload.results[0].votes;
    },
    'SET_MEMBER_STATEMENTS'(state, payload) {
      state.statements = payload.results;
    },
    'IS_LOADING'(state) {
      state.issLoading = true;
    },
    'IS_DONE_LOADING'(state) {
      state.issLoading = false;
    }
  },
  actions: {
    async 'FETCH_SPECIFIC_MEMBER'({ commit }, member_id) {
      commit('IS_LOADING');
      commit('SET_SPECIFIC_MEMBER', await memberService.getSpecificMember(member_id));
      commit('IS_DONE_LOADING');
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