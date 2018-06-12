import votesService from '@/services/propublica/votes.service'
import * as types from './vote-types';

export default {
  namespaced: true,
  state: {
    errorMessage: 'Oops! Unfortunately, we cannot fetch the requested resource at the moment.',
    recentVotes: {
      house: {
        list: [],
        errorMessage: '',
        loading: false,
      },
      senate: {
        list: [],
        errorMessage: '',
        loading: false,
      },
      both: {
        list: [],
        errorMessage: '',
        loading: false,
      }
    },
    recentExplanations: {
      list: [],
      errorMessage: '',
      loading: false,
    },
    specificRollcallVote: {
      vote: {},
      vacantSeats: [],
      errorMessage: '',
      loading: false,
    },
    
  },
  mutations: {
    [types.SET_REC_EXPLAN] (state, payload) {
      if (payload.status == 'ERROR') {
        state.recentExplanations.errorMessage = state.errorMessage;
        return;
      }
      state.recentExplanations.list = [...state.recentExplanations.list, ...payload.results];      
    },
    [types.SET_SPEC_RC_VOTE] (state, payload) {
      if (payload.status == 'ERROR') {
        state.specificRollcallVote.errorMessage = state.errorMessage;
        return;
      }
      state.specificRollcallVote.vote = payload.results.votes.vote;
      state.specificRollcallVote.vacantSeats = payload.results.votes.vacant_seats;      
    },
    
    [types.SET_RECENT_VOTES] (state, payload) {
      if (payload.status == 'ERROR') {
        state[payload.results.chamber.toLowerCase()].errorMessage = state.errorMessage;
        return;
      }
      state.recentVotes[payload.results.chamber.toLowerCase()].list = payload.results.votes;
    },

    [types.IS_LOADING] (state, {propsPath, is}) {
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
    async [types.FETCH_REC_EXPLAN] ({commit}, payload) {      
      commit(types.IS_LOADING, {propsPath: 'recentExplanations', is: true});
      commit(types.SET_REC_EXPLAN, await votesService.getRecentPersonalVotesExplanations(payload));
      commit(types.IS_LOADING, { propsPath: 'recentExplanations', is: false });
    },
    async [types.FETCH_SPEC_RC_VOTE] ({commit}, payload) {
      commit(types.IS_LOADING, { propsPath: 'specificRollcallVote', is: true });
      commit(types.SET_SPEC_RC_VOTE, await votesService.getSpecificVote(payload));
      commit(types.IS_LOADING, { propsPath: 'specificRollcallVote', is: false });
    },
    async [types.FETCH_RECENT_VOTES] ({commit}, payload) {
      commit(types.IS_LOADING, { propsPath: `recentVotes.${payload.chamber}`, is: true });
      commit(types.SET_RECENT_VOTES, await votesService.getRecentVotes(payload));
      commit(types.IS_LOADING, { propsPath: `recentVotes.${payload.chamber}`, is: false });
    }

  },
} ;
 


