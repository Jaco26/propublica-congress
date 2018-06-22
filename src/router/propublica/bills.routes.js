import Bills from '@/components/Bills/Bills'
import Bill from '@/components/Bills/Bill'
import SearchBills from '@/components/Bills/Search/SearchBills'

export default {
  path: '/bills',
  component: Bills,
  children: [
    {
      component: Bill,
      name: 'specificBill',
      path: ':billId'
    },
    {
      component: SearchBills,
      name: 'searchBills',
      path: '',
      
    }
  ]
}