<template>
  <li @click="toggle">
    <h1>{{role.congress}}</h1>
    <ul v-show="open" v-if="committees">
      <committee 
        v-for="(committee, i) in committees" 
        :key="i"
        :committee="committee" 
      />
    </ul>
  </li>
</template>

<script>
import Committee from './Committee';
export default {
  props: ['role'],
  components: {
    Committee,
  },
  data () {
    return {
      open: false,
    }
  },
  computed: {
    committees () {
      return this.role.committees;
    },
  },
  methods: {
    toggle () {
      this.open = !this.open;
    }
  }
}
</script>

<style>

</style>
