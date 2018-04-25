<template>
  <div class="products">
    <div class="product">
      <div>
        <highlightText>
        </highlightText>
      </div>
      <div>Price here</div>
    </div>
  </div>
</template>

<script>
import HighlightText from './HighlightText'

export default {
  name: 'product',
  components: {
    HighlightText
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
