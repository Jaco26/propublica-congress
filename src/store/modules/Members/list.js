import memberService from '@/services/propublica/members.service';

export default {
  namespaced: true,
  state: {
    isLoading: false,
    list: [],
    congress: '',
    chamber: '',
  },
  mutations: {
    'SET_MEMBERS_LIST' (state, payload) {      
      state.list = payload.results[0].members;
      state.congress = payload.results[0].congress;
      state.chamber = payload.results[0].chamber;
    },
    'IS_LOADING' (state) {  
      state.isLoading = true;
    },
    'IS_DONE_LOADING' (state) {
      state.isLoading = false;
    },
  
  },  
  actions: {
    async 'FETCH_CONGRESS_MEMBERS'({ commit }, { congress, chamber }) {
      commit('IS_LOADING');
      commit('SET_MEMBERS_LIST', await memberService.getMemberList(congress, chamber));
      commit('IS_DONE_LOADING');
    },
  },
  getters: {
    list: state => state.list,
    congress: state => state.congress,
    chamber: state => state.chamber,
    isLoading: state => state.isLoading,
  },
};