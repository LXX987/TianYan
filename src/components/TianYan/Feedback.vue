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
        <div class="back"><el-button @click="backpre" type="primary" round icon="el-icon-back">返回</el-button></div>
        <div class="servicewindow">
            <div class="serviceslow">
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
    width: 75%;
    height: 665px;
    background-color: #fff6e6;
    margin-left: 11%;
    border: 1px solid #fff6e6;
    /* margin-top: 50px; */
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
export default {
  name: "feedback",
  components: {
    Header,
    Footer
  },
  data() {
    return {
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        textarea: '',
      questionnumber: '6',
      question1: 'http://inews.gtimg.com/newsapp_match/0/10351417074/0.jpg',
      question2: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg010.hc360.cn%2Fm3%2FM01%2FE2%2F46%2FwKhQ5lTS1cWERqlbAAAAAF5XH74692.jpg&refer=http%3A%2F%2Fimg010.hc360.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641310218&t=9b751b4f2aa4c552d9f8c183b2d787ca',
      question3: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg004.hc360.cn%2Fm7%2FM03%2F00%2F1B%2FwKhQo1XC20yEdNTfAAAAAHqzUFA421.jpg&refer=http%3A%2F%2Fimg004.hc360.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641310218&t=9b32908147c78576377e42b390fb1091',
      question4: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.99114.com%2Fgroup1%2FM00%2FD5%2F69%2FwKgGTFaoWhWASgh0AAPEqd5Qb0Y760.jpg&refer=http%3A%2F%2Fimg3.99114.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641310218&t=1c36309ca5f67e40b8f333844d6cef66',
      question5: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.168mh.com%2Fwp-content%2Fuploads%2F2019%2F11%2F87555edf6b5667e.jpg&refer=http%3A%2F%2Fwww.168mh.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641310218&t=c39aeba0d3f3b6c65df3ca641528b3a4',
      question6: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpfsc.agri.cn%2Fncpflzs%2F201104%2FW020110408374232979423.jpg&refer=http%3A%2F%2Fpfsc.agri.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641310816&t=a8a6ebdd86a1d27c257274ec00acaa9e'
    }
  },
  methods: {
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
        // this.$axios.post("https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=UKHMEldVHVqw0U1B8GtT1hr2&client_secret=XB8ap23BSr933rDy8V4ECjU38w82Dt2p", {

        // }).then( res=> {
        //     console.log(res)
        // })
    }
}
</script>