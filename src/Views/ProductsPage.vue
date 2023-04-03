<template>
   <div class="flex flex-col min-h-screen text-stone-600">
      <div
          class="relative bg-[url('../assets/img/brick_back2.jpg')] bg-cover bg-no-repeat before:absolute before:h-full before:w-full before:bg-black/60">
         <div class="relative max-w-7xl mx-auto">
            <TheHeader/>
            <TheMenu/>
         </div>
      </div>
      <section class="max-w-7xl mx-auto grow p-4">
         <h2
             class="text-center text-4xl font-extrabold tracking-wide text-stone-700 mt-8"
         >
            Наша
            <span class="text-primary">продукция</span>
         </h2>
         <div class="mt-14">
            <CardBrickFull />
         </div>
         <div>
            <h3 class="text-2xl font-semibold text-stone-700 mt-4">Возможно подробное описание</h3>
            <p class="mt-4">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam consectetur distinctio dolores est exercitationem neque quae rem totam unde! Atque esse facere facilis libero maiores nesciunt odio. Nam, numquam?
            </p>
         </div>

      </section>
      <TheFooter/>
   </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheMenu from "../components/TheMenu.vue";
import TheFooter from "../components/TheFooter.vue";
import CardBrickFull from '../components/CardBrickFull.vue'

export default {
   name: "ProductsPage",
   components: {TheHeader, TheMenu, TheFooter, CardBrickFull}
}
</script>

<style scoped>

</style>
