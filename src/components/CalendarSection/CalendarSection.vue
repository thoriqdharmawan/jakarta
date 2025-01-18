<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import ItemEvent from './ItemEvent.vue';
import { formatDate, getWeekNumber } from '@/utils/helpers';

const date = ref(new Date());
const events = ref([]);
const attrs = ref([]);

const API_URL = 'http://localhost:3000/events';

const cache = new Map();

const fetchDataWithCache = async (params, targetRef, cacheKey) => {
  if (cache.has(cacheKey)) {
    targetRef.value = cache.get(cacheKey);
    return;
  }

  try {
    const { data } = await axios.get(API_URL, { params });
    const formattedData = data?.map(item => ({
      key: item?.id,
      dot: true,
      dates: item.date,
    })) || [];

    cache.set(cacheKey, formattedData);
    targetRef.value = formattedData;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const fetchEventsWithCache = async (date) => {
  const cacheKey = `events-${date}`;
  if (cache.has(cacheKey)) {
    events.value = cache.get(cacheKey)
    return;
  }

  try {
    const { data } = await axios.get(API_URL, { params: { date } });
    cache.set(cacheKey, data);
    events.value = data;
  } catch (error) {
    console.error('Error fetching Events:', error);
  }
};

const onDayClick = (view) => fetchEventsWithCache(view.id);
const onMoveWeek = (month) => {
  const week = month[0].week;
  fetchDataWithCache({ week }, attrs, `events-week-${week}`);
};

onMounted(() => {
  const currentWeek = getWeekNumber(new Date());
  fetchDataWithCache({ week: currentWeek }, attrs, `events-week-${currentWeek}`);
  fetchEventsWithCache(new Date().toISOString().split('T')[0]);
});
</script>

<template>
  <section class="container mt-5 mb-5">
    <h3 class="mb-3">Events</h3>
    <div class="row gap-4 event-wrapper">
      <div class="col">
        <div class="p-3 mb-5 rounded">
          <VDatePicker view="weekly" borderless transparent title-position="left" is-dark="system" color="gray"
            v-model="date" :attributes='attrs' @dayclick="onDayClick" @did-move="onMoveWeek" />
          <div>
            <div class="d-flex row gap-3 mt-5">
              <h4 class="fs-5 mb-0">Daftar Event {{ formatDate(date) }}</h4>
              <div v-if="events.length === 0" class="empty-state text-center py-4">
                <p class="text-secondary">No events available for this date. Please select another date.</p>
              </div>

              <div v-for="event in events" :key="event.id">
                <ItemEvent :name="event.title" :time="event.time" :id="event.id" />
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="">
          <img
            src="https://www.jakarta.go.id/storage/files/shares/Amasukin Gambar/Event/2025/festivalharapan-istiqlal.jpg"
            class="img-fluid" alt="">
          <div class="mt-3">
            <h4>Festival Harmoni Istiqlal</h4>
            <p class="line-clamp-2">Festival Harmoni Istiqlal menampilkan dua pameran utama yang menarik, yaitu galeri
              "Riwayat: Telusur
              Budaya Islam di Nusantara" dan galeri "Imam Bukhari: Islamic Art". Festival yang memadukan seni,
              teknologi, dan spiritualitas harmoni ini melibatkan lebih dari 50 seniman dari Indonesia, Uzbekistan,
              Tajikistan, India, Tiongkok, dan lain-lain. Pemesanan tiket bisa dilakukan melalui</p>
            <a href="https://goers.co/harmoniistiqlal" class="link">https://goers.co/harmoniistiqlal.</a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style>
.event-wrapper {
  min-height: 220px;
}

.vc-container.vc-weekly {
  width: 100%;
}

.vc-container .vc-title,
.vc-container .vc-arrow {
  background-color: #fff;
}

.calendar-container {
  max-width: 600px;
}


.empty-state {
  border: 1px dashed #ddd;
  background-color: #f9f9f9;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 250px;
}

.empty-state p {
  font-size: 14px;
  color: #888;
  margin: 0px;
}
</style>
