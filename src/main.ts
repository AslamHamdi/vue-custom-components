import { createApp } from 'vue'
import './css/tailwind.css'
import App from './App.vue'

//#region importing custom components
import mlButton from './components/customs/Button.vue'
import mlAlert from './components/customs/Alert.vue'
//#endregion

createApp(App)
.component('ml-button', mlButton)
.component('ml-alert', mlAlert)
.mount('#app')
