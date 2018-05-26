import {expect} from 'chai';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Block from '@/components/Members/List/Block';
import Vuetify from 'vuetify';

// const factory = () => {
//   return shallowMount
// }


describe('Block.vue', () => {
  it('letter should be a string with length of 1', () => {
    const wrapper = shallowMount(Block);
    wrapper.setProps({letter: 'A'})
    expect(wrapper.props().letter).to.have.lengthOf(1);
  })
})