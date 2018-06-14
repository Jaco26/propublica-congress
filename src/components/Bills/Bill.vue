<template>
  <div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { FETCH_SPEC_BILL } from '@/store/modules/bills/bill-types'
export default {
  methods: {
    ...mapActions('bills/specificBill', {
      fetchBill: FETCH_SPEC_BILL,
    })
  },
  beforeRouteEnter (to, from, next) {
    let { congress, billId } = to.params;
    console.log(to.params);
    
    next(vm => {
      vm.fetchBill({billId});
    });
  }
}
</script>
