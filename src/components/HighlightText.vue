<template>
  <p v-html="highlighted"></p>
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
        this.highlighted = this.htext
      } else {
        this.highlighted = this.htext.replace(new RegExp(this.searchText, 'gi'), match => {
          return '<span class="highlight">' + match + '</span>'
        })
      }
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
  span {
    display:inline-block;
  }

  span.highlight {
    color: #108EE9;
  }
</style>
