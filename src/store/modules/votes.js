 import votesService from '../../services/propublica/votes.service';

export default {
  namespaced: true,
  state: {
    recentExplanations: [],
  },
  mutations: {
    'SET_RECENT_EXPLANATIONS' (state, payload) {
      state.recentExplanations = [...state.recentExplanations, ...payload.results];      
    }
  },
  actions: {
    async 'FETCH_RECENT_EXPLANATIONS' ({commit}, congress) {
      commit('SET_RECENT_EXPLANATIONS', await votesService.getRecentPersonalVotesExplanations(congress));
    }
  },
  getters: {
    recentExplanations: state => state.recentExplanations,
  },
} ;
 


