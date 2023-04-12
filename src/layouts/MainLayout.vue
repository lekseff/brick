<template>
  <div class="flex flex-col min-h-screen relative">
    <TheHeader />
    <TheMenu bgColor="bg-primaryDark" />
    <div class=" grow">
      <router-view />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue"
import TheMenu from "../components/TheMenu.vue"
import TheFooter from "../components/TheFooter.vue"

export default {
  name: "MainLayout",
  components: { TheFooter, TheHeader, TheMenu },
}
</script>

<style scoped>

</style>
