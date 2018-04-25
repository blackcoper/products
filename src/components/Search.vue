<template>
  <div class="search-container">
    Search input here
    <input type="text" ref="searchInput" :value="value" @input="updateData()">
  </div>
</template>

<script>
export default {
  name: 'search',
  props: [
    'value'
  ],
  methods: {
    updateData () {
      this.$emit('input', this.$refs.searchInput.value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
