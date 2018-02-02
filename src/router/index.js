import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import lib from './lib'

Vue.use(VueRouter)

const index = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }
]

for (let v in lib) {
  if (lib.hasOwnProperty(v)) {
    index.push(lib[v])
  }
}

const routeList = {
  routes: index
}
// console.log(routeList);

export default new VueRouter(routeList)
