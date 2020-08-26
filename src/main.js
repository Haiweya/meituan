import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/main.css"

Vue.config.productionTip = false
Vue.use(ElementUI);



// 全局自定义指令
//bindling触发事件的回掉函数，true，false 为执行顺序。如果为false事件的顺序为 标签的onclick事件 ---- document.onclick  ---- addEventListener
Vue.directive('document-click', {
  bind (el, binding, vnode) {
    document.addEventListener('click', binding.value, false)
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
