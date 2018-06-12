import userService from '@/services/user/user.service'
import * as types from './user-types'

export default {
  namespaced: true,
  state: {
    submissonStatus: '',
  },
  mutations: {
    [types.SET_COMMENT_SUBMIT_STATUS] (state, payload) {
      console.log(payload);
      state.submissonStatus = payload;
    }
  },
  actions: {
    async [types.SUBMIT_COMMENT] ({commit}, payload) {
      console.log(payload);
      commit(types.SET_COMMENT_SUBMIT_STATUS, await userService.submitComment(payload));
    }
  }
}
