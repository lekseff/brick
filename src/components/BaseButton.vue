<template>
   <button
       class="rounded-full bg-primary px-7 py-2 text-lg font-medium tracking-wide text-white transition-colors duration-150 hover:bg-primaryHover w-fit">
      {{ text }}
   </button>
</template>

<script>
export default {
   name: "BaseButton",
   props: {
      text: String
   }
}
</script>
