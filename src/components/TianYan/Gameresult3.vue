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
        <div class="resultbody">
            <div class="resultcontent" id="content1">
                <!-- 获取用户头像和姓名 -->
                <div class="content1image">
                    <img id="crown1" src="../../assets/crown.png" v-show="win1view"/>
                    <img id="userimage" :src="userInfo.avatar"/>
                </div>
                <div class="user1">
                    <h3 style="margin-left:180px;margin-top:-10px;">{{name_1}}</h3>
                    <!-- <h4 style="margin-left:140px;">共计时间：{{score1}}秒</h4> -->
                    <h4 style="margin-left:150px;">得分：{{score1}}</h4>
                    <img id="crown11" src="../../assets/successsful.png" v-show="win1view"/>
                </div>
            </div>
            <div class="resultcontent" id="content3"></div>
            <div class="resultcontent" id="content2" style="margin-left: 191px;">
                <!-- 机器头像或另一名玩家头像 -->
                <div class="content2image">
                    <img id="crown2" src="../../assets/crown.png" v-show="win2view"/>
                    <img id="userimage2" :src="userInfo2.avatar"/>
                </div>
                <div class="user2">
                    <h3 style="margin-left:180px;margin-top:-10px;">{{name_2}}</h3>
                    <h4 style="margin-left:140px;">共计时间：{{score2}}秒</h4>
                    <h4 style="margin-left:150px;">得分：{{score2}}</h4>
                    <img id="crown22" src="../../assets/successsful.png" v-show="win2view"/>
                </div>
            </div>
        </div>
        <el-button @click="backmain">返回主页</el-button>
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
    height: 985px;
}
#crown1 {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 290px;
    top: 265px;
}
#crown11 {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 265px;
    top: 565px;
}
#crown2 {
    width: 50px;
    height: 50px;
    position: absolute;
    left: 895px;
    top: 260px;
}
#crown22 {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 875px;
    top: 565px;
}
#userimage {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 50px 150px;
}
#userimage2 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 40px 150px;
}
#content1 {
    /* border: 1px solid #003a1f; */
    background-color: #FFF;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    display: inline-block;
    vertical-align: top;
    width: 40%;
    height: 80%;
    margin-top: 45px;
    border-radius: 5px;
}
#content2 {
    /* border: 1px solid #003a1f; */
    background-color: #FFF;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    display: inline-block;
    vertical-align: top;
    width: 40%;
    height: 80%;
    margin-top: 45px;
    border-radius: 5px;
}
#content3 {
    position: absolute;
    width: 250px;
    height: 250px;
    background: url('../../assets/vs.png') no-repeat;
    background-size: 100% 100%;
    top: 310px;
    left: 500px;
}
.resultcontent {
    display: inline-block;
    vertical-align: top;
}
.resultbody {
    /* border: 1px solid #003a1f; */
    width: 80%;
    height: 550px;
    margin-left: 115px;
}
.el-button:focus, .el-button:hover {
    background: rgb(222, 160, 38);
    border-color: rgb(222, 160, 38);
    color: #FFF;
    box-shadow: rgb(187, 132, 23) 3px 3px;
    font-weight: bold;
}
.el-button.is-active, .el-button:active {
    background: rgb(222, 160, 38);
    border-color: rgb(222, 160, 38);
    color: #FFF;
    box-shadow: rgb(187, 132, 23) 3px 3px;
}
.el-button {
    color: white;
    margin:40px 550px;
    box-shadow: rgb(173, 126, 60) 2px 2px;
    font-family: cursive;
    font-size: 20px;
    background-color: rgb(228, 167, 80);
    border-color: rgb(228, 167, 80);
}
.slow{
    width:1280px;
    height: 682px;
    background-color: #fff6e6;
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
  name: "gameresult3",
  components: {
    Header,
    Footer,
  },
  data() {
      return {
          testuid:'',
          per2:'',
          id: '',
          name_1: '小易',
          name_2: '小济',
          score1: 0,
          score2: 0,
          win1view: 0,
          win2view: 0,
          correct_number1: 2,
          correct_number2: 3,
          question_number: 6,
          userInfo: {
              avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20190203%2F53463928a43447f78a4ff616bd86dbf7.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641135214&t=876527eda6f954bb21ebb63790b74ea9'
              },
          userInfo2: {
              avatar: 'https://img0.baidu.com/it/u=781976885,3390272591&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500'
              },
      }
  },
  mounted: function() {
      this.testuid = this.$cookies.get('uid');//获取cookie，返回 value
        //定义定时器开始时间为0
        var progressnuw =0;
        //顶一个定时器
        var timer=setInterval(()=>{
        //变量一直++
        progressnuw++
        this.getper();
        // console.log(666);
        if(this.per2 == 100 ){
        //     let data = new FormData();
        //   data.append("uid",this.testuid);
        // console.log(data);
        // axios.post("http://124.70.206.207/match/delete", data)
        // .then(res=>{
        //     console.log(res);
        // })
        }
        // if(progressnuw == 100) {
        //     // this.showintro = 0;
        // }
        //清除定时器
        // if(progressnuw>= 100){
        //     clearInterval(timer);
        // }
        //获取重新赋值
        this.loading=progressnuw;
        // format(100);
        },1000)

    //   if(this.correct_number1>this.correct_number2) {
    //       this.win1view = 1;
    //       this.win2view = 0;
    //   }
    //   else {
    //       this.win1view = 0;
    //       this.win2view = 1;
    //   }
  },
   methods: {
       getper() {
          let data = new FormData();
          data.append("uid",this.testuid);
        console.log(data);
        axios.post("http://124.70.206.207/match/getStatus", data)
        .then(res=>{
            console.log(res);
            this.per2 = res.data.progress2 * 10;
            this.score1 = res.data.score1;
            this.score2 = res.data.score2;
            this.name_1 = res.data.user1;
            this.name_2 = res.data.user2;
        })
      },
       backmain() {
           let data = new FormData();
          data.append("uid",this.testuid);
        console.log(data);
        axios.post("http://124.70.206.207/match/delete", data)
        .then(res=>{
            console.log(res);
        })
           this.$router.push('/gameintro');
       }
    //   recordid() {
    //       this.$router.push({ name: 'record',params:{ids:this.id} });
    //   }
    },
    // mounted:function() {
    //     console.log(this.$route.params.ids);
    //     this.id = this.$route.params.ids;
    //     console.log(this.id);
    // }
}
</script>