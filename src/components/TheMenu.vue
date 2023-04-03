<template>
   <div class="text-white">
      <ul class="h-20 flex items-center uppercase justify-around">
         <li>
            <router-link :to="{name: 'home'}"
                         class="border-b-2 border-transparent hover:border-white transition-colors duration-200">
               Главная
            </router-link>
         </li>
         <li>
            <router-link :to="{name: 'products'}"
                         class="border-b-2 border-transparent hover:border-white transition-colors duration-200">
               Продукция
            </router-link>
         </li>
         <li>
            <router-link :to="{name: 'contacts'}"
                         class="border-b-2 border-transparent hover:border-white transition-colors duration-200">
               Контакты
            </router-link>
         </li>
         <li>
            <router-link :to="{name: 'delivery'}"
                         class="border-b-2 border-transparent hover:border-white transition-colors duration-200">
               Доставка
            </router-link>
         </li>
      </ul>
   </div>
</template>

<script>
export default {
   name: "TheMenu"
}
</script>

<style scoped>

</style>
