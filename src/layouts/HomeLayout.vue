<template>
  <router-view />
  <TheFooter />
</template>

<script>
import TheFooter from '../components/TheFooter.vue'

export default {
  name: 'HomeLayout',
  components: { TheFooter },
}
</script>
