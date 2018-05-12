<template>
  <div>
    <h1>The Members Page</h1>
    {{this.$route.params.id}}
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>