<script>
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
};
</script>

<template>
  <div class="d-flex gap-3 align-items-center">
    <img :src="`https://picsum.photos/50/50?random=${id}`" class="img-fluid rounded" :alt="`Icon for event: ${name}`" />
    <div>
      <h4 class="fs-5 mb-0 fw-medium">{{ name || 'Unknown Event' }}</h4>
      <span class="text-secondary">{{ time || 'Time not specified' }}</span>
    </div>
  </div>
</template>
