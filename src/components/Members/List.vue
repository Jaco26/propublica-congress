<template>
  <v-container>
    <v-layout row >
    <!-- I need a form for users to select:
      1: congress, 2: chamber, 3: type -->
      <v-flex class="grey lighten-4" >
        <v-form class="pa--">
          <v-layout>
            <v-flex class="px-4">
              <v-radio-group v-model="chamber" class=" ">
                <v-radio label="Senate" value="senate"></v-radio>
                <v-radio label="House" value="house"></v-radio>
                <!-- <v-radio label="Both" value="both"></v-radio> -->
              </v-radio-group>
            </v-flex>

            <v-flex class="px-2" xs4>
              <v-select 
                :items="congress"
                v-model="selectedCongress"
                :hint="`${selectedCongress.description}`"
                persistent-hint
                item-text="title"
                label="Congress"
                single-line 
              ></v-select>
            </v-flex>
            <v-btn @click="submit">Submit</v-btn>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>

    <v-layout column>
      <v-flex class="ma-4" v-for="(member, i) in members" :key="i">
         <v-flex>
          <router-link :to="`/members/member/${member.id}`"><strong>{{member.first_name}} {{member.last_name}}</strong></router-link> 
        
        </v-flex>

        <!-- <small>Title:</small> {{bill.title}}
        <br>
        <small>Latest Major Action:</small> {{bill.latest_major_action}} 
        <br>
        <small>Latest Major Action Date:</small> {{bill.latest_major_action_date}} -->

      </v-flex>
    </v-layout>

  </v-container>
  
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  data () {
    return {
      chamber: '',
      selectedCongress: {title: '', description: ''},
    }
  },
  computed: {
    ...mapGetters({
      congressFunc: 'fillers/congressFunc',
      members: 'members/list/list'
    }),
    congress () {
      if (this.chamber == 'house') {
        return this.congressFunc(102);
      } else if (this.chamber == 'senate') {
        return this.congressFunc(80);
      } else {
        return {title: 'Select a chamber'}
      }
    },
    searchParams () {
      return {
        chamber: this.chamber,
        congress: this.selectedCongress.title,
      };
    },
  },
  methods: {
    submit () {
      let {congress, chamber} = this.searchParams;
      if(!congress || !chamber){
        alert('NO!')
      } else {
        this.$store.dispatch('members/list/FETCH_CONGRESS_MEMBERS', this.searchParams);
      }
    }
  }
  
}
</script>

<style>

</style>
