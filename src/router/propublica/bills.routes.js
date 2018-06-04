import Bills from '@/components/Bills/Bills';
import Search from '@/components/Bills/Search';
import Recent from '@/components/Bills/Recent';
import Upcoming from '@/components/Bills/Upcoming';

export default {
  path: '/bills',
  redirect: '/bills/search',
  name: 'bills',
  component: Bills,
  children: [
    {
      component: Recent,
      name: 'recentBills',
      path: 'recent',
    },
    {
      component: Upcoming,
      name: 'upcomeingBills',
      path: 'upcoming',
    },
    {
      component: Search,
      name: 'searchBills',
      path: 'search',
    }
  ]
}