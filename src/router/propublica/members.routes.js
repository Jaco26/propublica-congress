import Members from '@/components/Members/Members';
import List from '@/components/Members/List/List';

import NewMembers from '@/components/Members/NewMembers';
import MembersLeaving from '@/components/Members/MembersLeaving';

import Member from '@/components/Members/Member/Member';
import BillDetails from '@/components/Details/Bill/BillDetails'
import VoteDetails from '@/components/Details/Vote/VoteDetails'

export default {
  path: '/members',
  name: 'members',
  component: Members,
  redirect: '/members/senate',
  children: [
    {
      path: 'senate',
      name: 'senate',
      component: List,
    },
    {
      path: 'house',
      name: 'house',
      component: List,
    },
    {
      path: 'member/:id',
      name: 'member',
      component: Member,
      children: [
        {
          path: ':billId',
          name: 'memberBillDetails',
          component: BillDetails,
        },
        {
          path: ':rollCall/:sessionNumber/:congress/:chamber',
          name: 'memberVoteDetails',
          component: VoteDetails,
        }
      ],
    },
    {
      path: 'new',
      name: 'newMembers',
      component: NewMembers,
    },
    {
      path: 'leaving',
      name: 'membersLeaving',
      component: MembersLeaving,
    },
  ]
}