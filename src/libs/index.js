import Vue from 'vue'

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// axios
import ajax from '@util/axios';


// cookie
import VueCookies from 'vue-cookies'


import { Lazyload } from 'mint-ui';


// mint-ui
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
Vue.use(Lazyload);
// Vue.use(MintUI);
Vue.use(VueAwesomeSwiper)


Vue.use(VueCookies)



Vue.prototype.$http = ajax