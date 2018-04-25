<template>
  <div>
    <search></search>
    <product></product>
  </div>
</template>

<script>
import Product from '../components/Product'
import Search from '../components/Search'
// import { request } from '../utils' // use to get data

export default {
  name: 'list',

  components: {
    Product,
    Search
  },

  methods: {
    searchProduct: () => {
      // request ();
      console.log(this.name)
    }
  }
}
</script>

<style>

</style>
