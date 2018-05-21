import memberService from '@/services/propublica/members.service';
import house from './house';
import senate from './senate';
import specificMember from './specificMember';

export default {
  namespaced: true,
  modules: {
    house,
    senate,
    specificMember,
  },
  state: {
    navItems: [
      { title: 'Senate', path: '/members/senate' },
      { title: 'House', path: '/members/house' },
      { title: 'New Members', path: '/members/new' },
      { title: 'Members Leaving Office', path: '/members/leaving' },
    ],
    recentlyViewed: [

    ],
    newMembers: [],
    memberComparison: {
      votes: {},
      bills: {},
    },
  },
  mutations: {
    'ADD_MEMBER_TO_NAV' (state, payload) {
      state.recentlyViewed = [...state.recentlyViewed, payload];
    }
  },
  getters: {
    navItems: state => state.navItems,
    recentlyViewed: state => state.recentlyViewed,
  },
};




