import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import lib from './lib'

Vue.use(Router)

const index = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }
]


// const routeList = Object.assign(index, lib);

// let routeArr = Array.prototype.push.apply(index, lib);
for (let v in lib) {
  if (lib.hasOwnProperty(v)) {
    index.push(lib[v])
  }
}

// const routeList = [...index, ...lib];

const routeList = {
  routes: index
}
console.log(routeList);

export default new Router(routeList)
