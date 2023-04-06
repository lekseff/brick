<template>
   <component :is="layout">
      <router-view />
   </component>

</template>

<script>
import MainLayout from './layouts/MainLayout.vue';
import HomeLayout from './layouts/HomeLayout.vue';

export default {
   name: 'App',
   components: {MainLayout, HomeLayout},
   computed: {
      layout () {
         return this.$route.meta.layout + '-layout'
      }
   }
}
</script>

<style scoped></style>
