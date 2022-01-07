<template>
  <div class="body">
    <Header/>
    <div class="identify-intro">
        <div class="heading" style="display:inline-block;" id="word">
            <h>反馈</h>
        </div>
        <div class="heading" style="display:inline-block;" id="head-img">
            <img src="../../assets/identify_head.png" id="pic">
        </div>
    </div>
    <div class="tian"></div>
    <div class="slow">
        <div class="advicecontent">
      <div id="advicenavigationbar" class="feedbackcontent">
        <el-row class="tace" style="width:420px;">
  <el-col :span="12">
    <h5>反馈中心</h5>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      
      background-color="white"
      text-color="#2c3e50"
      active-text-color="#black">
      <el-menu-item index="1">
        <i class="el-icon-notebook-2"></i>
        <span slot="title" @click="feedbacknotic">反馈主页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span slot="title">反馈通知</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
      </div>
      <div id="feedbackview" class="feedbackcontent">
    <div class="noticehead"><h2 style="color:#101010;margin-left:20px;margin-bottom: 0px;">通知</h2></div>
    <br>
    <el-card class="box-card">
        <div v-for="(item) in resultList" :key="item.index" class="text-item">
            <div class="noticeblock">
                <h3>通知</h3>
                <p>{{item.feedback}}</p>
            </div>
        </div>
    </el-card>
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
.noticehead {
    height: 70px;
    background-color: white;
    border-radius: 4px;
    border: 1px solid #EBEEF5;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.advicecontent{
  height: 519px;
  width: 100%;
}
.feedbackbox .inputbord{
    height: 160px;
    width: 100%;
    margin-left:33px;
    margin-top: 10px;
}
.feedbackbox .inputbord #inputmessage{
    border: 1px solid rgba(187, 187, 187, 100);
    height: 160px;
    width: 90%;
    border-radius: 10px;
}
.feedbackbox h3{
    text-align: left;
    margin-left: 33px;;
}
.feedbackbox .contectbord{
    border-radius: 10px;
    width: 100%;
    height: 30px;
}
.feedbackbox .contectbord #contectinput{
    border: 1px solid rgba(187, 187, 187, 100);
    border-radius: 10px;
    width: 90%;
    margin-left: 30px;
    height: 50px;
}
.feedbackbox .el-button{
  margin-left: 45%;
    margin-top: 30px;
}
.feedbackcontent{
  display: inline-block;
  vertical-align: top;
}
.feedbackcontent h2{
  text-align: left;
  margin-left: 20px;
}
#advicenavigationbar{
  margin-left: 13%;
  margin-top:35px;
  width: 210px;
  height: 440px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  border: 1px solid #EBEEF5;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
#advicenavigationbar .el-menu-item {
  color: black;
  background-color: white;
  font-size: 100%;
  font-weight: 550;
  border-top: 1px solid #bbbbbb70;
}
#advicenavigationbar .el-icon-notebook-2:before {
    color: #CF4327;
}
#advicenavigationbar .el-icon-document:before {
    color: #CF4327;
}
#advicenavigationbar .el-icon-s-order:before {
    color: #CF4327;
}
#feedbackview{
  margin-left: 8px;
  margin-top: 35px;
  width: 700px;
  height: 440px;
}
.tace h5{
  font-size:20px;
  text-align: left;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
}
.feedbackbox p{
  width:100%;
}
.feedbackbox .word{
  display: inline-block;
  vertical-align: top;
}
.feedbackbox #textpng{
  margin-left: 0px;
}
.feedbackbox #imgpng{
  margin-left: 220px;
}
.feedbackbox{
  margin-top: 0px;
  width:700px;
  height: 440px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  border: 1px solid #EBEEF5;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.feedbackbox .inputbord{
    height: 160px;
    width: 100%;
    margin-left:33px;
    margin-top: 10px;
}
.feedbackbox .inputbord #inputmessage{
    border: 1px solid rgba(187, 187, 187, 100);
    height: 160px;
    width: 90%;
    border-radius: 10px;
}
.feedbackbox h3{
    text-align: left;
    margin-left: 33px;;
}
.feedbackbox .contectbord{
    border-radius: 10px;
    width: 100%;
    height: 30px;
}
.feedbackbox .contectbord #contectinput{
    border: 1px solid rgba(187, 187, 187, 100);
    border-radius: 10px;
    width: 90%;
    margin-left: 30px;
    height: 50px;
}
.feedbackbox .el-button{
  margin-left: 45%;
    margin-top: 30px;
}
.body{
    overflow-x: hidden;
    margin: 0px;
    height: 974px;
}
.el-button--primary:focus, .el-button--primary:hover {
    background: rgb(222, 160, 38);
    border-color: rgb(222, 160, 38);
    color: #FFF;
    box-shadow: rgb(187, 132, 23) 3px 3px;
    font-weight: bold;
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
.back {
    position: absolute;
    left: 10px;
    top: 170px;
}
.sendbutton .el-button {
    position: absolute;
    left: 930px;
    top: 770px;
    width: 100px;
    font-size: 15px;
}
.canclebutton .el-button {
    position: absolute;
    left: 800px;
    top: 770px;
    width: 100px;
    font-size: 15px;
}
.el-textarea__inner {
    height: 209px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border: 0px solid rgb(255 255 255 / 0%);
}
.servicebody {
    width: 100%;
    height: 53%;
    background-color: rgb(255, 255, 255);
    border-right: 1px solid #028a4b;
    border-left: 1px solid #028a4b;
    overflow-y: scroll;
}
.inputcontent {
    width: 100%;
    height: 35%;
    background-color: rgb(255, 255, 255);
    border: 1px solid #028a4b;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.headtitle {
    display: inline-block;
    vertical-align: top;
}
.servicewindow {
    width: 56%;
    height: 428px;
    background-color: #fff6e6;
    margin-left: 11%;
    border: 1px solid #0e0b05;
}
.serviceslow {
    width: 90%;
    height: 600px;
    background-color: #fff6e6;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    /* border: 1px solid #003a1f; */
    margin-top: 30px;
    margin-left: 5%;
}
.servicehead {
    width: 100.3%;
    height: 70px;
    background-color: #028a4b;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.slow{
    width:1280px;
    height: 670px;
    background-color: #fff6e6;
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
    width:1280px;
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
  name: "feedbacknotice",
  components: {
    Header,
    Footer
  },
  data() {
    return {
        input:'',
        textarea:'',
        resultList:[],
        testuid:'',
    }
  },
  methods: {
      feedbacknotic() {
          this.$router.push('/feedback');
      },
      sendmessage() {
          this.$notify({
          title: '成功',
          message: '成功发送反馈消息',
          type: 'success'
        });
        this.textarea = '';
      },
      canclemessge() {
          this.$notify.info({
          title: '取消',
          message: '取消发送，清空输入消息'
        });
          this.textarea = '';
      },
      backpre() {
          this.$router.push('home');
      }
    },
    mounted:function() {
        this.testuid = this.$cookies.get('uid');//获取cookie，返回 value
        let data = new FormData();
            data.append("uid", this.testuid);
            console.log(data);
            axios.post("http://124.70.206.207/common/get_feedback", data)
            .then(res=>{
                console.log(res);
            })
    }
}
</script>