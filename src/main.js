import Vue from 'vue'
import App from './App.vue'

// 引入通用样式
import '@css/main.scss'

// 移动端适配
import '@libs/flexible'


// 引入各种插件 swiper
import '@libs'

Vue.config.productionTip = false


// 根实例
new Vue({
  render: h => h(App)
}).$mount('#app')
