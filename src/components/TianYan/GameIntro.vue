<template>
  <div class="body">
    <Header/>
    <div class="identify-intro">
        <div class="heading" style="display:inline-block;" id="word">
            <h>趣味竞答</h>
        </div>
        <div class="heading" style="display:inline-block;" id="head-img">
            <img src="../../assets/identify_head.png" id="pic">
        </div>
    </div>
    <div class="tian"></div>
    <div class="slow">
        <div class="content" id="daohang" style="display:inline-block;overflow-y:hidden;">
            <el-row class="tac">
                <el-col :span="12">
                    <h5 style="margin-left:28px;font-size:25px;margin-top: 15px;margin-bottom: 15px;">游戏导航</h5>
                    <el-menu
                    default-active="1"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-menu-item index="1">
                        <i class="el-icon-location"></i>
                        <span slot="title">竞答游戏介绍</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                            <span slot="title" @click="jumpgame1">人机大战</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                            <span slot="title" @click="jumpgame2">机智过人</span>
                    </el-menu-item>
                    <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>竞答结果</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="jumphonorview">荣誉殿堂</el-menu-item>
          <el-menu-item index="1-2" @click="recordid">游戏记录</el-menu-item>
        </el-menu-item-group>  
      </el-submenu>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
        <div class="content" id="contentword" style="display:inline-block;">
            <div>
            <h2>游戏竞答介绍：</h2>
            <p style="text-align: justify;margin: 0 0 10px;font-size:22px;font-family:cursive;">趣味竞答游戏，分为人机大战游戏与机智过人游戏。采用创意且新颖的方式，将农作物科普教育和人工智能目标识别技术有机结合起来的一种形式。寓教于乐,寓学于趣 ，通过参与体验、趣味竞答等多种方式，让学生在学习过程中轻松、愉快、生动地接受农作物知识，培养学生的科学精神并传播科学思想。</p>
            <ul style="text-align: justify;margin: 0 0 10px;font-size:21px;line-height:20px;">
                <li>
                    <h3>人机大战</h3>
                    <p style="font-family:cursive;">系统随机展示一张农作物图片，用户的系统同时开始回答农作物种类，比拼回答准确率及作答时间。</p>
                </li>
                <li>
                    <h3>机智过人</h3>
                    <p style="font-family:cursive;">系统展示多个种类农作物图片，根据题目要求种类，用户和系统同时开始寻找对应种类农作物，比拼回答准确率及作答时间。</p>
                </li>
            </ul>
            </div>
            <div class="game-png">
                <img src="../../assets/game.png">
            </div>
        </div>
    </div>
    <div class="tian"></div>
    <div class="footer">
    <Footer/>
    </div>
  </div>
</template>
<style>
.body{
    overflow-x: hidden;
    margin: 0px;
    height: 985px;
}
.el-col-12{
    width: 100%;
    height: 100%;
}
.game-png{
    margin-left: 490px;
}
.slow{
    width:1280px;
    height: 682px;
    background-color: #fff6e6;
}
.content{
    vertical-align: top;
    height: 600px;
    background-color: white;
    width: 256px;
    border-right:2px solid rgb(234, 213, 180);
}
.el-row{
    height: 600px;
}
#contentword{
    width:850px;
    margin-left: 60px;
    background-color: #fff6e6;
    border-right: 0px solid rgb(234, 213, 180);
}
h2{
    font-family: cursive;
    font-weight: bold;
    font-style: normal;
    font-size: 30px;
}
#word{
    position:absolute;
}
#head-img{
    position:absolute;
    margin-left:800px;
}
#pic{
    height: 80px;
}
.tian{
    width:1280ps;
    height: 40px;
    background-color: #fff6e6;
}
.heading{
    color: white;
    font-size: 35px;
    letter-spacing: 1px;
    text-shadow: #003a1f 1px 1px 1px;
    line-height: 80px;
    margin-left: 20%;
    font-family: cursive;
}
.el-menu-item-group__title {
    padding: 0px 0 0px 20px;
}
.el-menu{
    height: 606.66667px;
}
.identify-intro{
    width:1280px;
    height: 80px;
    background: url('../../assets/ban.jpg') no-repeat;
    background-size: 100% 100%;
    margin-top: 79px;
}
</style>
<script>
import Header from './Header'
import Footer from './Footer'
export default {
  name: "gameIntro",
  components: {
    Header,
    Footer,
  },
  data() {
      return {
          id: ''
      }
  },
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      recordid() {
          this.$router.push({ name: 'record',query:{ids:this.id} });
      },
      jumpgame1() {
          this.$router.push('/game1');
      },
      jumpgame2() {
          this.$router.push('/game2');
      },
      jumphonorview() {
          this.$router.push('/honorview');
      }
    },
    mounted:function() {
        console.log(this.$route.query.ids);
        this.id = this.$route.query.ids;
        console.log(this.id);
    }
}
</script>