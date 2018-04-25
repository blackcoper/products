<template>
  <p v-html="highlight()"></p>
</template>

<script>
export default {
  name: 'highlightText',
  data () {
    return {
      highlighted: this.htext
    }
  },
  props: [
    'htext',
    'searchText'
  ],
  methods: {
    highlight () {
      if (!this.searchText) {
        return this.htext
      }
      return this.htext.replace(new RegExp(this.searchText, 'gi'), match => {
        return '<span class="highlight">' + match + '</span>'
      })
    }
  },
  watch: {
    searchText () {
      this.highlight()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  span.highlight {
    color: #108EE9;
  }
</style>
