import { createApp } from 'vue'
//import './css/tailwind.css'
import App from './App.vue'

import MLAlert from './plugin'
//import './style.css'
let app = createApp(App)
app.use(MLAlert)
.mount('#app')

