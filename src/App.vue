<template>
   <component :is="layout">
      <router-view />
   </component>

</template>

<script>
import MainLayout from './layouts/MainLayout.vue';

export default {
   name: 'App',
   components: {MainLayout},
   computed: {
      layout () {
         return this.$route.meta.layout + '-layout'
      }
   }
}
</script>

<style scoped></style>
