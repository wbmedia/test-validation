<template>
  <div>
    <login ref="form" />
  </div>
</template>

<script>
import Vue from 'vue'
import Login from '@/components/Login.vue'
export default Vue.extend({
  components: {
    Login,
  }
})
</script>
