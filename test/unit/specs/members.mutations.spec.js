import {expect} from 'chai';
import {mutations} from '@/store/modules/Members/members';

const {ADD_MEMBER_TO_NAV} = mutations;

describe('members.mutations', () => {
  it('ADD_MEMBER_TO_NAV adds object with propery "title" and a value of "Johnny" ', () => {
    const state = {
      recentlyViewed: [],
    };
    ADD_MEMBER_TO_NAV (state, {title: 'Johnny', path: '/members/member/johnnyId'});
    expect(state.recentlyViewed[0]).to.have.property('title'); 
  });

  it('ADD_MEMBER_TO_NAV adds object with propery "path" and a value of "/members/member/johnnyId"', () => {
    const state = {
      recentlyViewed: [],
    };
    ADD_MEMBER_TO_NAV(state, { title: 'Johnny', path: '/members/member/johnnyId' });
    expect(state.recentlyViewed[0]).to.have.property('path', '/members/member/johnnyId');
  });
});







