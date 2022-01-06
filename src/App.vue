<template>
  <div>
    <router-view></router-view>
    <!-- <Game2/> -->
    <!-- <count-down></count-down> -->
  </div>
</template>
<script>
import Home from './components/TianYan/Home'
import Identify from './components/TianYan/Identify'
import Header from './components/TianYan/Header'
import Footer from './components/TianYan/Footer'
import Game1 from './components/TianYan/Game1'
import GameIntro from './components/TianYan/GameIntro'
import Game2 from './components/TianYan/Game2'
import Honor from './components/TianYan/Honor'
import Record from './components/TianYan/Record'
import Usercontrol from './components/TianYan/Usercontrol'
import game1page from './components/TianYan/game1page'
import game2page from './components/TianYan/game2page'
import Identifyone from './components/TianYan/Identifyone'
import Identifytwo from './components/TianYan/Identifytwo'
import Identifythree from './components/TianYan/Identifythree'
import Uploadone from './components/TianYan/Uploadone'
import Feedback from './components/TianYan/Feedback'
import CountDown from './components/TianYan/CountDown'
import Gameresult1 from './components/TianYan/Gameresult1'
import Gameresult2 from './components/TianYan/Gameresult2'
import multigame from './components/TianYan/multigame'

import AccuracyCount from './components/TianYan/Administrator/AccuracyCount'
import Admin from './components/TianYan/Administrator/Admin'
import Check from './components/TianYan/Administrator/Check'
import DealFeedback from './components/TianYan/Administrator/DealFeedback'
import IdentifyCount from './components/TianYan/Administrator/IdentifyCount'
import Knowledge from './components/TianYan/Administrator/Knowledge'
import TrainData from './components/TianYan/Administrator/TrainData'

export default {
  name: "App",
  components: {
    Home,
    Identify,
    Header,
    Footer,
    Game1,
    GameIntro,
    Game2,
    Honor,
    Record,
    Usercontrol,
    game1page,
    game2page,
    Identifyone,
    Identifytwo,
    Identifythree,
    Uploadone,
    Feedback,
    CountDown,
    Gameresult1,
    Gameresult2,
    AccuracyCount,
    Admin,
    Check,
    DealFeedback,
    IdentifyCount,
    Knowledge,
    TrainData,
    multigame
  }
}
</script>
