import User from '@/components/User/User'
import Home from '@/components/Home'
import Comment from '@/components/User/Comment'

export default {

  path: '/',
  name: 'user',
  component: User,
  redirect: '/home',
  children: [
    {
      path: 'home',
      name: 'homePage',
      component: Home,
    },
    {
      path: 'comment',
      name: 'leaveAComment',
      component: Comment,
    }
  ]

  
}