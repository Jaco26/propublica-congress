<template>
  <li>
    <div @click="toggle" >
      <span v-if="hasChildren"> {{open ? '-' : '+'}} </span>
    </div>
    <ul v-show="open" v-if="hasChildren">
      <li 
        v-for="(role, i) in person.roles" 
        :key="i">
        {{role.congress}}
      </li>
    </ul>
    {{blaperson}}
  </li>
</template>

<script>
export default {
  name: 'item',
  props: ['person'],
  data () {
    return {
      open: false,
    }
  },
  computed: {
    hasChildren () {
      console.log(this.person);
      
      return this.person.roles && this.person.roles.length;
    },

  },
  methods: {
    toggle () {
      if (this.hasChildren) {
        this.open = !this.open;
      }
    },
  },
  // mounted () {
  //   console.log(this.person);
    
  // }
}
</script>

<style>

</style>
