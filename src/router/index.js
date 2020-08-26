import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultPage from '@/layout/layout.vue'
import blankPage from '@/layout/black.vue'

Vue.use(VueRouter)
// 跟路径下是layout页面，中间的routerView 嵌套自路由
  const routes = [
    {
    path: '/',
    name: 'defualVue',
    redirect:'/index',
    component: defaultPage,
    children:[{
      path:'/index',
      name:'index',
      component: () =>import( '@/page/index.vue')
    },
    {
      path:'/changeCity',
      name:'changeCity',
      component: () =>import( '@/page/changeCity.vue')
    },
    {
      path: '/s/:name',
      name: 'goods',
      component: ()=>import('@/page/goodsList.vue')
    }
  ],
   
  },
  {
    path: '/blank',
    name: 'blank',
    component: blankPage,
    children: [{
      path: '/login',
      name: 'login',
      component: ()=>import('@/page/login.vue')
    }, {
      path: '/register',
      name: 'register',
      component: ()=>import('@/page/register.vue')

    }]
  }
]

const router = new VueRouter({
  mode: 'history',  //历史模式渲染路由
  routes
})

export default router
