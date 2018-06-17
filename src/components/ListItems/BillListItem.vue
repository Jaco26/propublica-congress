<template>
  <v-card class="grey lighten-3">
    <v-card-title>
      <div class="subheading">
        {{bill.short_title ? bill.short_title : bill.title}}
      </div>
    </v-card-title>
    <v-card-actions>
      <app-bill-dialog
        :propBill="bill"
      ></app-bill-dialog>
    </v-card-actions>
  </v-card>
</template>

<script>
import BillDialog from '@/components/Dialogs/Bill/BillDialog'
export default {
  props: ['bill'],
  components: {
    appBillDialog: BillDialog,
  },
}
</script>
