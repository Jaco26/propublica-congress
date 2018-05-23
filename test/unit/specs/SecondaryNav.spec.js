import {expect} from 'chai';
import {shallowMount} from '@vue/test-utils';
import SecondaryNav from '@/components/SecondaryNav';

describe('SecondaryNav.vue', () => {
  it('sets the correct default data', () => {
    expect(typeof SecondaryNav.data).to.equal('function')
  });



});