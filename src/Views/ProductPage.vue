<template>
   <div class="flex flex-col min-h-screen">
      <TheHeader/>
      <TheMenu/>
      <section class="max-w-7xl mx-auto grow p-4">

         <h2 class="text-center text-primary font-bold text-4xl tracking-wide text-stone-700 mt-5">
            Кирпич полнотелый одинарный
         </h2>

         <div class="flex mt-14">
            <!-- Изображение -->
            <div class="overflow-hidden basis-1/3 rounded-lg">
               <img class="w-full object-cover rounded-lg" src="../assets/img/card.jpg" alt="brick">
            </div>

            <!-- Контент -->
            <div class="pl-5 pr-4 pb-4 basis-2/3">
               <!-- Характеристики -->
               <table class="table-auto border-collapse w-full mt-3">
                  <tbody>
                  <tr class="border-b">
                     <td class="font-semibold p-1">
                        Марка, кгс/см2:
                     </td>
                     <td class="text-center">
                        M250
                     </td>
                  </tr>
                  <tr class="border-b">
                     <td class="font-semibold p-1">
                        Вид размера:
                     </td>
                     <td class="text-center">
                        1NF
                     </td>
                  </tr>
                  <tr class="border-b">
                     <td class="font-semibold p-1">
                        Размер, (ДхШхВ) мм:
                     </td>
                     <td class="text-center">
                        250х120х65
                     </td>
                  </tr>
                  <tr class="border-b">
                     <td class="font-semibold p-1">
                        Поверхность:
                     </td>
                     <td class="text-center">
                        Дикий камень
                     </td>
                  </tr>
                  <tr class="border-b">
                     <td class="font-semibold p-1">
                        Масса, г:
                     </td>
                     <td class="text-center">
                        4300
                     </td>
                  </tr>
                  <tr class="border-b">
                     <td class="font-semibold p-1">
                        Морозостойкость:
                     </td>
                     <td class="text-center">
                        F100
                     </td>
                  </tr>
                  <tr class="border-b">
                     <td class="font-semibold p-1">
                        Водополгощение:
                     </td>
                     <td class="text-center">
                        6%
                     </td>
                  </tr>
                  <tr>
                     <td class="font-semibold p-1">
                        <!-- Цена -->
                        <div class="bg-primaryDark text-white px-5 py-2 rounded-lg inline-block mt-3">
                           <span class="text-3xl font-medium">39</span>
                           <span class="inline-block ml-1 font-light">₽/шт.</span>
                        </div>
                     </td>
                     <td class="text-center pt-3">
                  <span class="inline-block px-3 py-1 bg-primary text-white rounded-lg">
                     В наличии
                  </span>
                     </td>
                  </tr>
                  </tbody>
               </table>
               <!-- Цвета -->
               <div class="mt-5">
            <span
                v-for="color in colors" :key="color.id"
                class="inline-block w-16 h-8 border rounded m-2 shadow-lg hover:scale-110 transition-transform duration-150"
                :style="{'backgroundColor': color.code}"
                :title="color.name"
            ></span>
               </div>
            </div>
         </div>
         <div>
            <h3 class="text-2xl font-semibold mt-4">Возможно подробное описание</h3>
            <p class="mt-4">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam consectetur distinctio dolores
               est exercitationem neque quae rem totam unde! Atque esse facere facilis libero maiores nesciunt odio.
               Nam, numquam?
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

export default {
   name: "ProductsPage",
   components: {TheHeader, TheMenu, TheFooter},
   data: () => ({
      colors: [
         {
            id: 1,
            name: 'Песчаный',
            code: '#FFD700'
         },
         {
            id: 2,
            name: 'Персик',
            code: '#FF8C00'
         },
         {
            id: 3,
            name: 'Красный',
            code: '#DC143C'
         },
         {
            id: 4,
            name: 'Шоколад',
            code: '#8B4513'
         },
         {
            id: 5,
            name: 'Хаки',
            code: '#2E8B57'
         },
         {
            id: 6,
            name: 'Млечный путь',
            code: '#5F9EA0'
         },
      ]
   })
}
</script>

<style scoped>

</style>
