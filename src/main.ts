import { createApp } from 'vue'
import Vuetify from './plugins/vuetify.ts'
import { i18n } from './plugins/i18n.ts'
import Vue3Toastify, { toast, type ToastContainerOptions } from 'vue3-toastify'

import App from './App.vue'
import router from './router/index.ts'

import '@mdi/font/css/materialdesignicons.css'
import 'vue3-toastify/dist/index.css'
import 'vuetify/styles'
import './assets/styles/main.css'

const app = createApp(App)

app.use(router)
app.use(Vuetify)
app.use(i18n)
app.use(Vue3Toastify, {
	autoClose: 5000,
	position: toast.POSITION.BOTTOM_RIGHT,
	transition: toast.TRANSITIONS.SLIDE,
	theme: toast.THEME.COLORED,
	hideProgressBar: true,
	clearOnUrlChange: false,
} as ToastContainerOptions)

app.mount('#app')