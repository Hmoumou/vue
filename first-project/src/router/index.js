import Router from 'vue-router'
//同步引入
import Vue from 'vue'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import home from '../components/home'

Vue.use(Router)
 const router = new Router({
    routes:[
        {
            path:'/',
            component:home,
            meta:{
                title:'首页'
            }
        },
        {
            path:'/about/:id',
            meta:{
                title:'详情'
            },
            //异步引入
            component:()=>import('../components/about.vue')
        },
        {
            path:'/login',
            meta:{
                title:'登录'
            },
            name:'login',
            //异步引入
            component:()=>import('../components/login.vue')
        },
    ]
}) 


router.beforeEach((to,from,next)=>{
    Nprogress.start()
    if(to.meta.title){
        document.title = to.meta.title
    }
    next()
})

router.afterEach((to,from)=>{
    Nprogress.done()
})
export default router