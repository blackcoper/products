<template>
  <div>
    <h1>{{ title }}</h1>
    <img src="/logo.png" alt="">
    <div>{{ price }}</div>
  </div>
</template>

<script>
import { request } from '../utils'

export default {
  name: 'detail',
  created () {
    request(`/api/products/1`)
      .then(res => {
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
