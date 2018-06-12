import votesService from '@/services/propublica/votes.service'
import * as types from './vote-types';

export default {
  namespaced: true,
  state: {
    recentExplanations: [],
    specificRollcallVote: {}
  },
  mutations: {
    [types.SET_REC_EXPLAN] (state, payload) {
      state.recentExplanations = [...state.recentExplanations, ...payload.results];      
    },
    [types.SET_SPEC_RC_VOTE] (state, payload) {
      state.specificRollcallVote = payload.results.votes
    }
  },
  actions: {
    async [types.FETCH_REC_EXPLAN] ({commit}, congress) {
      commit(types.SET_REC_EXPLAN, await votesService.getRecentPersonalVotesExplanations(congress));
    },
    async [types.FETCH_SPEC_RC_VOTE] ({commit}, payload) {
      commit(types.SET_SPEC_RC_VOTE, await votesService.getSpecificVote(payload));
    }

  },
} ;
 


