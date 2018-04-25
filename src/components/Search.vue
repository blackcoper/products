<template>
  <div class="search-container">
    <input v-on:change="searchProduct" v-model="name" class="search"/>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      name: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
