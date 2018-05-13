<template>
  <div>
    <h1>The Members Page</h1>
    <v-btn router :to="'/members/senate'">Senate</v-btn>
    <v-btn router :to="'/members/house'">House</v-btn>
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>