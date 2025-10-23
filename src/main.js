import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).provide('app-message', 'app message 입니다').mount('#app')
