import User from '@/components/dynamic/User'
import Home from '@/components/Home'
import hello from '@/components/hello'
import HelloVue from '@/components/HelloVue'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'


export default [
  {
    path: '/user/:id',
    name: 'User',
    component: User
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/hello',
    name: 'hello',
    component: hello
  },
  {
    path: '/HelloVue',
    name: 'HelloVue',
    component: HelloVue
  },
  {
    path: '/foo',
    name: 'Foo',
    component: Foo
  },
  {
    path: '/bar',
    name: 'Bar',
    component: Bar
  }
]
