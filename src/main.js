import { createApp } from 'vue';
import App from './App.vue';
import store from "./store";
import router from "./router";
import axios from "./api";
import 'font-awesome/css/font-awesome.min.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.config.globalProperties.$axios = axios;
app.mount('#app');
