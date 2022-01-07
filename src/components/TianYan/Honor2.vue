<template>
  <div class="body">
    <Header/>
    <div class="identify-intro">
        <div class="heading" style="display:inline-block;" id="word">
            <h>荣誉殿堂</h>
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
                        <span slot="title" @click="jumpgameintro">竞答游戏介绍</span>
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
          <el-menu-item index="1-3" @click="jumpgrading">游戏段位</el-menu-item>
        </el-menu-item-group>  
      </el-submenu>
                    </el-menu>
                </el-col>
            </el-row>
        </div>
        <div class="content" id="contentword" style="display:inline-block;">
         <span><h1 style="text-align:center;font-family:cursive;font-weight: bold;">游戏排行榜</h1></span>
         <el-divider></el-divider>
         <span>
             <div class="own-rank-block">
             <!-- <h3 style="text-align:center;font-family:cursive;font-weight: bold;">我的排名：第{{rank}}名</h3> -->
             </div>
         </span>
         <br>
         <div>
             <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="time"
        label="游戏日期"
        width="280">
      </el-table-column>
      <!-- <el-table-column
        prop="rid"
        label="排名"
        width="180">
      </el-table-column> -->
      <el-table-column
        prop="nick_name"
        label="玩家姓名"
        width="280">
      </el-table-column>
      <el-table-column
        prop="score"
        label="准确率">
      </el-table-column>
    </el-table>
         </div>  
         <div class="honor-img">
             <img src="../../assets/honor.png" id="honorimg">
         </div>
        </div>
    </div>
    <div class="tian"></div>
    <div class="footer">
    <Footer/>
    </div>
  </div>
</template>
<style scoped>
.body{
    overflow-x: hidden;
    margin: 0px;
    height: 974px;
}
.el-divider--horizontal {
    display: block;
    height: 1px;
    width: 80%;
    margin: 24px 65px;
}
.honor-img{
    position: absolute;
    width: 200px;
    height: 200px;
    margin-left:650px;
    margin-top: 40px;
}
#honorimg{
    width:200px;
    height:200px;
}
.el-table .el-table__cell{
    text-align: center;
}
.own-rank-block{
    /* box-shadow: inset 0 0 5px 5px rgb(239 225 204); */
    height: 42px;
    line-height: 42px;
    border-radius: 10px;
    width: 850px;
    margin-left: -30px;
}
.el-col-12{
    width: 100%;
    height: 100%;
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
    width:790px;
    margin-left: 60px;
    background-color: #ffffff;
    border-right: 0px solid rgb(234, 213, 180);
    box-shadow: inset 0 0 5px 5px rgb(239 225 204);
    border-radius: 10px;
    padding: 0px 30px;
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
import axios from 'axios'
export default {
  name: "honor2",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      rank: '',
      tableData: []
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
      },
      jumpgameintro() {
          this.$router.push('/gameintro');
      },
      jumpgrading() {
          this.$router.push('/grading');
      }
    },
    mounted:function() {

      let data = new FormData();
            data.append("type", "2");
            console.log(data);
            axios.post("http://124.70.206.207/record/recordsQuery", data)
            .then(res=>{
                console.log(res);
                console.log(res.data.records);
                this.tableData = res.data.records;
            })
    }
}
</script>