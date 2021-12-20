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
            <el-button type="primary" icon="el-icon-back" id="back" round><router-link to="/gameintro" style="text-decoration:none">返回</router-link></el-button>
            <img @click="openupload" id="questionimg" src="../../assets/question.png">
            <h1>人机大战</h1>
            <h2>--寻找农作物游戏--</h2>
            <div class="nameinput">
                <el-button type="text" @click="open" style="font-size: 20px;font-family: cursive;color: black;">{{gamename}}</el-button>
            </div>
            <el-button type="primary" icon="el-icon-s-promotion" id="begin" round><router-link to="/game2page" style="text-decoration:none">开始游戏</router-link></el-button>
        </div>
        <br><br><br><br><br>
        <Footer/>
    </div>
</template>
<style>
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
    /* text-shadow: rgb(255, 255, 255) 2px 2px 2px 2px; */
    /* border: rgb(255, 0, 0) 10px; */
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
    background: url('../../assets/gamebackground1.gif') no-repeat;
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
    name: "game2",
    components: {
    Header,
    Footer,
  },
  data() {
    return {
      input: '',
      gamename: '请输入姓名'
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
            message: '你的姓名是: ' + value
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
          this.$router.push('/uploadtwo');
      }
    }

}
</script>