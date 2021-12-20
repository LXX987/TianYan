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
import Gameresult1 from '@/components/TianYan/Gameresult1'
import Gameresult2 from '@/components/TianYan/Gameresult2'
import AccuracyCount from '@/components/TianYan/Administrator/AccuracyCount'
import Admin from '@/components/TianYan/Administrator/Admin'
import Check from '@/components/TianYan/Administrator/Check'
import DealFeedback from '@/components/TianYan/Administrator/DealFeedback'
import IdentifyCount from '@/components/TianYan/Administrator/IdentifyCount'
import Knowledge from '@/components/TianYan/Administrator/Knowledge'
import TrainData from '@/components/TianYan/Administrator/TrainData'

const routes=[
    {path: '/home',name: 'Home',component: Home},
    {path:'/identify',name: 'identify',component:Identify},
    {path:'/gameintro',name: 'gameintro',component:GameIntro},
    {path:'/game1',name: 'game1',component:Game1},
    {path:'/game2',name: 'game2',component:Game2},
    {path:'/honor',name: 'honor',component:Honor},
    {path:'/record',name: 'record',component:Record},
    {path:'/honor2',name: 'honor2',component:Honor2},
    {path:'/honorview',name: 'honorview',component:Honorview},
    {path:'/usercontrol',name: 'Usercontrol',component:Usercontrol},
    {path:'/',component:Login},
    {path:'/game1page',name: 'gamepage1',component:game1page},
    {path:'/game2page',name: 'game2page',component:game2page},
    {path:'/register',name: 'register',component:Register},
    {path:'/identifyone',name: 'identifyone',component:Identifyone},
    {path:'/identifytwo',name: 'identifytwo',component:Identifytwo},
    {path:'/identifythree',name: 'identifythree',component:Identifythree},
    {path:'/uploadone',name: 'uploadone',component:Uploadone},
    {path:'/uploadtwo',name: 'uploadtwo',component:Uploadtwo},
    {path:'/feedback',name: 'feedback',component:Feedback},
    {path:'/gameresult1',name: 'gameresult1',component:Gameresult1},
    {path:'/gameresult2',name: 'gameresult2',component:Gameresult2},
    {path:'/admin',name:'admin',component:Admin},
    {path:'/accuracycount',name:'accuracycount',component:AccuracyCount},
    {path:'/check',name:'check',component:Check},
    {path:'/dealfeedback',name:'dealfeedback',component:DealFeedback},
    {path:'/identifycount',name:'identifycount',component:IdentifyCount},
    {path:'/knowledge',name:'knowledge',component:Knowledge},
    {path:'/traindata',name:'traindata',component:TrainData},
]
const router=new VueRouter({
    routes:routes
});

export default router
