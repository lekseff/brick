<template>
   <router-link class="object-cover hover:scale-[1.02] hover:transition-all duration-200" :to="{name: 'product', params: {id: 6}}">
      <img class="w-full min-h-[220px] bg-gray-200 rounded-lg object-cover" src="../assets/img/card.jpg" alt="photo">
      <p class="text-center font-semibold text-lg px-4 mt-2 leading-none">
         Кирпич полнотелый одинарный
      </p>
   </router-link>
</template>

<script lang="js">
export default {
   name: 'CardBrickPopular'
}
</script>

<style lang="scss" scoped>

</style>
