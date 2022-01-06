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
    <div class="tian"></div>
    <div class="slow">
        <div class="progress_bar">
            <div class="bar" id="bar1">
                <img class="user1" id="pic1" :src="headpic1" />
                <el-progress  class="user1" :percentage="50"></el-progress>
            </div>
            <div class="bar" id="barword">VS</div>
            <div class="bar" id="bar2">
                <el-progress  class="user2" :percentage="50"></el-progress>
                <img class="user2" id="pic2" :src="headpic2" />
            </div>
        </div>
        <div class="paper">
            <div class="countdown"><p>距离竞赛截止：</p><CountDown @countDowmEnd="testData"/></div>
            <div class="gameover" v-show="gameovershow">
                <el-result icon="warning" title="警告提示" subTitle="竞赛时间到，请结束答题！">
                    <template slot="extra">
                        <el-button @click="closewarn" type="primary" size="medium">确定</el-button>
                    </template>
                </el-result>
            </div>
            <div class="gameintro" v-show="showintro">
                <p style="font-size:30px;margin-top:20px;">准备好了吗？</p>
                <el-divider></el-divider>
                <p>识别图中农作物的种类</p>
                <p>游戏共计{{questionnumber}}道题</p>
                <p>请回道下列图片中的农作物种类</p>
                <p>看看最后谁答题正确率最高呢？</p>
            </div>

            <h2>第{{question_number}}题</h2>
            <img style="margin-left:320px;" :src="question_pic" />
            <div>
            <el-radio v-model="radio" label="1">备选项</el-radio>
            <el-radio v-model="radio" label="2">备选项</el-radio>
            <el-radio v-model="radio" label="3">备选项</el-radio>
            <el-radio v-model="radio" label="4">备选项</el-radio>
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
.el-radio {
    margin-left: 100px;
}
.user2 {
    display: inline-block;
    vertical-align: top;
}
.user1 {
    display: inline-block;
    vertical-align: top;
}
.el-progress {
    width: 80%;
    margin-top: 18px;
    margin-left: 15px;
}
#pic1 {
    width: 50px;
    height: 50px;
}
#pic2 {
    width: 50px;
    height: 50px;
}
#barword {
    text-align: center;
    font-size: 30px;
    color: rgb(255, 166, 0);
}
.bar {
    display: inline-block;
    vertical-align: top;
}
#barword {
    text-align: center;
    font-size: 30px;
    color: rgb(255, 166, 0);
    margin: 5px 10px;
}
#bar1 {
    margin-left: 40px;
    width: 40%;
    height: 50px;
    /* background-color: turquoise; */
}
#bar2 {
    /* margin-left: 40px; */
    width: 40%;
    height: 50px;
    /* background-color: turquoise; */
}
.progress_bar {
    width:70%;
    height: 50px;
    margin-left: 160px;
    margin-bottom: 20px;
    /* background-color: thistle; */
}
.el-divider--horizontal {
    width: 80%;
    margin: 10px 88px;
}
.gameintro p {
    text-align: center;
    font-family: cursive;
    font-weight: 500;
    font-size: 25px;
    color: rgb(92, 79, 59);
    margin: 15px 10px;
}
.gameintro {
    position: absolute;
    left: 320px;
    width:600px;
    height: 300px;
    background-color: rgb(253, 248, 202);
      border-radius: 4px;
  border: 1px solid #EBEEF5;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.body{
    overflow-x: hidden;
    margin: 0px;
    height: 874px;
}
.el-result__extra {
    margin-top: 10px;
}
.gameover .el-button {
    margin-left: 0px;
    margin-top: 0px;
}
.gameover {
    width: 400px;
    height: 250px;
    z-index: 99999;
	position: fixed;
    left: 400px;
    top: 150px;
    border: 1px solid rgb(54, 140, 91);
    background-color: #fffff1;
    border-radius: 5px;
}
.countdown p {
    margin: -1px -1px;
    width: 100%;
    border: 1px solid rgb(54, 140, 91);
    background-color: #80b391;
    border-radius: 5px;
}
.countdown {
    background-color: rgb(253, 240, 224);
    border-radius: 5px;
    /* position: absolute; */
    z-index: 99999;
	position: fixed;
    left: 1050px;
    top: 250px;
    width: 180px;
    height: 120px;
    border: 1px solid rgb(54, 140, 91);
    text-align: center;
    line-height: 50px;
    font-size: 20px;
}
.paper #packpage{
    display: inline-block;
    vertical-align: top;
}
.paper .back #routeback:hover{
    color: rgb(228, 167, 80);
}
.paper .back #routeback{
    color: rgb(0, 0, 0);
}
.paper .back{
    font-size: 40px;
    margin-left: -40px;
    width: 20%;
}
.paper #backpage:hover{
    color: rgb(228, 167, 80);
}
.paper .back p{
    font-weight: bold;
    font-size: 22px;
    margin-top: 12px;
    margin-bottom: 0px;
}
.paper{
    width:70%;
    height:450px;
    background-color: rgb(255, 239, 220);
    margin-left: 90px;
    box-shadow: inset 0px 8px 20px 0 rgb(239 225 204);
    border-radius: 10px;
    padding-top: 30px;
    padding-left: 80px;
    padding-right: 80px;
}
.questionpaper .el-button{
    width:100px;
    height: 40px;
    text-align: center;
    line-height: 15px;
    font-size:20px;
    font-family: cursive;
    margin-left: 400px;
    margin-top: 10px;
}
.paper h2{
    font-size: 30px;
    font-weight: bold;
    font-family: cursive;
    text-align: center;
    color: rgb(54, 140, 91);
    text-shadow: rgb(255 255 255) 2px 2px;
}
.questionpaper p{
    margin-left: 20px;
    font-size: 16px;
    font-weight: bold;
}
.paper h3{
    margin-left: 20px;
}
.paper .el-input{
    width: 40%;
    margin-left: 200px;
}
.paper img{
    width: 250px;
    height: 250px;
    margin-left: 200px;
}
.slow{
    width:1280px;
    height: 570px;
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
import CountDown from './CountDown'
export default {
  name: "vs1",
  components: {
    Header,
    Footer,
    CountDown
  },
  data() {
    return {
        question_pic: require('../../assets/upload_identify_pic.png'),
        question_number: 1,
        input:'',
        radio: '0',
        // input1: '',
        // input2: '',
        // input3: '',
        // input4: '',
        // input5: '',
        // input6: '',
        gameovershow: 0,
        showintro: 1,
        // disabledinput1: false,
        // disabledinput2: false,
        // disabledinput3: false,
        // disabledinput4: false,
        // disabledinput5: false,
        // disabledinput6: false,
        // disabledbutton: false,
      questionnumber: '6',
      headpic1: require('../../assets/serviceimg.png'),
      headpic2: require('../../assets/tihuanpic.png'),
    //   question1: 'http://inews.gtimg.com/newsapp_match/0/10351417074/0.jpg',
    //   question2: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg010.hc360.cn%2Fm3%2FM01%2FE2%2F46%2FwKhQ5lTS1cWERqlbAAAAAF5XH74692.jpg&refer=http%3A%2F%2Fimg010.hc360.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641310218&t=9b751b4f2aa4c552d9f8c183b2d787ca',
    //   question3: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg004.hc360.cn%2Fm7%2FM03%2F00%2F1B%2FwKhQo1XC20yEdNTfAAAAAHqzUFA421.jpg&refer=http%3A%2F%2Fimg004.hc360.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641310218&t=9b32908147c78576377e42b390fb1091',
    //   question4: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.99114.com%2Fgroup1%2FM00%2FD5%2F69%2FwKgGTFaoWhWASgh0AAPEqd5Qb0Y760.jpg&refer=http%3A%2F%2Fimg3.99114.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641310218&t=1c36309ca5f67e40b8f333844d6cef66',
    //   question5: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.168mh.com%2Fwp-content%2Fuploads%2F2019%2F11%2F87555edf6b5667e.jpg&refer=http%3A%2F%2Fwww.168mh.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641310218&t=c39aeba0d3f3b6c65df3ca641528b3a4',
    //   question6: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpfsc.agri.cn%2Fncpflzs%2F201104%2FW020110408374232979423.jpg&refer=http%3A%2F%2Fpfsc.agri.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641310816&t=a8a6ebdd86a1d27c257274ec00acaa9e'
    }
  },
  methods: {
      format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
      },
      jumpresult() {
          this.$router.push('/gameresult1');
      },
      closewarn() {
          this.gameovershow = 0 ;
          this.$router.push('/gameresult1');
      },
      testData(data){
      console.log("parent");
      console.log(data);
      if(data == true) {
          console.log("ok");
          //计时结束
          this.gameovershow = 1;
        //   this.disabledinput1 = true;
        //   this.disabledinput2 = true;
        //   this.disabledinput3 = true;
        //   this.disabledinput4 = true;
        //   this.disabledinput5 = true;
        //   this.disabledinput6 = true;
        //   this.disabledbutton = true;
      }
    },
      // 事件监听 监听页面的 scroll 事件，回调方法为 handleScroll
    listenerFunction(e) {
      document.addEventListener('scroll', this.handleScroll, true)
    },
    // 编写滚动条事件
    handleScroll() {
      // 获取滚动条元素对象
    //   let ele = document.getElementsByClassName('page-router-wrapper')[0]
      // 获取需要固定的元素对象
    //   let editorNav = document.getElementsByName('slow')[0]
      // 判断滚动条的高度（大于240，给固定元素添加 class）
    //   if (ele.scrollTop > 240) {
        // editorNav.classList.add('countdown')
    //   } else {
    //     editorNav.classList.remove('countdown')
    //   }
    }
    },
    mounted:function() {
        //定义定时器开始时间为0
        var progressnuw =0;
        //顶一个定时器
        var timer=setInterval(()=>{
        //变量一直++
        progressnuw++
        if(progressnuw == 100) {
            this.showintro = 0;
        }
        //清除定时器
        if(progressnuw>= 100){
            clearInterval(timer);
        }
        //获取重新赋值
        this.loading=progressnuw;
        // format(100);
        },10)
    },
    // 页面创建钩子函数中添加事件监听
   created() {
     this.listenerFunction()
   },
   // 销毁事件监听
    beforeDestroy() {
      document.removeEventListener('scroll', this.listenerFunction)
    }
}
</script>
