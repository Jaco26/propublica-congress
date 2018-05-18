import memberService from '@/services/propublica/members.service';
import list from './list';
import specificMember from './specificMember';

export default {
  namespaced: true,
  modules: {
    list,
    specificMember,
  },
  state: {
    navItems: [
      { title: 'Members', route: '/members/list' },
      { title: 'New Members', route: '/members/new' },
      { title: 'Members Leaving Office', route: '/members/leaving' },
    ],
    // house: {
    //   congress: '',
    //   membersList: [],
    //   membersLeavingOffice: [],
    // },
    // senate: {
    //   congress: '',
    //   membersList: [],
    //   membersLeavingOffice: [],
    // },
   
    newMembers: [],
    memberComparison: {
      votes: {},
      bills: {},
    },
  },
  mutations: {
    // 'SET_MEMBERS_LIST' (state, payload) {
    //   switch (payload.results[0].chamber) {
    //     case 'Senate':
    //       state.senate.membersList = payload.results[0].members;
    //       state.senate.congress = payload.results[0].congress;
    //       return;
    //     case 'House':
    //       state.house.membersList = payload.results[0].members;
    //       state.house.congress = payload.results[0].congress;
    //       return;
    //     default: 
    //       return state;
    //   }
    // },
    // 'SET_SPECIFIC_MEMBER' (state, payload) {
    //   state.specificMember.profile = payload.results[0];
    //   const {member_id} = state.specificMember.profile;
    //   this.dispatch('FETCH_MEMBER_BILLS', member_id);
    //   this.dispatch('FETCH_MEMBER_VOTES', member_id);
    //   this.dispatch('FETCH_MEMBER_STATEMENTS', member_id);
    // },
    // 'SET_MEMBER_BILLS' (state, payload) {
    //   state.specificMember.bills = payload.results[0].bills;
    // },
    // 'SET_MEMBER_VOTES' (state, payload) {
    //   console.log(payload);
    //   state.specificMember.votes = payload.results[0].votes;
    // },
    // 'SET_MEMBER_STATEMENTS' (state, payload) {           
    //   state.specificMember.statements = payload.results;
    // },
    // 'IS_LOADING' (state) {
    //   state.memberIsLoading = true;
    // },
    // 'IS_DONE_LOADING' (state) {
    //   state.memberIsLoading = false;
    // }

  },
  actions: {
    // async 'FETCH_CONGRESS_MEMBERS' ({commit}, {congress, chamber}) {
    //   commit('SET_MEMBERS_LIST', await memberService.getMemberList(congress, chamber));
    // },
    // async 'FETCH_SPECIFIC_MEMBER' ({commit}, member_id) {
    //   commit('IS_LOADING');
    //   commit('SET_SPECIFIC_MEMBER', await memberService.getSpecificMember(member_id));
    //   commit('IS_DONE_LOADING');
    // },
    // async 'FETCH_MEMBER_BILLS' ({commit}, member_id) {
    //   commit('SET_MEMBER_BILLS', await memberService.getBillsCosponsoredBySpecificMember(member_id));
    // },
    // async 'FETCH_MEMBER_VOTES'({ commit }, member_id) {
    //   commit('SET_MEMBER_VOTES', await memberService.getSpecificMembersVotePositions(member_id));
    // },
    // async 'FETCH_MEMBER_STATEMENTS' ({commit}, member_id) {
    //   commit('SET_MEMBER_STATEMENTS', await memberService.getStatementsBySpecificMember(member_id));
    // }
    
  },
  getters: {
    // houseCongress: state => state.house.congress,
    // houseMemberList: state => state.house.membersList,
    // senateCongress: state => state.senate.congress,
    // senateMemberList: state => state.senate.membersList,
    // specificMember: state => state.specificMember.profile,
    // specificMemberBills: state => state.specificMember.bills,
    // specificMemberVotes: state => state.specificMember.votes,
    // specificMemberStatements: state => state.specificMember.statements,
    // memberIsLoading: state => state.memberIsLoading,
    navItems: state => state.navItems,
  },
};




