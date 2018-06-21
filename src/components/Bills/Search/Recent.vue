<template>
  <v-toolbar-items style="min-width: 490px;">
    <v-select
      class="mx-2"
      min-width="200"
      :items="options.chamber"
      v-model="chamber"
      item-text="title"
      label="Chamber"
      single-line
      hide-details
    ></v-select>
    <v-select
      class="mx-2"
      :items="options.type"
      v-model="type"
      item-text="title"
      label="Bill type"
      single-line
      hide-details
    ></v-select>
    <v-select 
      class="mx-2"
      :items="options.congress"
      v-model="congress"
      item-text="title"
      item-value="title"
      label="Congress"
      single-line
      hide-details=""
    ></v-select>
    <v-btn color="info" style="width: 91px;" @click="$emit('searchFor', {congress, chamber, type})">Search</v-btn>  
  </v-toolbar-items> 
</template>

<script>
export default {
  data () {
    return {
      congress: '', // 105-115
      chamber: '', // "house", "senate" or "both"
      type: '', // "introduced", "updated", "active", "passed", "enacted", "vetoed"
      options: {
        congress: this.congressFunc(105),
        chamber: [
          {title: 'House', value: 'house'},
          {title: 'Senate', value: 'senate'},
          {title: 'Both', value: 'both'},
        ],
        type: [
          {title: 'Introduced', value: 'introduced'},
          {title: 'Updated', value: 'updated'},
          {title: 'Active', value: 'active'},
          {title: 'Passed', value: 'passed'},
          {title: 'Enacted', value: 'enacted'},
          {title: 'Vetoed', value: 'vetoed'},
        ]
      },
    }
  },
  methods: {
    congressFunc (earliestCongress) {
      let currentCongress = 115
      let year1 = 2017;
      let year2 = 2018;
      let resultArray = [];
      for (let i = currentCongress; i >= earliestCongress; i--) {
        let congressObj = {
          title: i.toString(),
          description: `In session from ${year1}-${year2}`
        };
        resultArray.push(congressObj);
        year1 -= 2;
        year2 -= 2;
      }
      return resultArray;
    },
  }
}
</script>
