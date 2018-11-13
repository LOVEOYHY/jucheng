import Vue from 'vue'
import App from './App.vue'

// 引入通用样式
import '@css/main.scss'

// 移动端适配
import '@libs/flexible'


// 引入各种插件 swiper
import '@libs'

// 引入路由工具
import router from './router'


Vue.config.productionTip = false


// 根实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
