<script setup>
import CalendarSection from './components/CalendarSection.vue';
import HeroSection from './components/HeroSection.vue';
import NavigationSection from './components/NavigationSection.vue';
import HighlightSection from './components/HighlightSection.vue';
import NewsSection from './components/NewsSection/NewsSection.vue';
</script>

<template>
  <header>
    <NavigationSection />
  </header>

  <main>
    <HeroSection />
    <HighlightSection />
    <CalendarSection />
    <NewsSection />
  </main>
</template>
