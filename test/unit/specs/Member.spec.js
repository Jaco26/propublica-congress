import Vue from 'vue';
import Member from '@/components/Members/Member/Member';

describe('Member', () => {
  const vm = new Vue(Member).$mount();
  
})

// describe('Member.vue', () => {
//   it('should render a legislator\'s first and last name', () => {
//     const Constructor = Vue.extend(Member);
//     const vm = new Constructor().$mount();
//     expect(vm.$el.querySelector('#legislator-name').textContent)
//       .to.equal('')
//   });
// });
 