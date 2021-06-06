import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/global.css";
import { Swiper, EffectFade } from "swiper";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import VueScrollTo from "vue-scrollto";

export const EventBus = new Vue();

Swiper.use([EffectFade]);
Vue.use(VueAwesomeSwiper);
Vue.use(VueScrollTo, { duration: 500 });

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
