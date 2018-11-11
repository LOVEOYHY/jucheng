import Vue from 'vue'

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// axios
import ajax from '@util/axios';





Vue.use(VueAwesomeSwiper)



Vue.prototype.$http = ajax