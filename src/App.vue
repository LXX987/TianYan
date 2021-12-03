<template>
  <div>
    <router-view></router-view>
    <!-- <Game2/> -->
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
    Usercontrol
  }
}
</script>