<template>
  <div>
    <h1>{{ title }}</h1>
    <img src="/logo.png" alt="Gambar HP">
    <div>{{ price }}</div>
  </div>
</template>

<script>
import { request } from '../utils'

export default {
  name: 'detail',
  data () {
    return {
      productId: this.$route.params.id,
      title: '',
      price: ''
    }
  },
  created () {
    console.log(this.productId)
    request(`/api/products/_productId`)
      .then((res) => {
        if (res.success) {
          this.title = res.data.name
          this.price = res.data.price
        }
      })
  }
}
</script>

<style>

</style>
