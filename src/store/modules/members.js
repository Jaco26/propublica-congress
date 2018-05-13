import memberService from '../../services/propublica/members.service';

export default {
  state: {
    memberIsLoading: false,
    house: {
      congress: '',
      membersList: [],
      membersLeavingOffice: [],
      member: {
        profile: {},
        votes: {},
        bills: {},
        qtrlyOfficeExpns: {}
      }
    },
    senate: {
      congress: '',
      membersList: [],
      membersLeavingOffice: [],
      member: {
        profile: {},
        votes: {},
        bills: {},
      }
    },
    newMembers: [],
    memberComparison: {
      votes: {},
      bills: {},
    },
  },
  mutations: {
    'SET_MEMBERS_LIST' (state, payload) {
      switch (payload.results[0].chamber) {
        case 'Senate':
          state.senate.membersList = payload.results[0].members;
          state.senate.congress = payload.results[0].congress;
          return;
        case 'House':
          state.house.membersList = payload.results[0].members;
          state.house.congress = payload.results[0].congress;
          return;
        default: 
          return state;
      }
    },
    'SET_HOUSE_MEMBER_PROFILE' (state, payload) {
      state.house.member = payload.results[0];
    },
    'SET_SENATE_MEMBER_PROFILE' (state, payload) {
      state.senate.member.profile = payload.results[0];
    },
    'IS_LOADING' (state) {
      state.memberIsLoading = true;
    },
    'IS_DONE_LOADING' (state) {
      state.memberIsLoading = false;
    }

  },
  actions: {
    async 'FETCH_CONGRESS_MEMBERS' ({commit}, {congress, chamber}) {
      commit('SET_MEMBERS_LIST', await memberService.getMemberList(congress, chamber));
    },
    async 'FETCH_MEMBER' ({commit, state}, {member_id, chamber}) {
      commit('IS_LOADING');
      switch (chamber) {
        case 'House':
          commit('SET_HOUSE_MEMBER_PROFILE', await memberService.getSpecificMember(member_id));
          commit('IS_DONE_LOADING')
          return;
        case 'Senate':
          commit('SET_SENATE_MEMBER_PROFILE', await memberService.getSpecificMember(member_id));
          commit('IS_DONE_LOADING')
          return;
        default:
          return;
      }
    },
    
  },
  getters: {
    houseCongress: state => state.house.congress,
    houseMemberList: state => state.house.membersList,
    houseMember: state => state.house.member.profile,
    senateCongress: state => state.senate.congress,
    senateMemberList: state => state.senate.membersList,
    senateMember: state => state.senate.member.profile,
    memberIsLoading: state => state.memberIsLoading,
  },
};










