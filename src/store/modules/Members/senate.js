import memberService from '@/services/propublica/members.service';

export default {
  state: {
    senateIsLoading: false,
    senateMembers: [],
    congress: 115,
  },
  mutations: {
    'SET_SENATE_MEMBERS' (state, payload) {
      state.senateMembers = payload.results[0].members;
    },
    'SENATE_IS_LOADING' (state) {
      state.senateIsLoading = true;
    },
    'SENATE_IS_DONE_LOADING' (state) {
      state.senateIsLoading = false;
    },
  },
  actions: {
    async 'FETCH_MEMBERS' ({commit, state}) {
      console.log('HELLO');
      
      commit('SENATE_IS_LOADING');
      let params = {congress: state.congress, chamber: 'senate'};
      commit('SET_SENATE_MEMBERS', await memberService.getMemberList(params));
      commit('SENATE_IS_DONE_LOADING');
    },
  },
  getters: {
    senateMembers: state => state.senateMembers,
    senateIsLoading: state => state.senateIsLoading,
  }
}