import memberService from '@/services/propublica/members.service';

export default {
  state: {
    houseIsLoading: false,
    houseMembers: [],
    congress: 115,
  },
  mutations: {
    'SET_HOUSE_MEMBERS' (state, payload) {
      state.houseMembers = payload.results[0].members;
    },
    'HOUSE_IS_LOADING' (state) {
      state.houseIsLoading = true;
    },
    'HOUSE_IS_DONE_LOADING' (state) {
      state.houseIsLoading = false;
    },
  },
  actions: {
    async 'FETCH_MEMBERS' ({commit, state}) {
      commit('HOUSE_IS_LOADING');
      let params = {congress: state.congress, chamber: 'house'};
      commit('SET_HOUSE_MEMBERS', await memberService.getMemberList(params));
      commit('HOUSE_IS_DONE_LOADING');
    },
  },
  getters: {
    houseMembers: state => state.houseMembers,
    houseIsLoading: state => state.houseIsLoading,
  }
}