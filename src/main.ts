import { createApp } from 'vue'
import App from './App.vue'
import InfiniteLoading from 'vue-infinite-loading'
import './styles/main.css'

const app = createApp(App)
app.use(InfiniteLoading)
app.mount('#app')