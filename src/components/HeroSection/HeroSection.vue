<script setup lang="ts">
import IconDot from '../icons/IconDot.vue';

</script>

<template>
  <section class="container text-center mt-5">
    <div class="row gap-5">
      <div class="col">
        <div class="text-start">

          <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Sukses_Jakarta_Untuk_Indonesia.png"
            alt="Sukses Jakarta Untuk Indonesia logo" class="img-fluid logo">
          <h1 class="title fw-bold">Jakarta Jati Diri Indonesia, Megapolitan Dunia</h1>
          <p class="desc">Kehidupan perkotaan yang semarak dengan berbagai keragaman, dari warisan budaya, inovasi tanpa
            henti, hingga destinasi kelas dunia yang memikat. Selamat datang!</p>
        </div>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Apa yang Anda cari?" aria-label="Apa yang Anda cari?"
            aria-describedby="button-addon2">
          <button class="btn btn-dark" type="button" id="button-addon2">Cari</button>
        </div>
      </div>
      <div class="col">
        <div class="hero-wrapper">
          <img src="https://fk.ui.ac.id/iro/wp-content/uploads/2021/03/Jakarta.jpg"
            class="img-fluid rounded-4 hero-image" alt="Kota Jakarta">

          <IconDot class="dot img-fluid" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logo {
  max-width: 5rem;
}

.title {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.desc {
  font-size: 1rem;
}

.hero-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.1s ease-out, filter 0.1s ease;
  transform: translate(-0.5rem, -0.5rem);
  z-index: 1;
}

.dot {
  position: absolute;
  right: -1rem;
  bottom: -2rem;
}

.hero-wrapper:hover .hero-image {
  transform: translate(0, 0);
}

.hero-wrapper:hover::before {
  background: rgba(0, 0, 0, 0.6);
}
</style>
