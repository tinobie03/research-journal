import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/globalStyles.css'
import './assets/ckeditor.css'
import CKEditor from '@ckeditor/ckeditor5-vue'

/* @router */
import router from './router/index'

/* @store */
import store from './store'

/* @primevue */
//primeVue Config
import PrimeVue from 'primevue/config'
//primevue themes
import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

/* @vueToast */
import VueToast from 'vue-toast-notification'
//vuetoast theme
import 'vue-toast-notification/dist/theme-sugar.css'

/* @layouts */
import AppLayout from './layouts/AppLayout.vue'

createApp(App)
    .use(router)
    .use(store)
    .use(VueToast)
    .use(PrimeVue)
    .use(CKEditor)
    .component('AppLayout', AppLayout)
    .mount('#app')
