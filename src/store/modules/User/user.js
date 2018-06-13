import userService from '@/services/user/user.service'
import * as types from './user-types'

export default {
  namespaced: true,
  state: {
    comment: {
      submissionStatus: '',
      loading: false
    }
  },
  mutations: {
    [types.SET_COMMENT_SUBMIT_STATUS] (state, payload) {
      state.comment.submissionStatus = payload;
    },
    [types.RESET_SUBMISSION_STATUS] (state) {
      state.comment.submissionStatus = '';
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
    async [types.SUBMIT_COMMENT] ({commit}, payload) {
      commit(types.IS_LOADING, { propsPath: 'comment', is: true });
      commit(types.SET_COMMENT_SUBMIT_STATUS, await userService.submitComment(payload));
      commit(types.IS_LOADING, { propsPath: 'comment', is: false });
    }
  }
}
