<template>
   <TheHeader/>
   <TheMenu/>
   <div class="bg-[url('../assets/img/white-brick.png')]">
      <router-view/>
   </div>
   <TheFooter/>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheMenu from '../components/TheMenu.vue';
import TheFooter from "../components/TheFooter.vue";

export default {
   name: 'MainLayout',
   components: {TheFooter, TheHeader, TheMenu}
}
</script>

<style scoped>

</style>
