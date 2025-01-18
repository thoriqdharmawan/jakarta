<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import ItemEvent from './ItemEvent.vue';
import { getWeekNumber } from '@/utils/helpers';

const date = ref(new Date());
const reminders = ref([]);
const attrs = ref([]);

const API_URL = 'http://localhost:3000/reminders';

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

const fetchRemindersWithCache = async (date) => {
  const cacheKey = `reminders-${date}`;
  if (cache.has(cacheKey)) {
    reminders.value = cache.get(cacheKey);
    return;
  }

  try {
    const { data } = await axios.get(API_URL, { params: { date } });
    cache.set(cacheKey, data);
    reminders.value = data;
  } catch (error) {
    console.error('Error fetching reminders:', error);
  }
};

const onDayClick = (view) => fetchRemindersWithCache(view.id);
const onMoveWeek = (month) => {
  const week = month[0].week;
  fetchDataWithCache({ week }, attrs, `events-week-${week}`);
};

onMounted(() => {
  const currentWeek = getWeekNumber(new Date());
  fetchDataWithCache({ week: currentWeek }, attrs, `events-week-${currentWeek}`);
});
</script>

<template>
  <section class="container mt-5 mb-5">
    <div class="row gap-4">
      <div class="col">
        <div class="p-3 mb-5 rounded">
          <VDatePicker view="weekly" borderless transparent title-position="left" is-dark="system" color="gray"
            v-model="date" :attributes='attrs' @dayclick="onDayClick" @did-move="onMoveWeek" />
          <div>
            <h3 class="mb-3">Events</h3>
            <div class="d-flex row gap-3">
              <div v-for="reminder in reminders" :key="reminder.id">
                <ItemEvent :name="reminder.title" :time="reminder.time" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo itaque facere laborum labore provident
          cumque sequi deserunt molestias, odit qui dolorum perferendis, eaque doloribus? Voluptatum illum illo
          temporibus sunt quidem!</p>
      </div>
    </div>
  </section>
</template>

<style>
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
</style>
