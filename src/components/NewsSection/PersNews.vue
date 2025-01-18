<script setup>
import ItemNews from './ItemNews.vue';

</script>

<template>
  <div class="row">
    <div class="col-8">
      <img src="https://picsum.photos/600/300" class="img-fluid w-100 mb-4 rounded-3" alt="image-title">
      <h3 class="fs-4 mb-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel aliquam pariatur.</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, reiciendis nobis! Nobis assumenda maxime
        labore laboriosam qui culpa, quaerat sed quibusdam officiis magni tenetur optio, sequi a illo at! Quaerat!</p>
    </div>

    <div class="col-4 gap-4 d-flex flex-column">
      <ItemNews />
      <ItemNews />
      <ItemNews />
    </div>
  </div>
</template>
