<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import ItemEvent from './ItemEvent.vue';
import { getWeekNumber } from '@/utils/helpers';

const date = ref(new Date());
const reminders = ref([]);

const attrs = ref([]);

const fetchReminders = (date) => {
  axios.get('http://localhost:3000/reminders', {
    params: {
      date
    }
  })
    .then(response => {
      reminders.value = response.data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

const fetchEventsByWeek = (week) => {
  axios.get('http://localhost:3000/reminders', {
    params: { week: week }
  })
    .then(response => {
      attrs.value = response.data?.map((data) => ({
        key: data?.id,
        dot: true,
        dates: data.date,
      }))
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

const onDayClick = (view) => {
  fetchReminders(view.id)
}

const onMoveWeek = (month) => {
  fetchEventsByWeek(month[0].week)
}

onMounted(() => {
  fetchEventsByWeek(getWeekNumber(new Date()))
})

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
