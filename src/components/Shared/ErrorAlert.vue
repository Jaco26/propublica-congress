<template>
  <div>
    <v-alert type="error" value="true">
      {{errorMessage}}
    </v-alert>
  </div>
</template>

<script>
export default {
  props: ['errorMessage']
}
</script>
