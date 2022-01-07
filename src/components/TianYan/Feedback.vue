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
        <!-- <div class="back"><el-button @click="backpre" type="primary" round icon="el-icon-back">返回</el-button></div> -->
        
            <!-- <div class="serviceslow">
                <div class="servicehead">
                    <img class="headtitle" style="width:50px;height:50px;margin:10px 0px;margin-left:30px;" src="../../assets/service.png"/>
                    <h3 class="headtitle" style="margin:0px;padding:20px 20px;font-size:25px;font-familt:cursive;color:white;font-weight: 200;">反馈窗口</h3>
                </div>
                <div class="servicebody">
                    
                </div>
                <div class="inputcontent">
                    <el-input type="textarea" :rows="2" placeholder="请输入内容..." v-model="textarea"></el-input>
                </div>
                <div class="sendbutton">
                <el-button @click="sendmessage" round>发送</el-button>
                </div>
                <div class="canclebutton">
                <el-button @click="canclemessge" round>清空</el-button>
                </div>
            </div> -->
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
        <span slot="title">反馈主页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span slot="title" @click="feedbacknotic">反馈通知</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
      </div>
      <div id="feedbackview" class="feedbackcontent">
        <div class="feedbackbox">
          <!-- <img src="@/assets/feedback.png" id="feedbackimg"> -->
          <div class="inputbord">
              <el-input id="inputmessage" type="textarea" :rows="10" placeholder="请输入内容" v-model="textarea"></el-input>
          </div>
          <h3>联系方式：</h3>
          <div class="contectbord">
              <el-input id="contectinput" v-model="input" placeholder="请输入联系方式"></el-input>
          </div>
          <el-button @click="commit">提交</el-button>
        </div>
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
.advicecontent{
  height: 519px;
  width: 100%;
  /* background-color: rgb(255, 255, 255); */
}
.feedbackbox .inputbord{
    height: 160px;
    width: 100%;
    margin-left:0px;
    margin-top: 0px;
}
.feedbackbox .inputbord #inputmessage{
    border: 1px solid rgba(187, 187, 187, 100);
    height: 160px;
    width: 90%;
    border-radius: 10px;
}
.feedbackbox h3{
    text-align: left;
    margin-left: 33px;
    margin-top: 80px;
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
/* #feedbackimg{
    width: 350px;
    height: 40px;
    margin-left: 30px;
    margin-top: 10px;
} */
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
  border-radius: 20px;
}
.tace h5{
  font-size:20px;
  text-align: left;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
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
  name: "feedback",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      testuid:'',
        input:'',
        textarea: ''
    }
  },
  methods: {
      commit() {
        this.testuid = this.$cookies.get('uid');//获取cookie，返回 value
        console.log(this.testuid);
        console.log(this.textarea);
        let data = new FormData();
      data.append("uid", this.testuid);
      data.append("content", this.textarea);
           console.log(data);
           axios.post("http://124.70.206.207/common/u2a", data)
           .then(res=>{
               console.log(res);
            })
      },
      feedbacknotic() {
          this.$router.push('feedbacknotice');
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
        
    }
}
</script>