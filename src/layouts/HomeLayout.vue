<template>
  <router-view />
  <OrderForm />
  <TheFooter />
</template>

<script>
import TheFooter from "../components/TheFooter.vue"
import OrderForm from "../components/OrderForm.vue"

export default {
  name: "HomeLayout",
  components: { TheFooter, OrderForm },
}
</script>
