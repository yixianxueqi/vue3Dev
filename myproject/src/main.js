import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// element-ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
