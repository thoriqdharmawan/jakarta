<script>
import suksesImage from '@/assets/sukses.png';

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      suksesImage
    };
  },
};
</script>

<template>
  <div class="d-flex gap-3 align-items-center">
    <img :src="suksesImage" class="img-fluid rounded" :alt="`Icon for event: ${name}`" />
    <div>
      <h4 class="fs-5 mb-0 fw-medium">{{ name || 'Unknown Event' }}</h4>
      <span class="text-secondary">{{ time || 'Time not specified' }}</span>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
