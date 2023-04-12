<template>
  <div class="relative flex min-h-screen flex-col">
    <TheHeader />
    <TheMenu bgColor="bg-primaryDark" />
    <div class="grow">
      <router-view />
    </div>
    <OrderForm />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue"
import TheMenu from "../components/TheMenu.vue"
import TheFooter from "../components/TheFooter.vue"
import OrderForm from "../components/OrderForm.vue"

export default {
  name: "MainLayout",
  components: { TheFooter, TheHeader, TheMenu, OrderForm},
}
</script>

<style scoped></style>
