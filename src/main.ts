import { createApp } from 'vue'
import './css/tailwind.css'
import App from './App.vue'

//#region importing custom components
import mlButton from './components/customs/Button.vue'
import mlAlert from './components/customs/Alert.vue'
import MLAlert from './alertPlugin'
//#endregion

let app = createApp(App)
app.use(MLAlert)
.component('ml-button', mlButton)
.component('ml-alert', mlAlert)
.mount('#app')

console.log(app) 
