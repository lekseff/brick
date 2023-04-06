<template>
  <nav class='`relative text-white before:absolute before:w-full z-10`'
       :class='bgColor'
  >
    <ul class='relative h-20 flex items-center uppercase justify-around max-w-7xl mx-auto'>
      <li>
        <router-link :to="{name: 'home'}" class='nav-link'>
          Главная
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'products'}" class='nav-link'>
          Продукция
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'contacts'}" class='nav-link'>
          Контакты
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'delivery'}" class='nav-link'>
          Доставка
        </router-link>
      </li>
    </ul>
    <!--    <p class='text-red-500'>{{ bgColor }}</p>-->
  </nav>
</template>

<script>
export default {
  name: 'TheMenu',
  props: {
    bgColor: {
      type: String,
      default: 'bg-black/50',

    },
  },
}
</script>

<style scoped>

</style>
