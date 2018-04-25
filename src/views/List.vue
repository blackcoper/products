<template>
  <div>
    <search v-model="searchText"></search>
    <product v-for="product in productData" :productName="product.name" :productPrice="product.price"></product>
    {{ productData }}
  </div>
</template>

<script>
import Product from '../components/Product'
import Search from '../components/Search'
import { request } from '../utils' // use to get data

export default {
  name: 'list',
  components: {
    Product,
    Search
  },
  data () {
    return {
      searchText: '',
      productData: []
    }
  },
  watch: {
    searchText (newVal) {
      request('/api/products').then((res) => {
        this.productData = res.data.filter((x) => {
          return true
        })
      })
      request('/api/products').then((res) => {
        var arr = []
        res.data.filter((x) => {
          if (x.name.toLowerCase().indexOf(newVal.toLowerCase()) > -1) arr.push(x)
        })
        console.dir(arr)
      })
    }
  }
}
</script>

<style>

</style>
