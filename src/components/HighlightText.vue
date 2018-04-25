<template>
  <p>
    {{ name }}
  </p>
</template>

<script>
export default {
  name: 'highlightText',
  data: {
    name: ''
  },
  watch: {
    productname: function (val) {
      this.name = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span {
    display:inline-block;
  }

  span.highlight {
    color: #108EE9;
  }
</style>
