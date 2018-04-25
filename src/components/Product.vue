<template>
  <div class="products">
    <div class="product">
      <div>
        <highlightText :htext="productName" :searchText="propSearchText">
        </highlightText>
      </div>
      <div>{{ productPrice }}</div>
    </div>
  </div>
</template>

<script>
import HighlightText from './HighlightText'

export default {
  name: 'product',
  props: [
    'productName',
    'productPrice',
    'propSearchText'
  ],
  components: {
    HighlightText
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
