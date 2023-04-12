<template>
   <div class="max-w-7xl mx-auto py-7 px-3">
      <h1 class="text-center text-3xl font-bold tracking-wide">
         <span class="text-primary">Наши</span> контакты
      </h1>
      <section class="flex mt-14">

         <div class="p-5 border border-gray-200 bg-white rounded-lg mr-5 shadow-lg shadow-gray-100">
            <div class="basis-2/6 font-semibold text-xl">
               <h2 class="border-b pb-3">Тамбовский кирпичный завод "Гиперпресс"</h2>
               <div class="mt-9 space-y-5">
   
                  <!-- Телефон -->
                  <div class="flex items-center relative">
                     <div class="mr-4 rounded-full bg-primary/90 p-2.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.3"
                            stroke="white"
                            class="h-7 w-7"
                        >
                           <path
                               stroke-linecap="round"
                               stroke-linejoin="round"
                               d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                           />
                        </svg>
                     </div>
                     <div>
                        <span class="block text-base font-medium opacity-70">Телефон</span>
                        <a href="tel:+79201234567" class="block text-lg font-semibold">+7(920)123-45-67</a>
                     </div>
                  </div>
   
                  <!-- Адрес -->
                  <div class="flex items-center relative">
                     <div class="mr-4 rounded-full bg-primary/90 p-2.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.3"
                            stroke="white"
                            class="h-7 w-7"
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
                        <span class="block text-base font-medium opacity-70">Адрес</span>
                        <span class="block text-lg font-semibold">39207, Тамбов, ул. Советская д.12</span>
                     </div>
                  </div>
   
                  <!-- Email -->
                  <div class="flex items-center relative">
                     <div class="mr-4 rounded-full bg-primary/90 p-2.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.3"
                             stroke="white"
                            class="w-7 h-7"
                        >
                           <path
                               stroke-linecap="round"
                               stroke-linejoin="round"
                                 d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                        </svg>
                     </div>
                     <div>
                        <span class="block text-base font-medium opacity-70">Email</span>
                        <a class="block text-lg font-semibold hover:underline" href="mailto:mail@mail.com">mail@yandex.com</a>
                     </div>
                  </div>
   
                  <!-- Режим работы -->
                  <div class="flex items-center relative">
                     <div class="mr-4 rounded-full bg-primary/90 p-2.5">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.3"
                            stroke="white"
                            class="w-7 h-7">
                           <path
                               stroke-linecap="round"
                               stroke-linejoin="round"
                               d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                           />
                        </svg>
                     </div>
                     <div>
                        <span class="block text-base font-medium opacity-70">Режим работы</span>
                        <p class="block text-lg font-semibold">
                           <span class="text-base mr-2">Пн-Сб:</span>c 9:00 до 18:00
                        </p>
                     </div>
                  </div>
   
               </div>
            </div>
         </div>

         <div class="basis-4/6 p-5 border border-gray-200 bg-white rounded-lg shadow-lg shadow-gray-100">
            <img class="object-cover rounded-lg border w-full" src="../assets/img/map.jpg" alt="map">
         </div>
      </section>
   </div>
</template>

<script>
export default {
   name: "ContactsPage"
}
</script>

<style scoped>

</style>
