<template>
  <section class="container mb-3">
    <h2 class="mb-3 fs-2 fw-bold">{{ title }}</h2>

    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
