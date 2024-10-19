<script setup lang="ts">
import image from '../assets/img.png';

console.log(image);
</script>

<template>
  <div>
    Hello Nuxt!
    <img :src="image" />
  </div>
</template>
