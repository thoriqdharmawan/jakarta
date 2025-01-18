<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const images = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  url: `https://picsum.photos/600/600?random=${index + 1}`,
}));

const config = {
  autoplay: 4000,
  gap: 24,
  snapAlign: 'center',
  breakpointMode: 'carousel',
  breakpoints: {
    300: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    400: {
      itemsToShow: 2,
      snapAlign: 'center',
    },
  },
};
</script>

<template>
  <div class="carousel__wrapper">
    <Carousel v-bind="config">
      <Slide v-for="image in images" :key="image.id">
        <img :src="image.url" alt="image" />
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<style scoped>
img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
