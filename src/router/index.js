import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {path: '/', redirect: '/home'},
        {
            path: '/home',
            name: 'Home',
            component:  () => import('@/components/Home')
        },
        {
            path: '/SiteSearch',
            component:  () => import('@/components/SiteSearch')
        },
        {
            path:'/SourceInfo',
            component:()=>import('@/components/SourceInfo')
        },
        {
            path:'/SourceNotic',
            component:()=>import('@/components/SourceNotic')
        },
        {
            path:'/FilterSearch',
            component:()=>import('@/components/FilterSearch')
        },
        {
            path:'/SourceRemixer',
            component:()=>import('@/components/SourceRemixer')
        },
        {
            path:'/NoticInfo',
            component:()=>import('@/components/NoticInfo')
        },
        {
            path:'/SiteSearchList',
            component:()=>import('@/components/SiteSearchList')
        }
      // {
      //     path: '/exception',
      //     name: '异常页',
      //     component: HOME,
      //     children: [
      //         {
      //             path: '/exception/404',
      //             name: '404',
      //             component: () => import('@/view/exception/404')
      //         },
      //         {
      //             path: '/exception/403',
      //             name: '403',
      //             component: () => import('@/view/exception/403')
      //         },
      //         {
      //             path: '/exception/500',
      //             name: '500',
      //             icon: 'none',
      //             component: () => import('@/view/exception/500')
      //         }
      //     ]
      // }
    ]
})
