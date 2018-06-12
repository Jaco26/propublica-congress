// Committees components
import Committees from '@/components/Committees/Committees';
import SpecificCommittee from '@/components/Committees/SpecificCommittee';

export default {
  path: '/committees',
  name: 'committees',
  component: Committees,
  children: [
    {
      path: ':id',
      name: 'specificCommittee',
      component: SpecificCommittee,
    },
  ]
}