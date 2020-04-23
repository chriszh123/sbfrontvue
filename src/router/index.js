import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TableMain from '@/components/TableMain';

Vue.use(Router)

export default new Router({
  routes: [
    {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    
        path: '/zgf',
        name: 'Table',
        component: TableMain
    }
  ]
})
