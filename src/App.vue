<template>
   <component :is="layout">
      <router-view />
   </component>
   <OrderModal/>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue';
import HomeLayout from './layouts/HomeLayout.vue';
import OrderModal from './components/OrderModal.vue';

export default {
   name: 'App',
   components: {MainLayout, HomeLayout, OrderModal},
   data: () => ({
      modal: false
   }),
   computed: {
      layout () {
         return this.$route.meta.layout + '-layout'
      }
   },
}
</script>

<style scoped></style>
