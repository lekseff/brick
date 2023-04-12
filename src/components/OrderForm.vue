<template>
  <div class="mx-auto max-w-7xl w-full border rounded-lg mb-5 shadow-lg shadow-gray-100">
    <form class="flex items-center justify-between px-5 py-5">
      <input
        type="tel"
        placeholder="Ваше имя"
        class="w-full rounded-md border border-gray-400 px-4 py-3 outline-none transition-all duration-150 placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-primary"
      />

      <input
        type="text"
        placeholder="Телефон"
        class="mx-5 w-full rounded-md border border-gray-400 px-4 py-3 outline-none transition-all duration-150 placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-primary"
      />
      <BaseButton text="Заказать" />
    </form>
  </div>
</template>

<script lang="js">
import BaseButton from './BaseButton.vue';
export default {
  components: { BaseButton }

}
</script>

<style lang="scss" scoped></style>
