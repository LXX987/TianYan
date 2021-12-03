import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

// import HelloWorld from './components/HelloWorld'
import Home from '@/components/TianYan/Home'
// import Identify from './components/TianYan/Identify'
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

const routes=[
    {path:'/home',component:Home},
    {path:'/gameintro',component:GameIntro},
    {path:'/game1',component:Game1},
    {path:'/game2',component:Game2},
    {path:'/honor',component:Honor},
    {path:'/record',component:Record},
    {path:'/honor2',component:Honor2},
    {path:'/honorview',component:Honorview},
    {path:'/usercontrol',component:Usercontrol}
]
const router=new VueRouter({
    routes:routes
});

export default router