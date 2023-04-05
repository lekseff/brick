<template>
  <div
    class="flex flex-col overflow-hidden rounded-lg bg-white border shadow-xl pb-4 hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl"
  >
    <div class="p-4">
      <img class="w-full object-cover rounded-lg" src="../assets/img/card1.jpg" alt="product"/>
    </div>
    <div class="flex grow flex-col px-6">
      <h3 class="text-center text-xl font-bold">Кирпич полнотелый</h3>
      <p class="mt-3 py-3 grow text-justify border-b border-dashed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime,
        quae tempora voluptatem officiis eaque qui temporibus totam corrupti.
      </p>
      <div class="mt-4 text-center flex items-center justify-between">
        <p class="text-sm">
          от
          <span class="px-1 text-3xl font-bold">35</span>
          руб/шт
        </p>
         <router-link :to="{name: 'product', params: {id: 2}}">
            <BaseButton text="Подробнее"/>
         </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  name: 'CardBrick',
   components: {BaseButton}

};
</script>
