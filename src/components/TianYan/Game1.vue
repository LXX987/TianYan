<template>
    <div class="body">
        <Header/>
        <div class="identify-intro">
            <div class="heading" style="display:inline-block;" id="word">
                <h>人机大战</h>
            </div>
            <div class="heading" style="display:inline-block;" id="head-img">
                <img src="../../assets/identify_head.png" id="pic">
            </div>
        </div>
        <div class="gamecontent" id="gameblock">
            <el-button @click="jumpback" type="primary" icon="el-icon-back" id="back" round>返回</el-button>
            <img @click="openupload" id="questionimg" src="../../assets/question.png">
            <h1>人机大战</h1>
            <h2>--寻找农作物游戏--</h2>
            <div class="nameinput">
                <el-button type="text" @click="open" style="font-size: 20px;font-family: cursive;color: black;">{{gamename}}</el-button>
            </div>
            <el-button type="primary" icon="el-icon-s-promotion" id="begin" round @click="choose">开始游戏</el-button>
            <div class="choose_pattern" v-show="show_pattern_block">
                <p @click="close_pattern">×</p>
                <h2 style="margin-top:-42px;margin-bottom: 6px;">选择游戏模式</h2>
                <div class="pattern_block" id="pattern_1" @click="jump_robot"><p>人机对抗</p></div>
                <div class="pattern_block" id="pattern_2" @click="jump_vs"><p>3V3</p></div>
            </div>
        </div>
        <br><br><br><br><br>
        <Footer/>
    </div>
</template>
<style>
.pattern_block{
    display: inline-block;
    vertical-align: top;
    width:280px;
    height:180px;
    border-radius: 10px;
}
.choose_pattern #pattern_1 p {
    width: 120px;
    margin-left: 80px;
    margin-top: 85px;
    font-size: 30px;
    font-family: cursive;
    color: #31653c;
    font-weight: 600;
}
.choose_pattern #pattern_2 p {
    width: 50px;
    margin-left: 122px;
    margin-top: 90px;
    font-size: 30px;
    font-family: cursive;
    color: #31653c;
    font-weight: 600;
}
.choose_pattern :hover {
    /* box-shadow: #003a1f 3px 3px 3px 3px; */
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.choose_pattern #pattern_2 {
    margin-left: 40px;
    /* background-color: #003a1f; */
    background: url('../../assets/pattern_2.png') no-repeat;
    /* opacity: 80%; */
    background-size: 110% 125%;
}
.choose_pattern #pattern_1 {
    margin-left: 43px;
    background: url('../../assets/pattern_1.png') no-repeat;
    background-size: 110% 125%;
}
.choose_pattern p {
    margin-left: 93%;
    margin-top: 1%;
    font-size: 30px;
    color: #187047;
}
.choose_pattern {
    position: absolute;
    width: 55%;
    height: 50%;
    left: 23%;
    top: 300px;
    /* background-color: #003a1f; */
    border-radius: 10px;
      background-color: #fff6e6;
  /* border-radius: 4px; */
  border: 1px solid #fcefd8;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
#questionimg {
    width: 50px;
    height: 50px;
    margin-top: 40px;
    margin-left: 740px;
    position: absolute;
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
#begin{
    margin-left: 38%;
    height: 60px;
    font-size: 40px;
    margin-top: 40px;
}
h1:hover {
    font-size: 53px;
}
h1{
    font-family: cursive;
    font-size: 52px;
    text-align: center;
    text-shadow: rgb(255, 255, 255) 2px 2px;
    color: rgb(54, 140, 91);
}
.nameinput{
    width: 300px;
    height: 50px;
    margin-left: 35%;
    text-align: center;
    border:1px solid rgb(54, 140, 91);
    border-radius: 10px;
    background-color: #ffffff70;
}
h2{
    font-family: cursive;
    text-align: center;
    font-size: 35px;
    color: rgb(54, 140, 91);
    text-shadow: rgb(255 255 255) 2px 2px;
}
.identify-intro{
    width:1280px;
    height: 80px;
    background: url('../../assets/ban.jpg') no-repeat;
    background-size: 100% 100%;
    margin-top: 79px;
}
.gamecontent{
    height: 500px;
    vertical-align: top;
    margin-left: 9%;
}
#gameblock{
    border: 20px solid rgb(240 218 153 / 50%);
    border-radius: 10px;
    border-style: ridge;
    width:1000px;
    height: 500px;
    margin-top: 45px;
    background: url('../../assets/gamebackground.gif') no-repeat;
    background-size: 100% 100%;
    opacity: 0.9;
}
.body{
    overflow-x: hidden;
    margin: 0px;
    height: 911px;
    background-color: #fff6e6;
}
.el-button.is-round{
    padding: 6px 11px;
}
#word{
    position:absolute;
}
#pic{
    height: 80px;
}
.el-button--primary:focus, .el-button--primary:hover {
    background: rgb(222, 160, 38);
    border-color: rgb(222, 160, 38);
    color: #FFF;
    box-shadow: rgb(187, 132, 23) 3px 3px;
    font-weight: bold;
}
#head-img{
    position:absolute;
    margin-left:800px;
}
.el-button--primary.is-active, .el-button--primary:active {
    background: rgb(222, 160, 38);
    border-color: rgb(222, 160, 38);
    color: #FFF;
    box-shadow: rgb(187, 132, 23) 3px 3px;
}
.el-button--primary{
    margin:20px 30px;
    box-shadow: rgb(173, 126, 60) 2px 2px;
    font-family: cursive;
    font-size: 20px;
    background-color: rgb(228, 167, 80);
    border-color: rgb(228, 167, 80);
}
.el-message-box{
    border-radius: 10px;
}
</style>
<script>
import Header from './Header'
import Footer from './Footer'
export default {
    name: "game1",
    components: {
    Header,
    Footer,
  },
  data() {
    return {
      input: '',
      gamename: '请输入姓名',
      show_pattern_block: 0
    }
  },
    methods: {
      open() {
        this.$prompt('请输入玩家姓名', '开始你的游戏之旅', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        //   inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        //   inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的姓名是: ' + value,
          });
          this.gamename = value;
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      openupload() {
          this.$router.push('/uploadone');
      },
      choose() {
          //检查是否输入游戏姓名
          if(this.gamename == '请输入姓名') {
              this.$message({
            type: 'info',
            message: '请输入游戏姓名'
          }); 
          }
          else {
              this.show_pattern_block = 1;
          }
      },
      close_pattern() {
          this.show_pattern_block = 0;
      },
      jump_robot() {
          this.$router.push('/game1page');
      },
      jump_vs() {
          this.$router.push('/multigame');
      },
      jumpback() {
          this.$router.push('/gameintro');
      }
    }

}
</script>