<template>
   <button
       class="rounded-full bg-primary px-9 py-3 text-lg font-medium tracking-wide text-white transition-colors duration-150 hover:bg-primaryHover w-fit">
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
