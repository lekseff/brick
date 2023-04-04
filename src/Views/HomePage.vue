<template>
  <div
    class="relative h-screen bg-[url('../assets/img/back.jpg')] bg-cover bg-center bg-no-repeat before:absolute before:h-full before:w-full before:bg-black/40"
  >
     <!-- Header -->
     <TheHeader />
     <!-- Панель навигации -->
     <TheMenu />

    <div class="relative mx-auto flex h-full max-w-7xl flex-col">

      <!-- Информация -->
      <div class="relative h-full">
        <div class="absolute left-4 top-24">
          <h1 class="max-w-4xl text-6xl font-extrabold uppercase text-white tracking-wide leading-tight">
            Тамбовский кирпичный завод "Гиперпресс"
          </h1>
          <span class="mt-3 block text-lg font-medium text-white opacity-80">
            Лучший в мире кирпичный завод завод (Тут какой-то текст)
          </span>
          <button
            class="mt-8 rounded-full bg-primary px-9 py-3 text-lg font-medium uppercase tracking-widest text-white transition-colors duration-150 hover:bg-primaryHover"
          >
            Заказать
          </button>
        </div>
      </div>
    </div>
  </div>

  <main class="mx-auto max-w-7xl bg-white p-4">
    <!-- Продукция -->
    <section class="pt-14">
      <h2
        class="text-center text-4xl font-extrabold tracking-wide text-stone-700"
      >
        <span class="text-primary font-bold">
            Популярное</span>
      </h2>
      <!-- Карточки -->
      <div
        class="mt-14 grid grid-flow-row grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <BrickCard v-for="i in 3" :key="i" />
      </div>
    </section>

    <!-- О нас -->
    <section class="pt-16">
      <h2
        class="text-center text-4xl font-extrabold tracking-wide text-stone-700"
      >
        Немного
        <span class="text-primary">о нас</span>
      </h2>
      <div class="mt-16 flex pb-4 text-stone-600">
        <div class="basis-2/5 overflow-hidden rounded-lg">
          <img
            class="h-full object-cover"
            src="../assets/img/back.jpeg"
            alt="photo"
          />
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
          <button
            class="mt-6 rounded-full bg-primary px-9 py-3 text-lg font-medium uppercase tracking-widest text-white transition-colors duration-150 hover:bg-primaryHover"
          >
            Связаться
          </button>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <Footer />
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheMenu from '../components/TheMenu.vue';
import BrickCard from '../components/BrickCard.vue';
import Footer from '../components/TheFooter.vue';

export default {
  name: 'HomePage',
  components: { TheHeader, TheMenu, BrickCard, Footer },

};
</script>

<style scoped></style>
