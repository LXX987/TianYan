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
                            <span slot="title"><router-link to="/game1" style="text-decoration:none">人机大战</router-link></span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title"><span slot="title"><router-link to="/game2" style="text-decoration:none">机智过人</router-link></span></span>
                    </el-menu-item>
                    <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>竞答结果</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"><router-link to="/honorview" style="text-decoration:none">荣誉殿堂</router-link></el-menu-item>
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
            <p style="text-align: justify;margin: 0 0 10px;font-size:20px;">Pioneer Records Management began life in 1984, as Records Management Systems. Records Management Systems helped businesses throughout Florida better manage and access their growing information stockpiles.Records Management Systems initially offered consulting services to major corporations in publishing and manufacturing as well as document scanning and document imaging. Throughout the 1990s.</p>
            <ul style="text-align: justify;margin: 0 0 10px;font-size:20px;line-height:20px;">
                <li>
                    <h3>人机大战</h3>
                    <p>随便说一些啦~~~，文案还没想好，不要紧。。。。凑凑字数，看效果~~</p>
                </li>
                <li>
                    <h3>机智过人</h3>
                    <p>随便说一些啦~~~，文案还没想好，不要紧。。。。凑凑字数，看效果~~</p>
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
    height: 974px;
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
    height: 670px;
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
  name: "GameIntro",
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
          this.$router.push({ name: 'record',params:{ids:this.id} });
      }
    },
    mounted:function() {
        console.log(this.$route.params.ids);
        this.id = this.$route.params.ids;
        console.log(this.id);
    }
}
</script>