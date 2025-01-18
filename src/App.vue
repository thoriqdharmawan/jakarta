<script setup>
import CalendarSection from './components/CalendarSection.vue';
import HeroSection from './components/HeroSection.vue';
import NavigationSection from './components/NavigationSection.vue';
import NewsSection from './components/NewsSection.vue';
import TrendingNews from './components/TrendingNews.vue';
</script>

<template>
  <header>
    <NavigationSection />
  </header>

  <main>
    <HeroSection />
    <NewsSection />
    <CalendarSection />
    <TrendingNews />
  </main>
</template>
