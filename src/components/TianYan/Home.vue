<template>
    <div class="layout" style="overflow-x:hidden;">
      <Header :childid="id"></Header>
      <!-- <Header/> -->
      <div class="main">
        <div class="main-head">
          <div class="suibian" style="height:0.01pt;"></div>
        <ul class="wordlist">
          <br>
          <li>趣味农作物科普识别系统</li>
          <li>学习农作物知识</li>
          <li>感受自然魅力</li>
          <li>开启探索未知的旅程吧~</li>
          <li><el-button type="primary" icon="el-icon-s-home" id="begin" round @click="jumpidentify">进入</el-button></li>
          <!-- <li style="background-color: #0064009e;width:200px;border-radius:10px;;height:70px;line-height:70px;margin-left:37%"><router-link to="/login" style="text-decoration:none">进入</router-link></li> -->
          <br>
        </ul>
        </div>
        <div class="main-body">
          <div class="section-body">
            <div class="section" style="color:rgb(64,35,0); font-size:30px;">
              <img src="../../assets/section1.png" style="width:50px;height:50px;float:left;margin-top: 5px;">
              <div class="section-word">
                识别
                <div class="section_buttom">
                  <a href="#" style="font-size:19px;line-height: 20px;text-decoration:none" @click="openidentify">识别图片</a>
                </div>
              </div>
            </div>
            <div class="section" style="color:rgb(64,35,0); font-size:30px;">
              <img src="../../assets/section2.png" style="width:50px;height:50px;float:left;margin-top: 5px;margin-left: 5px;">
              <div class="section-word">
                游戏
                <div class="section_buttom">
                  <a href="#" style="font-size:19px;line-height: 20px;text-decoration:none" @click="gameparams">开始游戏</a>
                </div>
              </div>
            </div>
            <div class="section" style="color:rgb(64,35,0); font-size:30px;">
              <img src="../../assets/section3.png" style="width:50px;height:50px;float:left;margin-top: 5px;margin-left: 5px;">
              <div class="section-word">
                反馈
                <div class="section_buttom">
                  <a href="#" style="font-size:19px;line-height: 20px;text-decoration:none" @click="openfeedback">反馈</a>
                </div>
              </div>
            </div>
          </div>
          <br>
          <div class="main-introduction">
            <p style="font-size:35px;margin-left:11%;font-family: cursive;">
              <br>
              趣味科普 & 教育
            </p>
            <p style="font-size:21px;margin-left:11%;width:80%;font-family: cursive;">
              趣味农作物科普知识教育平台是一个集农作物科普、教育与趣味游戏体验一体化的智能平台，帮助每一个想要了解农作物的人去学习更多的农作物知识
            </p>
            <p style="font-size:35px;margin-left:11%;font-family: cursive;">
              图片识别 & 知识科普
            </p>
            <div class="product-word">
              <div class="product">
                <p style="font-size:21px;font-family: cursive;">机器学习</p>
                <p style="font-size:21px;font-family: cursive;">通过机器学习进行图片识别，精准回答农作物图片的种类，健康程度等相关知识</p>
                <a href="#" style="color:white;text-decoration:none;" id="intro-buttom" @click="openidentify">identity</a>
              </div>
              <div class="product">
                <p style="font-size:21px;font-family: cursive;">寓教于乐</p>
                <p style="font-size:21px;font-family: cursive;">在平台中，我们采用游戏与学习相结合的方式，让每一位先要了解农作物知识的人在学习的过程中不在感受到枯燥，充满乐趣</p>
                <a href="#" style="color:white;text-decoration:none;" id="intro-buttom" @click="gameparams">game</a>
              </div>
            </div>
            <div class="pronext">
              <p style="font-size:21px;font-family: cursive;">反馈处理</p>
              <p style="font-size:21px;font-family: cursive;">您可以通过这里进入反馈页面，向我们反馈您在使用软件的过程中遇到的问题或向我们的建议，帮助我们实现更好的软件。</p>
              <a href="#" style="color:white;text-decoration:none;" id="intro-buttom" @click="openfeedback">feedback</a>
            </div>
          </div>
        </div>
      </div>
      <div class="foot">
        Copyright © 2021 TianYan. All rights reserved.
      </div>
    </div>
