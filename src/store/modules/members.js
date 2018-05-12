import memberService from '../../services/propublica/members.service';

export default {
  state: {
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
    }

  },
  actions: {
    async 'FETCH_CONGRESS_MEMBERS' ({commit}, {congress, chamber}) {
      commit('SET_MEMBERS_LIST', await memberService.getMemberList(congress, chamber));
    },
    async 'FETCH_MEMBER' ({commit}, {member_id, chamber}) {
      switch (chamber) {
        case 'House':
          commit('SET_HOUSE_MEMBER_PROFILE', await memberService.getSpecificMember(member_id));
          return;
        case 'Senate':
          commit('SET_SENATE_MEMBER_PROFILE', await memberService.getSpecificMember(member_id));
          return;
        default:
          return;
      }
    },
    
  },
  getters: {
    houseMemberList: state => state.house.membersList,
    houseMember: state => state.house.member,
    senateMemberList: state => state.senate.membersList,
    senateMember: state => state.senate.member,
  },
};










