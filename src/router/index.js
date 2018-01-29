import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'


Vue.use(Router)

export default new Router({
  mode:'history',  //使用history防止url中出现#
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
