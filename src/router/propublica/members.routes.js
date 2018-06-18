import Members from '@/components/Members/Members';
import List from '@/components/Members/List/List';

import NewMembers from '@/components/Members/NewMembers';
import MembersLeaving from '@/components/Members/MembersLeaving';

import Member from '@/components/Members/Member/Member';
import BillDetails from '@/components/Details/Bill/BillDetails'
import VoteDetails from '@/components/Details/Vote/VoteDetails'
import MemberRoles from '@/components/Members/Member/PastRoles'
import MemberBills from '@/components/Members/Member/Bills'
import MemberVotes from '@/components/Members/Member/Votes'
import MemberStatements from '@/components/Members/Member/Statements'

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
      component: Member,
      children: [
        {
          path: '',
          name: 'member',
          component: MemberRoles,
        },
        {
          path: 'bills',
          name: 'memberBills',
          component: MemberBills,
        },
        {
          path: 'votes',
          name: 'memberVotes',
          component: MemberVotes,
        },
        {
          path: 'statements',
          name: 'memberStatements',
          component: MemberStatements,
        },
        {
          path: 'bills/:billId',
          name: 'memberBillDetails',
          component: BillDetails,
        },
        {
          path: 'votes/:rollCall/:sessionNumber/:congress/:chamber',
          name: 'memberVoteDetails',
          component: VoteDetails,
        },
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