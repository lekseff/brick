<template>
   <footer class="text-base text-stone-600 bg-neutral-300/40">
      <div class="mx-auto flex max-w-7xl items-start justify-between py-7 px-4">
         <!-- Логотип -->
         <div class="w-3/12 px-3">
            <router-link :to="{ name: 'home' }">
               <img class="w-56" src="../assets/img/full_logo.png" alt="Логотип"/>
            </router-link>
         </div>

         <!-- Адреса -->
         <div class="w-3/12 space-y-2 px-3">
            <span class="block font-semibold underline underline-offset-4">
               Адреса
            </span>
            <p>
               <span class="font-semibold">Офис:</span>
               Тамбовская область, Тамбов, ул. Советская д.100
            </p>
            <p>
               <span class="font-semibold">Производство:</span>
               Тамбовская область, Котовск, ул. К.Маркса д.100
            </p>
         </div>

         <!-- Режим работы -->
         <div class="flex w-2/12 justify-center px-3">
            <div>
               <span class="block font-semibold underline underline-offset-4">
                  Режим работы
               </span>
               <div class="mt-2">
                  <span class="text-sm">пн-пт:</span>
                  <span class="ml-2">9:00 &ndash; 18:00</span>
               </div>
               <div>
                  <span class="text-sm">Сб:</span>
                  <span class="ml-2">10:00 &ndash; 17:00</span>
               </div>
               <div>
                  <span class="text-sm">Вс:</span>
                  <span class="ml-2">Выходной</span>
               </div>
            </div>
         </div>

         <!-- Контакты -->
         <div class="w-3/12 px-3">
            <div class="flex items-center justify-end">
               <div class="mr-4 rounded-full bg-black/20 p-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" class="h-5 w-5">
                     <path stroke-linecap="round" stroke-linejoin="round"
                           d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                  </svg>
               </div>
               <div>
                  <span class="block text-sm font-medium opacity-50">
                     Задать вопрос
                  </span>
                  <a href="tel:+79201234567" class="block text-2xl">
                     +7(920)123-45-67
                  </a>
               </div>
            </div>
            <!-- Почта -->
            <div class="mt-1 flex items-center justify-end">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
               </svg>
               <a class="ml-1 hover:underline" href="mailto:mail@mail.com">
                  mail@yandex.com
               </a>
            </div>
            <!-- Соц иконки -->
            <div class="mt-5 flex justify-end space-x-2">
               <a class="inline-block h-9 w-9 transition-transform hover:scale-105" href="#">
                  <img class="w-full object-contain" src="../assets/img/Telegram.svg" alt="Telegram"/>
               </a>
               <a class="inline-block h-9 w-9 transition-transform hover:scale-105" href="#">
                  <img class="w-full object-contain" src="../assets/img/VK.svg" alt="Telegram"/>
               </a>
               <a class="inline-block h-9 w-9 transition-transform hover:scale-105" href="#">
                  <img class="w-full object-contain" src="../assets/img/WhatsApp.svg" alt="Telegram"/>
               </a>
               <a class="inline-block h-9 w-9 transition-transform hover:scale-105" href="#">
                  <img class="w-full object-contain" src="../assets/img/OK.svg" alt="Telegram"/>
               </a>
            </div>
         </div>
      </div>

      <!-- Копирайт -->
      <p class="border-t border-primaryDark/10 p-2 text-center text-sm">
         &copy;
         <span class="ml-2">
            Тамбовский кирпичный завод "Гиперпресс", 2023
         </span>
      </p>
   </footer>
</template>

<script>
export default {
   name: 'TheFooter',
};
</script>
