<template>
  <v-card-title>
    <div class="text-xs-center title">
      {{bill.short_title ? bill.short_title : bill.title}}
    </div>
  </v-card-title>
</template>

<script>
export default {
  props: ['bill']
}
</script>
