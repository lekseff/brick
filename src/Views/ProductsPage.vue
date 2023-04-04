<template>
   <div>
      <h1>Продукты</h1>
      <div
          class="mt-14 grid grid-flow-row grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
         <BrickCard v-for="i in 3" :key="i"/>
      </div>
   </div>
</template>

<script>
import BrickCard from '../components/BrickCard.vue'

export default {
   name: "ProductsPage",
   components: {BrickCard}
}
</script>

<style scoped>

</style>
