<script setup>
import CalendarSection from './components/CalendarSection/CalendarSection.vue';
import HeroSection from './components/HeroSection/HeroSection.vue';
import NavigationSection from './components/NavigationSection/NavigationSection.vue';
import HighlightSection from './components/HighlightSection/HighlightSection.vue';
import NewsSection from './components/NewsSection/NewsSection.vue';
import FooterSection from './components/Footer/FooterSection.vue';
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

  <FooterSection />
</template>
