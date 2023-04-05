<template>
   <div class="max-w-7xl mx-auto py-7">
      <h1 class="text-center text-3xl font-bold tracking-wide">
         <span class="text-primary">Наша</span> продукция
      </h1>
      <div
          class="mt-14 grid grid-flow-row grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-3"
      >
         <BrickCard v-for="i in 1" :key="i"/>
      </div>
   </div>
</template>

<script>
import BrickCard from '../components/CardBrick.vue'

export default {
   name: "ProductsPage",
   components: {BrickCard}
}
</script>

<style scoped>

</style>
