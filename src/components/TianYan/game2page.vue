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
        <div class="paper">
            <div class="countdown"><p>距离竞赛截止：</p><CountDown @countDowmEnd="testData"/></div>
            <div class="gameover" v-show="gameovershow">
                <el-result icon="warning" title="警告提示" subTitle="竞赛时间到，请结束答题！">
                    <template slot="extra">
                        <el-button @click="closewarn" type="primary" size="medium">确定</el-button>
                    </template>
                </el-result>
            </div>
            <div class="questionpaper">
              <div class="back"><router-link to="/gameintro" id="routeback" style="text-decoration:none;"><div class="el-icon-back" id="backpage"></div><p id="packpage">返回</p></router-link></div>
              <h2>选择农作物的正确图片</h2>
              <p>题目数：</p><p style="margin-left:55px;font-size:20px;color:rgb(228, 167, 80)">{{questionnumber}}</p><p>说明：</p><p style="margin-left:55px;">依据题目内容，选择对应农作物种类的图片，作答结束，点击提交按钮即可查看结果。</p>
              <el-divider></el-divider>
              <h3>1.【选择题】（2分）</h3>
              <h style="color:#ff5722;margin-left:50px;font-size:25px;">题目：胡萝卜</h>
              <h3 style="margin-left: 50px;">请选择答案：</h3>
              <el-row style="left:-150px;">
                <el-col :span="6">
                  <img :src="question1"/>
                </el-col>
                <el-col :span="6">
                  <img :src="question2"/>
                </el-col>
                <el-col :span="6">
                  <img :src="question3"/>
                </el-col>
                <el-col :span="6">
                  <img :src="question4"/>
                </el-col>
              </el-row>

              <el-row style="left:110px;">
                <el-col :span="6">
                  <el-radio v-model="radio1" label="1">A</el-radio>
                </el-col>
                <el-col :span="6">
                  <el-radio v-model="radio1" label="2">B</el-radio>
                </el-col>
                <el-col :span="6">
                  <el-radio v-model="radio1" label="3">C</el-radio>
                </el-col>
                <el-col :span="6">
                  <el-radio v-model="radio1" label="4">D</el-radio>
                </el-col>
              </el-row>

              <el-divider></el-divider>

              <h3>2.【选择题】（2分）</h3>
              <h style="color:#ff5722;margin-left:50px;font-size:25px;">题目：洋葱</h>
              <h3 style="margin-left: 50px;">请选择答案：</h3>
              <el-row style="left:-150px;">
                <el-col :span="6">
                  <img :src="question5"/>
                </el-col>
                <el-col :span="6">
                  <img :src="question6"/>
                </el-col>
                <el-col :span="6">
                  <img :src="question7"/>
                </el-col>
                <el-col :span="6">
                  <img :src="question9"/>
                </el-col>
              </el-row>

              <el-row style="left:110px;">
                <el-col :span="6">
                  <el-radio v-model="radio2" label="1">A</el-radio>
                </el-col>
                <el-col :span="6">
                  <el-radio v-model="radio2" label="2">B</el-radio>
                </el-col>
                <el-col :span="6">
                  <el-radio v-model="radio2" label="3">C</el-radio>
                </el-col>
                <el-col :span="6">
                  <el-radio v-model="radio2" label="4">D</el-radio>
                </el-col>
              </el-row>
              <el-divider></el-divider>

              <h3>3.【选择题】（2分）</h3>
              <h style="color:#ff5722;margin-left:50px;font-size:25px;">题目：白菜</h>
              <h3 style="margin-left: 50px;">请选择答案：</h3>
              <el-row style="left:-150px;">
                <el-col :span="6">
                  <img :src="question8"/>
                </el-col>
                <el-col :span="6">
                  <img :src="question10"/>
                </el-col>
                <el-col :span="6">
                  <img :src="question11"/>
                </el-col>
                <el-col :span="6">
                  <img :src="question12"/>
                </el-col>
              </el-row>

              <el-row style="left:110px;">
                <el-col :span="6">
                  <el-radio v-model="radio3" label="1">A</el-radio>
                </el-col>
                <el-col :span="6">
                  <el-radio v-model="radio3" label="2">B</el-radio>
                </el-col>
                <el-col :span="6">
                  <el-radio v-model="radio3" label="3">C</el-radio>
                </el-col>
                <el-col :span="6">
                  <el-radio v-model="radio3" label="4">D</el-radio>
                </el-col>
              </el-row>
              <el-divider></el-divider>

              <h3>4.【选择题】（2分）</h3>
              <h style="color:#ff5722;margin-left:50px;font-size:25px;">题目：黄瓜</h>
              <h3 style="margin-left: 50px;">请选择答案：</h3>
              <el-row style="left:-150px;">
                <el-col :span="6">
                  <img :src="question13"/>
                </el-col>
                <el-col :span="6">
                  <img :src="question14"/>
                </el-col>
                <el-col :span="6">
                  <img :src="question15"/>
                </el-col>
                <el-col :span="6">
                  <img :src="question16"/>
                </el-col>
              </el-row>

              <el-row style="left:110px;">
                <el-col :span="6">
                  <el-radio v-model="radio4" label="1">A</el-radio>
                </el-col>
                <el-col :span="6">
                  <el-radio v-model="radio4" label="2">B</el-radio>
                </el-col>
                <el-col :span="6">
                  <el-radio v-model="radio4" label="3">C</el-radio>
                </el-col>
                <el-col :span="6">
                  <el-radio v-model="radio4" label="4">D</el-radio>
                </el-col>
              </el-row>
              <el-divider></el-divider>

              <h3>5.【选择题】（2分）</h3>
              <h style="color:#ff5722;margin-left:50px;font-size:25px;">题目：玉米</h>
              <h3 style="margin-left: 50px;">请选择答案：</h3>
              <el-row style="left:-150px;">
                <el-col :span="6">
                  <img :src="question17"/>
                </el-col>
                <el-col :span="6">
                  <img :src="question18"/>
                </el-col>
                <el-col :span="6">
                  <img :src="question19"/>
                </el-col>
                <el-col :span="6">
                  <img :src="question20"/>
                </el-col>
              </el-row>

              <el-row style="left:110px;">
                <el-col :span="6">
                  <el-radio v-model="radio5" label="1">A</el-radio>
                </el-col>
                <el-col :span="6">
                  <el-radio v-model="radio5" label="2">B</el-radio>
                </el-col>
                <el-col :span="6">
                  <el-radio v-model="radio5" label="3">C</el-radio>
                </el-col>
                <el-col :span="6">
                  <el-radio v-model="radio5" label="4">D</el-radio>
                </el-col>
              </el-row>
              <el-divider></el-divider>

              <h3>6.【选择题】（2分）</h3>
              <h style="color:#ff5722;margin-left:50px;font-size:25px;">题目：红薯</h>
              <h3 style="margin-left: 50px;">请选择答案：</h3>
              <el-row style="left:-150px;">
                <el-col :span="6">
                  <img :src="question21"/>
                </el-col>
                <el-col :span="6">
                  <img :src="question22"/>
                </el-col>
                <el-col :span="6">
                  <img :src="question23"/>
                </el-col>
                <el-col :span="6">
                  <img :src="question24"/>
                </el-col>
              </el-row>

              <el-row style="left:110px;">
                <el-col :span="6">
                  <el-radio v-model="radio6" label="1">A</el-radio>
                </el-col>
                <el-col :span="6">
                  <el-radio v-model="radio6" label="2">B</el-radio>
                </el-col>
                <el-col :span="6">
                  <el-radio v-model="radio6" label="3">C</el-radio>
                </el-col>
                <el-col :span="6">
                  <el-radio v-model="radio6" label="4">D</el-radio>
                </el-col>
              </el-row>
              <el-divider></el-divider>

              <el-button round :disabled="disabledbutton" @click="jumpresult">提交</el-button>
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
    height: 2974px;
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
    height:2600px;
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
    height: 2670px;
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
.questionpaper img{
  width:150px;
  height:150px;
}
</style>
<script>
import Header from './Header'
import Footer from './Footer'
import CountDown from './CountDown'
export default {
  name: "game2page",
  components: {
    Header,
    Footer,
    CountDown
  },
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
      radio1:'0',
      radio2:'0',
      radio3:'0',
      radio4:'0',
      radio5:'0',
      radio6:'0',
      gameovershow: 0,
      disabledinput1: false,
      disabledinput2: false,
      disabledinput3: false,
      disabledinput4: false,
      disabledinput5: false,
      disabledinput6: false,
      disabledbutton: false,
      questionnumber: '6',
      question1: require('../../assets/pic1.png'),
      question2: require('../../assets/pic2.jpg'),
      question3: require('../../assets/pic3.png'),
      question4: require('../../assets/pic4.jpg'),
      question5: require('../../assets/pic5.jpg'),
      question6: require('../../assets/pic6.png'),
      question7: require('../../assets/pic7.png'),
      question8: require('../../assets/pic8.png'),
      question9: require('../../assets/pic9.png'),
      question10: require('../../assets/pic10.png'),
      question11: require('../../assets/pic11.png'),
      question12: require('../../assets/pic12.png'),
      question13: require('../../assets/pic13.jpg'),
      question14: require('../../assets/pic14.jpg'),
      question15: require('../../assets/pic15.png'),
      question16: require('../../assets/pic16.jpg'),
      question17: require('../../assets/pic17.jpg'),
      question18: require('../../assets/pic18.jpg'),
      question19: require('../../assets/pic19.jpg'),
      question20: require('../../assets/pic20.jpg'),
      question21: require('../../assets/pic21.jpg'),
      question22: require('../../assets/pic22.jpg'),
      question23: require('../../assets/pic23.jpg'),
      question24: require('../../assets/pic24.jpg'),
    }
  },
  methods: {
      jumpresult() {
          this.$router.push('/gameresult2');
      },
      closewarn() {
          this.gameovershow = 0 ;
          this.$router.push('/gameresult2');
      },
      testData(data){
      console.log("parent");
      console.log(data);
      if(data == true) {
          console.log("ok");
          //计时结束
          this.gameovershow = 1;
          // this.disabledinput1 = true;
          // this.disabledinput2 = true;
          // this.disabledinput3 = true;
          // this.disabledinput4 = true;
          // this.disabledinput5 = true;
          // this.disabledinput6 = true;
          this.disabledbutton = true;
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
        // this.$axios.post("https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=UKHMEldVHVqw0U1B8GtT1hr2&client_secret=XB8ap23BSr933rDy8V4ECjU38w82Dt2p", {

        // }).then( res=> {
        //     console.log(res)
        // })
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
