<template>
  <footer class="bg-dark text-white py-5 mt-5">
    <div class="container gap-3 d-flex flex-column">
      <div class="row align-items-center">
        <div class="col-12 text-center">
          <div class="image-container">
            <img src="https://www.jakarta.go.id/images/icons/jsc.png" alt="Image 1" class="image-item" />
            <img src="https://www.jakarta.go.id/images/icons/satudataicon.png" alt="Image 2" class="image-item" />
            <img src="https://www.jakarta.go.id/images/icons/logo-bjid-putih.png" alt="Image 3" class="image-item" />
            <img src="https://www.jakarta.go.id/images/icons/ppid.png" alt="Image 4" class="image-item" />
            <img src="https://www.jakarta.go.id/images/icons/jala.png" alt="Image 4" class="image-item" />
          </div>
        </div>
      </div>
      <hr />
      <div class="row align-items-start">
        <div class="col-md-6 mb-3">
          <img :src="logoSrc" alt="Sukses Jakarta Untuk Indonesia" class="logo-img" />
          <h2 class="h5 fw-bold">JAKARTA.GO.ID</h2>
          <address>
            Jl. Medan Merdeka Selatan 8-9<br />
            Jakarta Pusat, Jakarta, Indonesia<br />
            <span>Telp:</span> <a href="tel:+62213822255" class="text-decoration-none">(+6221) 382 2255</a><br />
            <span>Faks:</span> <a href="fax:+62213822255" class="text-decoration-none">(+6221) 382 2255</a><br />
            <span>Surel:</span> <a href="mailto:dki@jakarta.go.id" class="text-decoration-none">dki@jakarta.go.id</a>
          </address>
        </div>

        <div class="col-md-6 mb-3 text-md-end">
          <h2 class="h5 fw-bold">Statistik Pengunjung</h2>
          <ul class="list-unstyled small">
            <li><strong>Hari ini:</strong> 852</li>
            <li><strong>Kemarin:</strong> 5,911</li>
            <li><strong>Minggu ini:</strong> 34,425</li>
            <li><strong>Bulan ini:</strong> 97,018</li>
            <li><strong>Total:</strong> 7,545,722</li>
          </ul>

          <div class="row mt-4">
            <div class="col">
              <h2 class="h6 fw-bold mb-3 text-end">Ikuti Kami</h2>
              <div class="social-media-icons">
                <img src="https://www.jakarta.go.id/images/icons/fb.png" alt="Facebook" class="social-icon" />
                <img src="https://www.jakarta.go.id/images/icons/ftwitterx.png" alt="Twitter" class="social-icon" />
                <img src="https://www.jakarta.go.id/images/icons/youtubeicon.png" alt="YouTube" class="social-icon" />
                <img src="https://www.jakarta.go.id/images/icons/ig.png" alt="Instagram" class="social-icon" />
              </div>
            </div>
          </div>
        </div>


      </div>

      <div class="text-center pt-3 border-top mt-3">
        <p class="small mb-0">
          &copy; 2025 Dinas Komunikasi, Informatika dan Statistik Pemprov DKI Jakarta
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import logo from '@/assets/sjui-white.png';

export default {
  data() {
    return {
      logoSrc: logo,
    };
  },
};
</script>

<style scoped>
.logo-img {
  width: 50px;
  height: auto;
  margin-bottom: 12px;
}

footer {
  font-size: 0.9rem;
}

footer address {
  line-height: 1.6;
}

.image-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
}

.image-item {
  width: auto;
  height: 50px;
  object-fit: scale-down;
  margin: 5px;
}

.social-media-icons {
  display: flex;
  justify-content: end;
  gap: 20px;
}

.social-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.1);
}
</style>
