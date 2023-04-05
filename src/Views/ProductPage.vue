<template>
  <div class="flex min-h-full flex-col mt-52">
<!--    <TheHeader />-->
<!--    <TheMenu />-->
    <section class="mx-auto max-w-7xl grow p-4">
      <h2
        class="mt-5 text-center text-3xl font-bold tracking-wide"
      >
        Кирпич полнотелый одинарный
      </h2>

      <div class="mt-14 flex">
        <!-- Изображение -->
        <div class="basis-1/3 overflow-hidden rounded-lg">
          <img
            class="w-full rounded-lg object-cover"
            src="../assets/img/card.jpg"
            alt="brick"
          />
        </div>

        <!-- Контент -->
        <div class="basis-2/3 pl-5 pr-4 pb-4">
          <!-- Характеристики -->
          <table class="mt-3 w-full table-auto border-collapse">
            <tbody>
              <tr class="border-b">
                <td class="p-1 font-semibold">Марка, кгс/см2:</td>
                <td class="text-center">M250</td>
              </tr>
              <tr class="border-b">
                <td class="p-1 font-semibold">Вид размера:</td>
                <td class="text-center">1NF</td>
              </tr>
              <tr class="border-b">
                <td class="p-1 font-semibold">Размер, (ДхШхВ) мм:</td>
                <td class="text-center">250х120х65</td>
              </tr>
              <tr class="border-b">
                <td class="p-1 font-semibold">Поверхность:</td>
                <td class="text-center">Дикий камень</td>
              </tr>
              <tr class="border-b">
                <td class="p-1 font-semibold">Масса, г:</td>
                <td class="text-center">4300</td>
              </tr>
              <tr class="border-b">
                <td class="p-1 font-semibold">Морозостойкость:</td>
                <td class="text-center">F100</td>
              </tr>
              <tr class="border-b">
                <td class="p-1 font-semibold">Водополгощение:</td>
                <td class="text-center">6%</td>
              </tr>
              <tr>
                <td class="p-1 font-semibold">
                  <!-- Цена -->
                  <div
                    class="mt-3 inline-block rounded-lg bg-primaryDark px-5 py-2 text-white"
                  >
                    <span class="text-3xl font-medium">39</span>
                    <span class="ml-1 inline-block font-light">₽/шт.</span>
                  </div>
                </td>
                <td class="pt-3 text-center">
                  <span
                    class="inline-block rounded-lg bg-primary px-3 py-1 text-white"
                  >
                    В наличии
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Цвета -->
          <div class="mt-5 text-left">
            <span
              v-for="color in colors"
              :key="color.id"
              class="m-2 inline-block h-8 w-16 rounded border shadow-lg transition-transform duration-150 hover:scale-110"
              :style="{ backgroundColor: color.code }"
              :title="color.name"
            >
            </span>
          </div>
        </div>
      </div>
      <div>
        <h3 class="mt-4 text-2xl font-semibold">Возможно подробное описание</h3>
        <p class="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
          aperiam consectetur distinctio dolores est exercitationem neque quae
          rem totam unde! Atque esse facere facilis libero maiores nesciunt
          odio. Nam, numquam?
        </p>
      </div>
    </section>
<!--    <TheFooter />-->
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheMenu from '../components/TheMenu.vue';
import TheFooter from '../components/TheFooter.vue';

export default {
  name: 'ProductsPage',
  components: { TheHeader, TheMenu, TheFooter },
  data: () => ({
    colors: [
      {
        id: 1,
        name: 'Песчаный',
        code: '#FFD700',
      },
      {
        id: 2,
        name: 'Персик',
        code: '#FF8C00',
      },
      {
        id: 3,
        name: 'Красный',
        code: '#DC143C',
      },
      {
        id: 4,
        name: 'Шоколад',
        code: '#8B4513',
      },
      {
        id: 5,
        name: 'Хаки',
        code: '#2E8B57',
      },
      {
        id: 6,
        name: 'Млечный путь',
        code: '#5F9EA0',
      },
    ],
  }),
};
</script>

<style scoped></style>
