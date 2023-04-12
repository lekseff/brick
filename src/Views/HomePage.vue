<template>
   <div
       class="relative flex flex-col w-full h-screen bg-[url('../assets/img/back14.jpg')] bg-cover bg-center bg-no-repeat before:absolute before:h-full before:w-full before:bg-black/40">
      <TheHeader/>
      <TheMenu/>

      <!-- Информация -->
      <div class="relative max-w-7xl grow mx-auto p-4 w-full">
<!--         <div class="w-full">-->
            <h1 class="text-6xl mt-[10%] max-w-4xl font-extrabold uppercase text-white tracking-wide leading-tight">
               Тамбовский кирпичный завод "Гиперпресс"
            </h1>
            <span class="mt-3 block text-lg font-medium text-white opacity-80">
               Лучший в мире кирпичный завод завод (Тут какой-то текст)
            </span>
            <BaseButton text="Заказать" class="mt-6"/>
<!--         </div>-->
      </div>

   </div>

   <main class="mx-auto max-w-7xl bg-white p-4">

      <!-- Популярное -->
      <section class="pt-10">
         <h2 class="text-center text-4xl font-extrabold tracking-wide">
           <span class="font-bold">
             <span class="text-primary">П</span>опулярное
           </span>
         </h2>
         <!-- Карточки -->
         <div class="mt-14 grid grid-flow-row grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CardBrickPopular v-for="i in 3" :key="i"/>
         </div>
      </section>

      <!-- О нас -->
      <section class="pt-16">
         <h2 class="text-center text-4xl font-extrabold tracking-wide">
            Немного
            <span class="text-primary">о нас</span>
         </h2>
         <div class="mt-16 flex pb-4">
            <div class="basis-2/5 overflow-hidden rounded-lg">
               <img class="h-full object-cover" src="../assets/img/back.jpeg" alt="photo"/>
            </div>
            <div class="grow basis-3/5 pb-4 pl-7 pr-4">
               <h3 class="text-2xl font-bold">
                  Тамбовский кирпичный завод "Гиперпресс"
               </h3>
               <p class="mt-6 text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  suscipit architecto hic impedit aspernatur dicta rem tempore
                  perferendis minima veritatis facere ullam nemo obcaecati minus
                  delectus non, nam, aut doloribus alias maxime blanditiis tenetur ab!
                  Vel nemo dicta ducimus iusto architecto vitae magni assumenda
                  recusandae, minus, sint voluptate. Autem, iure.
               </p>
               <!-- <BaseButton text="Связаться" class="mt-6"/> -->
            </div>
         </div>
      </section>
   </main>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheMenu from '../components/TheMenu.vue';
import CardBrickPopular from '../components/CardBrickPopular.vue';
import Footer from '../components/TheFooter.vue';
import BaseButton from '../components/BaseButton.vue';

export default {
   name: 'HomePage',
   components: {TheHeader, TheMenu, CardBrickPopular, Footer, BaseButton},

};
</script>

<style scoped></style>
