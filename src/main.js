import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueCarousel from 'vue-carousel';
import Toast from "vue-toastification";
import VueFloatLabel from "vue-float-label";
import "vue-toastification/dist/index.css";
import "./assets/main.css";

axios.defaults.baseURL = "https://livecmrnew.azurewebsites.net/api/";

var token = localStorage.getItem("token");
if(token){
axios.defaults.headers.common = {'Authorization': `Bearer ${token}`} 
}



const app = createApp(App);

app.use(router);
app.use(VueCarousel);
app.use(VueFloatLabel);
app.use(Toast);

app.mount("#app");
