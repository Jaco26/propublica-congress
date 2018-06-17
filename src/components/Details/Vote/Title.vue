<template>
  <v-card-title>
    <div class="text-xs-center title">
      {{vote.description}}
    </div>
  </v-card-title>
</template>

<script>
export default {
  props: ['vote']
}
</script>
