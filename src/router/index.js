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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    }
  ]
})