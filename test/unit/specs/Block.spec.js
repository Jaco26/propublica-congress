import {expect} from 'chai';
import {mount} from '@vue/test-utils';
import Block from '@/components/Members/List/Block';

describe('Block.vue', () => {
  it('letter should be a string with length of 1', () => {
    const wrapper = mount(Block);
    wrapper.setProps({letter: 'A'})
    expect(wrapper.props().letter).to.have.lengthOf(1);
  })
})