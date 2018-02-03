import User from '@/components/dynamic/User'
import Home from '@/components/Home'
import hello from '@/components/hello'
import HelloVue from '@/components/HelloVue'
import Foo from '@/components/Foo'
import Bar from '@/components/Bar'


const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }


export default [
  {
    path: '/user/:id',
    name: 'User',
    component: User,
    children: [
      {
        path: '',
        component: UserHome
      },
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: 'profile',
        component: UserProfile
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: 'posts',
        component: UserPosts
      }
    ]
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
