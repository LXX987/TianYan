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
            <h2>识别图中农作物种类</h2>
            <p>题目数：</p><p style="margin-left:55px;font-size:20px;color:rgb(228, 167, 80)">{{questionnumber}}</p><p>说明：</p><p style="margin-left:55px;">依据题目图片内容，回答对应农作物种类，作答结束，点击提交按钮即可查看结果。</p>
            <el-divider></el-divider>
            <h3>1.【选择题】（2分）</h3>
            <img :src="question1"/>
            <p>请回答：</p>
            <el-radio v-model="radio1" label="1">{{question11}}</el-radio>
            <el-radio v-model="radio1" label="2">{{question12}}</el-radio>
            <el-radio v-model="radio1" label="3">{{question13}}</el-radio>
            <el-radio v-model="radio1" label="4">{{question14}}</el-radio>
            <el-divider></el-divider>
            <h3>2.【选择题】（2分）</h3>
            <img :src="question2"/>
            <p>请回答：</p>
            <el-radio v-model="radio2" label="1">{{question21}}</el-radio>
            <el-radio v-model="radio2" label="2">{{question22}}</el-radio>
            <el-radio v-model="radio2" label="3">{{question23}}</el-radio>
            <el-radio v-model="radio2" label="4">{{question24}}</el-radio>
            <el-divider></el-divider>
            <h3>3.【选择题】（2分）</h3>
            <img :src="question3"/>
            <p>请回答：</p>
            <el-radio v-model="radio3" label="1">{{question31}}</el-radio>
            <el-radio v-model="radio3" label="2">{{question32}}</el-radio>
            <el-radio v-model="radio3" label="3">{{question33}}</el-radio>
            <el-radio v-model="radio3" label="4">{{question34}}</el-radio>
            <el-divider></el-divider>
            <h3>4.【选择题】（2分）</h3>
            <img :src="question4"/>
            <p>请回答：</p>
            <el-radio v-model="radio4" label="1">{{question41}}</el-radio>
            <el-radio v-model="radio4" label="2">{{question42}}</el-radio>
            <el-radio v-model="radio4" label="3">{{question43}}</el-radio>
            <el-radio v-model="radio4" label="4">{{question44}}</el-radio>
            <el-divider></el-divider>
            <h3>5.【选择题】（2分）</h3>
            <img :src="question5"/>
            <p>请回答：</p>
            <el-radio v-model="radio5" label="1">{{question51}}</el-radio>
            <el-radio v-model="radio5" label="2">{{question52}}</el-radio>
            <el-radio v-model="radio5" label="3">{{question53}}</el-radio>
            <el-radio v-model="radio5" label="4">{{question54}}</el-radio>
            <el-divider></el-divider>
            <h3>6.【选择题】（2分）</h3>
            <img :src="question6"/>
            <p>请回答：</p>
            <el-radio v-model="radio6" label="1">{{question61}}</el-radio>
            <el-radio v-model="radio6" label="2">{{question62}}</el-radio>
            <el-radio v-model="radio6" label="3">{{question63}}</el-radio>
            <el-radio v-model="radio6" label="4">{{question64}}</el-radio>
            <el-divider></el-divider>
            <h3>7.【选择题】（2分）</h3>
            <img :src="question7"/>
            <p>请回答：</p>
            <el-radio v-model="radio7" label="1">{{question71}}</el-radio>
            <el-radio v-model="radio7" label="2">{{question72}}</el-radio>
            <el-radio v-model="radio7" label="3">{{question73}}</el-radio>
            <el-radio v-model="radio7" label="4">{{question74}}</el-radio>
            <el-divider></el-divider>
            <h3>8.【选择题】（2分）</h3>
            <img :src="question8"/>
            <p>请回答：</p>
            <el-radio v-model="radio8" label="1">{{question81}}</el-radio>
            <el-radio v-model="radio8" label="2">{{question82}}</el-radio>
            <el-radio v-model="radio8" label="3">{{question83}}</el-radio>
            <el-radio v-model="radio8" label="4">{{question84}}</el-radio>
            <el-divider></el-divider>
            <h3>9.【选择题】（2分）</h3>
            <img :src="question9"/>
            <p>请回答：</p>
            <el-radio v-model="radio9" label="1">{{question91}}</el-radio>
            <el-radio v-model="radio9" label="2">{{question92}}</el-radio>
            <el-radio v-model="radio9" label="3">{{question93}}</el-radio>
            <el-radio v-model="radio9" label="4">{{question94}}</el-radio>
            <el-divider></el-divider>
            <h3>10.【选择题】（2分）</h3>
            <img :src="question10"/>
            <p>请回答：</p>
            <el-radio v-model="radio10" label="1">{{question101}}</el-radio>
            <el-radio v-model="radio10" label="2">{{question102}}</el-radio>
            <el-radio v-model="radio10" label="3">{{question103}}</el-radio>
            <el-radio v-model="radio10" label="4">{{question104}}</el-radio>
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
.el-radio {
    margin-left: 105px;
}
.body{
    overflow-x: hidden;
    margin: 0px;
    height: 4974px;
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
    height:4650px;
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
    height: 4670px;
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
import axios from 'axios'
export default {
  name: "game1page",
  components: {
    Header,
    Footer,
    CountDown
  },
  data() {
    return {
        question11:'',
        question12:'',
        question13:'',
        question14:'',
        question21:'',
        question22:'',
        question23:'',
        question24:'',
        question31:'',
        question32:'',
        question33:'',
        question34:'',
        question41:'',
        question42:'',
        question43:'',
        question44:'',
        question51:'',
        question52:'',
        question53:'',
        question54:'',
        question61:'',
        question62:'',
        question63:'',
        question64:'',
        question71:'',
        question72:'',
        question73:'',
        question74:'',
        question81:'',
        question82:'',
        question83:'',
        question84:'',
        question91:'',
        question92:'',
        question93:'',
        question94:'',
        question101:'',
        question102:'',
        question103:'',
        question104:'',
        // input1: '',
        // input2: '',
        // input3: '',
        // input4: '',
        // input5: '',
        // input6: '',
        radio1: '0',
        radio2: '0',
        radio3: '0',
        radio4: '0',
        radio5: '0',
        radio6: '0',
        radio7: '0',
        radio8: '0',
        radio9: '0',
        radio10: '0',
        gameovershow: 0,
        // disabledinput1: false,
        // disabledinput2: false,
        // disabledinput3: false,
        // disabledinput4: false,
        // disabledinput5: false,
        // disabledinput6: false,
        disabledbutton: false,
      questionnumber: '10',
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
      question6: '',
      question7: '',
      question8: '',
      question9: '',
      question10: '',
      ownanswer1:'',
      ownanswer2:'',
      ownanswer3:'',
      ownanswer4:'',
      ownanswer5:'',
      ownanswer6:'',
      ownanswer7:'',
      ownanswer8:'',
      ownanswer9:'',
      ownanswer10:'',
      testuid:'',
    }
  },
  methods: {
    //   answer1() {
    //       console.log(this.radio);
    //       if(this.radio1==1) {
    //           this.ownanswer1 = this.question11;
    //       } else if(this.radio1 ==2 ) {
    //           this.ownanswer1 = this.question12;
    //       } else if(this.radio1 == 3) {
    //           this.ownanswer1 = this.question13;
    //       } else if(this.radio1 == 4) {
    //           this.ownanswer1 = this.question14;
    //       }
    //       let data = new FormData();
    //       data.append("answer", this.ownanswer1);
    //     axios.post("http://124.70.206.207/contest/checkAnswer0")
    //     .then(res=>{
    //         console.log(res);
    //     })
    //   },
      jumpresult() {
          console.log(this.radio1);
          console.log(this.radio2);
          console.log(this.radio3);
          console.log(this.radio4);
          console.log(this.radio5);
          console.log(this.radio6);
          console.log(this.radio7);
          console.log(this.radio8);
          console.log(this.radio9);
          console.log(this.radio10);
          if(this.radio1==1) {
              this.ownanswer1 = this.question11;
          } else if(this.radio1 ==2 ) {
              this.ownanswer1 = this.question12;
          } else if(this.radio1 == 3) {
              this.ownanswer1 = this.question13;
          } else if(this.radio1 == 4) {
              this.ownanswer1 = this.question14;
          }
          if(this.radio2==1) {
              this.ownanswer2 = this.question21;
          } else if(this.radio2 ==2 ) {
              this.ownanswer2 = this.question22;
          } else if(this.radio2 == 3) {
              this.ownanswer2 = this.question23;
          } else if(this.radio2 == 4) {
              this.ownanswer2 = this.question24;
          }
          if(this.radio3==1) {
              this.ownanswer3 = this.question31;
          } else if(this.radio3 ==2 ) {
              this.ownanswer3 = this.question32;
          } else if(this.radio3 == 3) {
              this.ownanswer3 = this.question33;
          } else if(this.radio3 == 4) {
              this.ownanswer3 = this.question34;
          }
          if(this.radio4==1) {
              this.ownanswer4 = this.question41;
          } else if(this.radio4 ==2 ) {
              this.ownanswer4 = this.question42;
          } else if(this.radio4 == 3) {
              this.ownanswer4 = this.question43;
          } else if(this.radio4 == 4) {
              this.ownanswer4 = this.question44;
          }
          
          if(this.radio5==1) {
              this.ownanswer5 = this.question51;
          } else if(this.radio5 ==2 ) {
              this.ownanswer5 = this.question52;
          } else if(this.radio5 == 3) {
              this.ownanswer5 = this.question53;
          } else if(this.radio5 == 4) {
              this.ownanswer5 = this.question54;
          }
          if(this.radio6==1) {
              this.ownanswer6 = this.question61;
          } else if(this.radio6 ==2 ) {
              this.ownanswer6 = this.question62;
          } else if(this.radio6 == 3) {
              this.ownanswer6 = this.question63;
          } else if(this.radio6 == 4) {
              this.ownanswer6 = this.question64;
          }
          
          if(this.radio7==1) {
              this.ownanswer7 = this.question71;
          } else if(this.radio7 ==2 ) {
              this.ownanswer7 = this.question72;
          } else if(this.radio7 == 3) {
              this.ownanswer7 = this.question73;
          } else if(this.radio7 == 4) {
              this.ownanswer7 = this.question74;
          }

          if(this.radio8==1) {
              this.ownanswer8 = this.question81;
          } else if(this.radio8 ==2 ) {
              this.ownanswer8 = this.question82;
          } else if(this.radio8 == 3) {
              this.ownanswer8 = this.question83;
          } else if(this.radio8 == 4) {
              this.ownanswer8 = this.question84;
          }

          if(this.radio9==1) {
              this.ownanswer9 = this.question91;
          } else if(this.radio9 ==2 ) {
              this.ownanswer9 = this.question92;
          } else if(this.radio9 == 3) {
              this.ownanswer9 = this.question93;
          } else if(this.radio9 == 4) {
              this.ownanswer9 = this.question94;
          }

          if(this.radio10==1) {
              this.ownanswer10 = this.question101;
          } else if(this.radio10 ==2 ) {
              this.ownanswer10 = this.question102;
          } else if(this.radio10 == 3) {
              this.ownanswer10 = this.question103;
          } else if(this.radio10 == 4) {
              this.ownanswer10 = this.question104;
          }
          let data = new FormData();
          this.testuid = this.$cookies.get('uid');//获取cookie，返回 value
          data.append("uid",this.testuid);
          data.append("answer0", this.ownanswer1);
          data.append("answer1", this.ownanswer2);
          data.append("answer2", this.ownanswer3);
          data.append("answer3", this.ownanswer4);
          data.append("answer4", this.ownanswer5);
          data.append("answer5", this.ownanswer6);
          data.append("answer6", this.ownanswer7);
          data.append("answer7", this.ownanswer8);
          data.append("answer8", this.ownanswer9);
          data.append("answer9", this.ownanswer10);
          console.log(data);
        axios.post("http://124.70.206.207/contest/checkAnswer0",data)
        .then(res=>{
            console.log(res);
            this.$router.push({ name: 'gameresult1',query:{scores:res.data.score} });
        })


            
        //   this.$router.push('/gameresult1');
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
        axios.post("http://124.70.206.207/contest/getQuestion0")
        .then(res=>{
            console.log(res);
            this.question11 = res.data.selection[0];
            this.question12 = res.data.selection[1];
            this.question13 = res.data.selection[2];
            this.question14 = res.data.selection[3];
            this.question1 = res.data.url;
        })
        axios.post("http://124.70.206.207/contest/getQuestion1")
        .then(res=>{
            console.log(res);
            this.question21 = res.data.selection[0];
            this.question22 = res.data.selection[1];
            this.question23 = res.data.selection[2];
            this.question24 = res.data.selection[3];
            this.question2 = res.data.url;
        })
        axios.post("http://124.70.206.207/contest/getQuestion2")
        .then(res=>{
            console.log(res);
            this.question31 = res.data.selection[0];
            this.question32 = res.data.selection[1];
            this.question33 = res.data.selection[2];
            this.question34 = res.data.selection[3];
            this.question3 = res.data.url;
        })
        axios.post("http://124.70.206.207/contest/getQuestion3")
        .then(res=>{
            console.log(res);
            this.question41 = res.data.selection[0];
            this.question42 = res.data.selection[1];
            this.question43 = res.data.selection[2];
            this.question44 = res.data.selection[3];
            this.question4 = res.data.url;
        })
        axios.post("http://124.70.206.207/contest/getQuestion4")
        .then(res=>{
            console.log(res);
            this.question51 = res.data.selection[0];
            this.question52 = res.data.selection[1];
            this.question53 = res.data.selection[2];
            this.question54 = res.data.selection[3];
            this.question5 = res.data.url;
        })
        axios.post("http://124.70.206.207/contest/getQuestion5")
        .then(res=>{
            console.log(res);
            this.question61 = res.data.selection[0];
            this.question62 = res.data.selection[1];
            this.question63 = res.data.selection[2];
            this.question64 = res.data.selection[3];
            this.question6 = res.data.url;
        })
        axios.post("http://124.70.206.207/contest/getQuestion6")
        .then(res=>{
            console.log(res);
            this.question71 = res.data.selection[0];
            this.question72 = res.data.selection[1];
            this.question73 = res.data.selection[2];
            this.question74 = res.data.selection[3];
            this.question7 = res.data.url;
        })
        axios.post("http://124.70.206.207/contest/getQuestion7")
        .then(res=>{
            console.log(res);
            this.question81 = res.data.selection[0];
            this.question82 = res.data.selection[1];
            this.question83 = res.data.selection[2];
            this.question84 = res.data.selection[3];
            this.question8 = res.data.url;
        })
        axios.post("http://124.70.206.207/contest/getQuestion8")
        .then(res=>{
            console.log(res);
            this.question91 = res.data.selection[0];
            this.question92 = res.data.selection[1];
            this.question93 = res.data.selection[2];
            this.question94 = res.data.selection[3];
            this.question9 = res.data.url;
        })
        axios.post("http://124.70.206.207/contest/getQuestion9")
        .then(res=>{
            console.log(res);
            this.question101 = res.data.selection[0];
            this.question102 = res.data.selection[1];
            this.question103 = res.data.selection[2];
            this.question104 = res.data.selection[3];
            this.question10 = res.data.url;
        })
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