</template>
<style scoped>
.a{ 
  color: white; 
} 
a:link { color:#fff; text-decoration:underline; }
a:active { color:white; text-decoration:none; }
a:visited { color:white;text-decoration:none; }
a:hover{ color:white;text-decoration:none;font-weight:bold; }
#background{
    width: 100%;
    height: 32%;
    left: 0px;
    top: auto;
    z-index: 0;
    opacity:0.5;
}
#begin{
    height: 60px;
    font-size: 40px;
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
.el-button--primary:focus, .el-button--primary:hover {
    background: rgb(222, 160, 38);
    border-color: rgb(222, 160, 38);
    color: #FFF;
    box-shadow: rgb(187, 132, 23) 3px 3px;
    font-weight: bold;
}
#intro-buttom{
  background-color: #c08026;
  text-shadow: 1px 1px 1px #724d1a;
  font-size: 19px;
  padding: 6px 10px;
  border-radius: 5px;
}
.wordlist{
  border-radius: 10px;
  list-style: none;
  font-size: 40px;
  font-family: cursive;
  color: rgb(255 255 255);
  margin-left: 14%;
  text-shadow: 5px 2px 6px #000;
  width: 900px;
  height: auto;
  /* background-color:#fff6e690; */
  background: url('../../assets/1.png');
  background-size: cover;
  text-align: center;
  padding-inline-start: 0px;
  box-shadow: 0 5px 15px rgba(0,0,0,.8);
}
#enter{
  width: 200px;
  height: 50px;
  
}
.main-introduction{
  width: 100%;
  background-color: #ffeecf50;
  height: 785px;
  box-shadow: inset 0px 8px 20px 0 rgb(239 225 204);
}
.product{
  display:inline-block;
  width: 35%;
  margin-left:11%;
  font-size:23px;
}
.pronext{
  display:inline-block;
  width: 35%;
  margin-left:11%;
  font-size:23px;
}
.nav-menu{
  width: 50%;
  height: 50px;
  list-style: none;
  position:absolute;
  padding-inline-start: 0px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 4;
  left: 50%;
}
.page
{
  display:inline;
  width: 10px;
  height: 15px;
  margin: 0px;
  padding: 0px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 20px;
  
}
.gamepage{
  width: 20px;
}
.headerlogo{
  display: inline;
  height: 50px;
}
.layout{
  width:100%;
  height: 100%;
  position:absolute;
  top:0px;
  left:0px;
}
.head{
  width: 100%;
  height: 13%;
  background-color:#368c5b;
}
.main{
  width: 100%;
  height: 230%;
  background-color:#fff6e6;
  margin-top: 79px;
}
.main-head{
  /* background: url('../../assets/1.png') no-repeat; */
  /* background-size: 100% 100%; */
  /* background-color: blanchedalmond; */
  width: 100%;
    height: 32%;
    left: 0px;
    top: auto;
    z-index: 0;
    margin-top: 40px;
}
.section-word{
      height: 100px;
    width: 200px;
    margin-left: 70px;
        margin-top: 5px;
    font-family: cursive;
}
.section_buttom{
  margin-top: 5px;
      width: 180px;
  font-family: "Open Sans",'Trebuchet MS', Helvetica, sans-serif;
  padding: 7px 10px;
  font-weight: bold;
  color: #fff;
  background: #607249 url(https://pioneerrmanage.wpengine.com/wp-content/uploads/2018/10/calbt.gif) repeat-x top left;
  border-radius: 5px;
text-decoration: none;
text-align: center;
line-height: 20px;
text-shadow: #232a1b 1px 1px 1px;
}
.main-body{
  width: 100%;
  height: 400px;
  text-align: left;
}
.section-body{
  display:inline-block;
  margin: 0 auto;
  width: 1000px;
  margin-top: 30px;
  margin-left: 12%;
}
.section{
  width:290px;
  display: inline-block;
  background-color: rgb(248, 233, 212);
  border-radius: 4px;
  box-shadow:inset 0 0 5px 5px rgb(231, 218, 197);
  margin-left: 20px;
  height: 100px;
  font-style: oblique;
}
.foot{
  width: 100%;
  height: 11%;
  background-color:#368c5b;
  text-align: center;
  color: white;
  line-height: 400%;
}
#logo{
  width: 40px;
  height: 40px;
  margin-top: 15px;
  margin-left: 15px;
}
div#userid {
  margin-left: 975px;
}
#user{
  width: 40px;
  height: 40px;
  margin-top: 15px;
  margin-right: 15px;
}
</style>
<script>
import Header from './Header'
import axios from 'axios'
export default {
    name: "Home",
    components: {
      Header,
    },
    data() {
      return {
        id: '',
        qid:-1,
      }
    },
    mounted:function() {
      // this.$route.query.ids
      console.log(this.$route.query.ids);
      this.id = this.$route.query.ids;
      console.log(this.id);
    },
    methods: {
      openfeedback() {
        this.$router.push('/feedback');
      },
      openidentify() {
        this.$router.push('/identify');
      },
      gameparams() {
      this.$router.push({ name: 'gameintro',query:{ids:this.id} });
    },
    jumpidentify() {
      // // this.$router.push('/identify');
      // let data = new FormData();
      //       data.append("qid", this.qid);
      //       // data.append("email_captcha", this.emailcode);
      //       // data.append("email", this.useremail);
      //       // // data.append("captcha_input", this.inputcode);
      //       // data.append("password", this.password);
      //       // data.append("pwd_verification", this.password);
      //       // // data.append("captcha_hashkey", this.codehash);
      //       // console.log(data);
      //       axios.post("http://124.70.206.207/match/getQuestion", data)
      //       .then(res=>{
      //         console.log(res)
      //       })
    }
    }
}
</script>