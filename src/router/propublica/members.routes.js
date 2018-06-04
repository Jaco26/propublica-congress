import Members from '@/components/Members/Members';
import List from '@/components/Members/List/List';
import Member from '@/components/Members/Member/Member';
import NewMembers from '@/components/Members/NewMembers';
import MembersLeaving from '@/components/Members/MembersLeaving';


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