<template>
   <div class="flex text-stone-600">
      <div class="overflow-hidden  basis-1/3 rounded-lg">
         <img class="w-full object-cover rounded-lg" src="../assets/img/card.jpg" alt="brick">
      </div>
      <div class="pl-5 pr-4 pb-4 basis-2/3">
         <h3 class="text-2xl font-bold text-stone-700">
            Кирпич полнотелый одинарный
         </h3>

         <!-- Цвета -->
         <div class="mt-5">
            <span
                v-for="color in colors" :key="color.id"
                class="inline-block w-16 h-8 border rounded m-2 shadow-lg hover:scale-110 transition-transform duration-150"
                :style="{'backgroundColor': color.code}"
                :title="color.name"
            ></span>
         </div>

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
            <!--            <tr class="border-b">-->
            <!--               <td class="font-semibold p-1">-->
            <!--                  Цвет:-->
            <!--               </td>-->
            <!--               <td class="text-center">-->
            <!--&lt;!&ndash;                  Песчаный, Персик, Красный&ndash;&gt;-->
            <!--                  <span-->
            <!--                      v-for="color in colors" :key="color.id"-->
            <!--                      class="inline-block w-8 h-8 border rounded-lg m-1"-->
            <!--                      :style="{'backgroundColor': color.code}"-->
            <!--                      :title="color.name"-->
            <!--                  ></span>-->
            <!--               </td>-->
            <!--            </tr>-->
            </tbody>
         </table>

         <!-- Наличие и цена -->
         <div class="mt-5 flex items-center justify-between">
            <span class="inline-block px-3 py-1 bg-primary text-white rounded-lg">
               В наличии
            </span>
            <span class="inline-block px-3 py-1 bg-red-500 text-white rounded-lg">
               Нет в наличии
            </span>
            <div class="bg-stone-600 text-white px-5 py-1 rounded-lg">
               <span class="text-3xl font-medium">39</span>
               <span class="inline-block ml-1 font-light">₽/шт.</span>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "CardBrickFull",
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
