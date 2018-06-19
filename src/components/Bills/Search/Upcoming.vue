<template>
  <v-radio-group v-model="chamber">
    <v-radio
      v-for="option in options"
      :key="option.title"
      :label="option.title"
      :value="option.value"
    ></v-radio>
    <v-btn @click="$emit('searchFor', {chamber})">Submit</v-btn>
  </v-radio-group>
</template>

<script>
export default {
  data () {
    return {
      chamber: '', // "house" or "senate"
      options: [
        {title: 'House', value: 'house'},
        {title: 'Senate', value: 'senate'},
      ]
    }
  },
}
</script>
