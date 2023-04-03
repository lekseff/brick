<template>
  <div
    class="flex flex-col overflow-hidden rounded-lg bg-white text-stone-600 shadow-xl hover:-translate-y-1 transition-all duration-300 hover:shadow-2xl"
  >
    <div>
      <img class="w-full object-cover" src="../assets/img/card1.jpg" alt="product"/>
    </div>
    <div class="flex grow flex-col px-3 pb-5">
      <h3 class="mt-6 text-center text-xl font-bold text-stone-700">
        Кирпич полнотелый
      </h3>

      <p class="mt-6 grow text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maxime,
        quae tempora voluptatem officiis eaque qui temporibus totam corrupti.
        Excepturi magnam odio porro facilis, exercitationem voluptatem molestias
        adipisci quas quasi.
      </p>

      <div class="mt-6 border-t border-dashed text-center">
        <p class="py-6 text-sm">
          от
          <span class="px-1 text-3xl font-bold text-stone-700">35</span>
          руб/шт
        </p>
        <button
          class="rounded-full bg-primary px-9 py-3 text-lg font-medium uppercase tracking-widest text-white transition-colors duration-150 hover:bg-primaryHover"
        >
          Заказать
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BrickCard',
};
</script>
