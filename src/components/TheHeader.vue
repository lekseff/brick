<template>
   <header class="flex items-center justify-between px-5 py-10 text-white border-b border-white/20">
      <!-- Логотип -->
      <router-link :to="{name: 'home'}">
         <img class="w-56" src="../assets/img/full_logo.png" alt="Логотип"/>
      </router-link>
      <!-- Адрес -->
      <div class="flex items-center">
         <div class="mr-4 rounded-full bg-black/20 p-2.5">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
            >
               <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
               />
               <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
               />
            </svg>
         </div>
         <div>
        <span class="block text-sm font-medium text-white opacity-50"
        >Мы находимся</span>
            <span class="block text-base">39207, Тамбов, ул. Советская д.12</span>
         </div>
      </div>
      <!-- Телефон -->
      <div class="flex items-center">
         <div class="mr-4 rounded-full bg-black/20 p-2.5">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
            >
               <path
                   stroke-linecap="round"
                   stroke-linejoin="round"
                   d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
               />
            </svg>
         </div>
         <div>
            <span class="block text-sm font-medium opacity-50">Звоните по номеру</span>
            <a href="tel:+79201234567" class="block text-2xl">+7(920)123-45-67</a>
         </div>
      </div>
   </header>
</template>

<script>
export default {
   name: 'TheHeader'
}
</script>

<style scoped></style>
