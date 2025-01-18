<script setup lang="ts">
import SectionWrapper from '../common/SectionWrapper.vue';

import PersNews from './PersNews.vue';
import TrendingNews from './TrendingNews.vue';
</script>

<template>
  <SectionWrapper title="Berita dan Siaran Pers">
    <PersNews />
  </SectionWrapper>

  <SectionWrapper title="Berita Sedang Tren">
    <TrendingNews />
  </SectionWrapper>
</template>
