<template>
  <div>
    <search v-model="searchText"></search>
    <product :productData="productData" :propSearchText="searchText"></product>
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
      productData: [],
      productDataDefault: []
    }
  },
  created () {
    request('/api/products').then((res) => {
      if (res.success) {
        this.productDataDefault = res.data
        this.fetchData()
      }
    })
  },
  watch: {
    searchText () {
      this.fetchData()
    }
  },
  methods: {
    fetchData () {
      this.productData = this.productDataDefault.filter((x) => {
        return (x.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1)
      })
      if (this.productData.length === 0) {
        this.productData = this.productDataDefault
      }
    }
  }
}
</script>

<style>

</style>
