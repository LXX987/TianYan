import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/TianYan/Home'
import Identify from '@/components/TianYan/Identify'
import Header from '@/components/TianYan/Header'
import Footer from '@/components/TianYan/Footer'
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
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Identify',
      name: 'Identify',
      component: Identify
    },
    {
      path: './Header',
      name: 'Header',
      component: Header
    },
    {
      path: './Footer',
      name: 'Footer',
      component: Footer
    },{
      path: './Game1',
      name: 'Game1',
      component: Game1
    },{
      path: './GameIntro',
      name: 'GameIntro',
      component: GameIntro
    },{
      path: './Game2',
      name: 'Game2',
      component: Game2
    },{
      path: './Honor',
      name: 'Honor',
      component: Honor
    },{
      path: './Record',
      name: 'Record',
      component: Record
    },{
      path:'./Honor2',
      name:'Honor2',
      component:Honor2
    },{
      path:'./Honorview',
      name:'HOnorview',
      component:Honorview
    },{
      path:'./Usercontrol',
      name:'Usercontrol',
      component:Usercontrol
    },{
      path:'/',
      name:'Login',
      component:Login
    },{
      path:'./game1page',
      name:'game1page',
      component:game1page
    },{
      path:'./game2page',
      name:'game2page',
      component:game2page
    },{
      path: './register',
      name: 'register',
      component: Register
    },{
      path: './identifyone',
      name: 'identifyone',
      component: Identifyone
    },{
      path: './identifytwo',
      name: 'identifytwo',
      component: Identifytwo
    },{
      path: './identifythree',
      name: 'identifythree',
      component: Identifythree
    },{
      path: './uploadone',
      name: 'uploadone',
      component: Uploadone
    },{
      path: './uploadtwo',
      name: 'uploadtwo',
      component: Uploadtwo
    },{
      path:'/feedback',
      name: 'feedback',
      component:Feedback
    }
  ]
})
