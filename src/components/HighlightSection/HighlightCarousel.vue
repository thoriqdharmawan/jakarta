<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const images = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  url: `https://picsum.photos/600/900?random=${index + 1}`,
  title: 'Hello this is text',
  descrption: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Possimus, culpa!'
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
        <div class="carousel-item-wrapper">
          <img :src="image.url" alt="image" class="carousel-image" />
          <div class="overlay">
            <div class="overlay-text">{{ image.title }}</div>
            <div class="overlay-desc">{{ image.descrption }}</div>
          </div>
        </div>
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

.carousel-item-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}

.carousel-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  padding: 12px;
}

.overlay-text {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}

.overlay-desc {
  color: white;
  font-size: 0.9rem;
}
</style>
