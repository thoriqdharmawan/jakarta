<script>
export default {
  props: {
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
  <div class="d-flex gap-3">
    <img src="https://placehold.co/50" class="img-fluid rounded" alt="Event Icon">
    <div>
      <h4 class="fs-5 mb-0 fw-medium">{{ name }}</h4>
      <span class="text-secondary">{{ time }}</span>
    </div>
  </div>
</template>
