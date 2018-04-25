<template>
  <div>
    <search v-model="searchText"></search>
    <product :productData="productData"></product>
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
  created () {
    this.fetchData()
  },
  watch: {
    searchText () {
      this.fetchData()
    }
  },
  methods: {
    fetchData () {
      request('/api/products').then((res) => {
        this.productData = res.data.filter((x) => {
          return (x.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1)
        })
      })
    }
  }
}
</script>

<style>

</style>
