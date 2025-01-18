import { createApp } from 'vue'
import App from './App.vue'
import VCalendar from 'v-calendar'

import 'v-calendar/style.css'
import './assets/style.css'

const app = createApp(App)

app.use(VCalendar, {})
app.mount('#app')
