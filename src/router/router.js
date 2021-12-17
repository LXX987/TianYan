import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

// import HelloWorld from './components/HelloWorld'
import Home from '@/components/TianYan/Home'
import Identify from '@/components/TianYan/Identify'
// import Header from './components/TianYan/Header'
// import Footer from './components/TianYan/Footer'
import Game1 from '@/components/TianYan/Game1'
import GameIntro from '@/components/TianYan/GameIntro'
import Game2 from '@/components/TianYan/Game2'
import Honor from '@/components/TianYan/Honor'
import Record from '@/components/TianYan/Record'
import Honor2 from '@/components/TianYan/Honor2'
import Honorview from '@/components/TianYan/Honorview'
import Usercontrol from '@/components/TianYan/Usercontrol'
import Login from '@/components/TianYan/Login'
import game1page from '@/components/TianYan/game1page'
import game2page from '@/components/TianYan/game2page'
import Register from '@/components/TianYan/Register'
import Identifyone from '@/components/TianYan/Identifyone'
import Identifytwo from '@/components/TianYan/Identifytwo'
import Identifythree from '@/components/TianYan/Identifythree'
import Uploadone from '@/components/TianYan/Uploadone'
import Uploadtwo from '@/components/TianYan/Uploadtwo'
import Feedback from '@/components/TianYan/Feedback'

const routes=[
    {path: '/home',name: 'Home',component: Home},
    {path:'/identify',component:Identify},
    {path:'/gameintro',name: 'gameintro',component:GameIntro},
    {path:'/game1',component:Game1},
    {path:'/game2',component:Game2},
    {path:'/honor',component:Honor},
    {path:'/record',name: 'record',component:Record},
    {path:'/honor2',component:Honor2},
    {path:'/honorview',component:Honorview},
    {path:'/usercontrol',name: 'Usercontrol',component:Usercontrol},
    {path:'/',component:Login},
    {path:'/game1page',component:game1page},
    {path:'/game2page',component:game2page},
    {path:'/register',name: 'register',component:Register},
    {path:'/identifyone',name: 'identifyone',component:Identifyone},
    {path:'/identifytwo',name: 'identifytwo',component:Identifytwo},
    {path:'/identifythree',name: 'identifythree',component:Identifythree},
    {path:'/uploadone',name: 'uploadone',component:Uploadone},
    {path:'/uploadtwo',name: 'uploadtwo',component:Uploadtwo},
    {path:'/feedback',name: 'feedback',component:Feedback}
]
const router=new VueRouter({
    routes:routes
});

export default router