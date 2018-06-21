<template>
  <v-toolbar-items style="min-width: 600px;">
    <v-layout justify-center >
      <v-flex xs6 offset-xs2>
        <v-radio-group row v-model="chamber">
          <v-radio
            v-for="option in options"
            :key="option.title"
            :label="option.title"
            :value="option.value"
          ></v-radio>
        </v-radio-group>  
      </v-flex>
    </v-layout>
    <v-btn color="info" id="submit-btn" @click="$emit('searchFor', {chamber})">Submit</v-btn>   
  </v-toolbar-items>
   
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

<style>

#submit-btn  {
  height: 32px !important;
  width: 91px !important;;
  transform: translate(0, 21px) !important;;
}

</style>
