<template>
  <div class="fixed top-0 left-0 z-20 flex h-full w-full items-center justify-center bg-black/50">
    <div class="w-full max-w-[480px] rounded-xl bg-white p-4 flex flex-col">
      <h2 class="mb-4 text-center text-xl font-semibold text-primaryDark">Оставить заявку</h2>
      <label for="phone" class="text-sm">Ваше имя</label>
      <input
        type="tel"
        name="name"
        id="name"
        placeholder="Имя"
        class="mb-5 w-full rounded-lg border border-gray-300 transition-all duration-200 placeholder:text-gray-300 focus:border-transparent focus:ring-2 focus:ring-primary"
      />

      <label for="phone" class="text-sm">Ваш телефон</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder="Телефон"
        class="w-full rounded-lg border border-gray-300 transition-all duration-200 placeholder:text-gray-300 focus:border-transparent focus:ring-2 focus:ring-primary mb-5"
      />
      <BaseButton text="Отправить" class="mx-auto"/>
    </div>
  </div>
</template>

<script lang="js">
import BaseButton from './BaseButton.vue'

export default {
  components: {BaseButton}

}
</script>

<style lang="scss" scoped></style>
