<template>
   <div class="relative text-white before:absolute before:h-full before:w-full before:bg-black/50">
      <ul class="relative h-20 flex items-center uppercase justify-around max-w-7xl mx-auto">
         <li>
            <router-link :to="{name: 'home'}"
                         class="border-b-2 border-transparent hover:border-white transition-colors duration-200 tracking-wider">
               Главная
            </router-link>
         </li>
         <li>
            <router-link :to="{name: 'products'}"
                         class="text-primary border-b-2 border-transparent hover:border-primary transition-colors duration-200">
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
