import {expect} from 'chai';
import {shallowMount} from '@vue/test-utils';
import SecondaryNav from '@/components/SecondaryNav';

describe('SecondaryNav.vue', () => {
  it('has a div with the text "Hello"', () => {
    const wrapper = shallowMount(SecondaryNav);
    expect(wrapper.find('div').text()).contains("Hello");
  });
});