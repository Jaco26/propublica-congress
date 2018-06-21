import Bills from '@/components/Bills/Bills'
import Keyword from '@/components/Bills/Keyword'
import Recent from '@/components/Bills/Recent'
import Upcoming from '@/components/Bills/Upcoming'
import Bill from '@/components/Bills/Bill'

import SearchBills from '@/components/Bills/Search/SearchBills'
import SearchForm from '@/components/Bills/Search/Form/SearchForm'

export default {
  path: '/bills',
  redirect: '/bills/search',
  // name: 'bills',
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
      component: Keyword,
      name: 'searchBills',
      path: 'search',
    },
    {
      component: Bill,
      name: 'specificBill',
      path: ':billId'
    },
    {
      component: SearchBills,
      path: '',
      
    }
  ]
}