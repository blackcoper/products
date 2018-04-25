<template>
  <div>
    detail view
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
          console.log(res.data)
        }
      })
  }
}
</script>

<style>

</style>
