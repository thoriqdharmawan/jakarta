<script setup>
import 'vue3-carousel/dist/carousel.css';
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import SectionWrapper from '../common/SectionWrapper.vue';

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
    600: {
      itemsToShow: 3,
      snapAlign: 'center',
    },
  },
};


const highlights = ref([]);

const API_URL = 'http://localhost:3000/hightlights';

const cache = new Map();

const fetchDataWithCache = async (targetRef, cacheKey) => {
  if (cache.has(cacheKey)) {
    targetRef.value = cache.get(cacheKey);
    return;
  }

  try {
    const { data } = await axios.get(API_URL);

    cache.set(cacheKey, data);
    targetRef.value = data.map((d, idx) => ({ ...d, url: `https://picsum.photos/400/400?random=${idx + 1}`, }));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(() => {
  fetchDataWithCache(highlights, "highlights");
});
</script>

<template>
  <div class="carousel__wrapper">
    <SectionWrapper title="Highlights">
      <Carousel v-bind="config">
        <Slide v-for="hightlight in highlights" :key="hightlight.id">
          <div class="carousel-item-wrapper">
            <img :src="hightlight.url" alt="image" class="carousel-image" />
            <div class="overlay">
              <div class="overlay-text line-clamp-2">{{ hightlight.title }}</div>
              <div class="overlay-desc line-clamp-3">{{ hightlight.description }}</div>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </SectionWrapper>
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
  padding: 24px;
  user-select: none;
}

.overlay-text {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
}

.overlay-desc {
  color: white;
  font-size: 1rem;
}
</style>
