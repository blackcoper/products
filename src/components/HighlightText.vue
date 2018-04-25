<template>
  <p>
    {{ pre }}<span class="highlight">{{ match }}</span>{{ end }}
  </p>
</template>

<script>
export default {
  name: 'highlightText',
  data () {
    return {
      pre: this.htext,
      end: '',
      match: ''
    }
  },
  props: [
    'htext',
    'searchText'
  ],
  methods: {
    highlight () {
      if (!this.searchText) {
        this.pre = this.htext
        this.match = ''
        this.end = ''
      } else {
        var index = this.htext.toLowerCase().indexOf(this.searchText.toLowerCase())
        if (index >= 0) {
          this.pre = this.htext.substring(0, index)
          this.htext.replace(new RegExp(this.searchText, 'gi'), match => {
            this.match = match
          })
          this.end = this.htext.substring(index + this.match.length)
        }
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
<style scoped>
  span.highlight {
    color: #108EE9;
  }
</style>
