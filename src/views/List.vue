<template>
  <div>
    <search v-model="searchText"></search>
    <product></product>
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
      searchText: ''
    }
  },
  watch: {
    searchText (newVal) {
      console.log(newVal)
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
