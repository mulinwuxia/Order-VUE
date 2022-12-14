// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.css'
import store from './store'
Vue.config.productionTip = false
Vue.use(ElementUI);
 
// 4. 创建和挂载根实例
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
