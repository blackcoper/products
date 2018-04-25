<template>
  <div class="products">
    <div class="product" v-for="product in productData" :key="product.id" v-on:click="pageDetail(product.id)">
      <div>
        <highlightText :htext="product.name" :searchText="propSearchText">
        </highlightText>
      </div>
      <div>{{ product.price }}</div>
    </div>
  </div>
</template>

<script>
import HighlightText from './HighlightText'

export default {
  name: 'product',
  props: [
    'productData',
    'propSearchText'
  ],
  components: {
    HighlightText
  },
  methods: {
    pageDetail (productId) {
      this.$router.push({ name: 'Detail', params: { id: productId } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
