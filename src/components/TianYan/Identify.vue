<template>
  <div class="body">
    <Header/>
    <div class="identify-intro">
        <div class="heading" style="display:inline-block;" id="word">
            <h>趣味科普</h>
        </div>
        <div class="heading" style="display:inline-block;" id="head-img">
            <img src="../../assets/identify_head.png" id="pic">
        </div>
    </div>
    <div class="tian"></div>
    <div class="slow">
        <div class="identifybord" id="bord1" v-show="showbox1">
            <div class="intro1">
                <div class="head1">
                    <p class="idetitle" id="identifyname">农业世界</p>
                    <img class="idetitle" @click="closeimg1" id="enterimg" src="../../assets/enter.png">
                    <div class="idecontent">
                        <p><span>目标识别农作物种类，</span></p>
                        <p><span>精确识别，</span></p>
                        <p><span>科普知识，</span></p>
                        <p><span>用户上传一张自己的农作物照片，</span></p>
                        <p><span>通过系统分析，</span></p>
                        <p><span>即可展示识别结果的对相应科普信息。</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="identifybord" id="bord11" v-show="showbord1">
            <p class="idetitle" id="identifyname" style="margin-left:40px;">农业世界</p>
            <img class="idetitle" @click="changeimg1" id="enterimg" src="../../assets/enter.png">
            <el-button type="primary" icon="el-icon-s-promotion" id="begin" @click="enteronepage" round>进入</el-button>
        </div>
        <div class="identifybord" id="bord2" v-show="showbox2">
            <div class="intro2">
                <div class="head2">
                    <p class="idetitle" id="identifyname">科普基地</p>
                    <img class="idetitle" @click="closeimg2" id="enterimg" src="../../assets/enter.png">
                    <div class="idecontent">
                        <p><span>目标识别农作物生长阶段，</span></p>
                        <p><span>科普不同农作物生长知识</span></p>
                        <p><span>用户上传一张自己的农作物照片，</span></p>
                        <p><span>通过系统分析，</span></p>
                        <p><span>即可展示识别结果的对相应科普信息。</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="identifybord" id="bord22" v-show="showbord2">
            <p class="idetitle" id="identifyname" style="margin-left:40px;">科普基地</p>
            <img class="idetitle" @click="changeimg2" id="enterimg" src="../../assets/enter.png">
            <el-button type="primary" icon="el-icon-s-promotion" id="begin" @click="entertwopage" round>进入</el-button>
        </div>
        <div class="identifybord" id="bord3" v-show="showbox3">
            <div class="intro3">
                <div class="head3">
                    <p class="idetitle" id="identifyname">农学学堂</p>
                    <img class="idetitle" @click="closeimg3" id="enterimg" src="../../assets/enter.png">
                    <div class="idecontent">
                        <p><span>目标识别农作物健康程度，</span></p>
                        <p><span>提供相关的分析介绍和改善意见</span></p>
                        <p><span>用户上传一张自己的农作物照片，</span></p>
                        <p><span>通过系统分析，</span></p>
                        <p><span>即可展示识别结果的对相应科普信息。</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="identifybord" id="bord33" v-show="showbord3">
            <p class="idetitle" id="identifyname" style="margin-left:40px;">农学学堂</p>
            <img class="idetitle" @click="changeimg3" id="enterimg" src="../../assets/enter.png">
            <el-button type="primary" icon="el-icon-s-promotion" id="begin" @click="enterthreepage" round>进入</el-button>
        </div>
    </div>
    <div class="tian"></div>
    <div class="footer">
    <Footer/>
    </div>
  </div>
</template>
<style>
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
    font-family: "华文新魏 Bold", "华文新魏 Regular", "华文新魏", sans-serif;
    font-size: 25px;
    background-color: rgb(228, 167, 80);
    border-color: rgb(228, 167, 80);
}
.body{
    overflow-x: hidden;
    margin: 0px;
    height: 754px;
}
.identifybord .el-button {
    margin-left: 105px;
    margin-top: 200px;
}
.identifybord .idecontent p {
    font-family: "华文新魏", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 26px;
    text-align: left;
    margin: 5px 0px;
}
.identifybord .idecontent {
    width: 270px;
    height: 260px;
    background-color: whitesmoke;
    border-radius: 20px;
    padding: 10px 10px;
    margin-left: -10px;
    margin-top: -15px;
}
.identifybord .head3,.head2,.head1 {
    margin-left: 40px;
}
.identifybord .idetitle {
    display: inline-block;
    vertical-align: top;
}
.identifybord #enterimg {
    width: 40px;
    height: 40px;
    margin: 28px 0px;
    margin-left: 100px;
}
.identifybord #identifyname{
    color: #268C4B;
    font-family: "华文新魏 Bold", "华文新魏 Regular", "华文新魏", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size: 33px;
}
.identifybord{
    display: inline-block;
    vertical-align: top;
}
.slow #bord11{
    width: 350px;
    height: 400px;
    background: url('../../assets/identify1.png') no-repeat;
    background-size: 105% 105%;
    margin-left: 50px;
    margin-top: 20px;
    border-radius: 50px;
}
.slow #bord1{
    width: 350px;
    height: 400px;
    background: url('../../assets/identify4.png') no-repeat;
    background-size: 105% 105%;
    margin-left: 50px;
    margin-top: 20px;
    border-radius: 50px;
}
.slow #bord22{
    width: 350px;
    height: 400px;
    background: url('../../assets/identify2.png') no-repeat;
    background-size: 105% 105%;
    margin-left: 50px;
    margin-top: 20px;
    border-radius: 50px;
}
.slow #bord2{
    width: 350px;
    height: 400px;
    background: url('../../assets/identify4.png') no-repeat;
    background-size: 105% 105%;
    margin-left: 50px;
    margin-top: 20px;
    border-radius: 50px;
}
.slow #bord33{
    width: 350px;
    height: 400px;
    background: url('../../assets/identify3.png') no-repeat;
    background-size: 105% 105%;
    margin-left: 50px;
    margin-top: 20px;
    border-radius: 50px;
}
.slow #bord3{
    width: 350px;
    height: 400px;
    background: url('../../assets/identify4.png') no-repeat;
    background-size: 105% 105%;
    margin-left: 50px;
    margin-top: 20px;
    border-radius: 50px;
}
.slow{
    width:1280px;
    height: 450px;
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
export default {
  name: "Identify",
  components: {
    Header,
    Footer,
  },
  data() {
      return {
          showbord1: 1,
          showbord2: 1,
          showbord3: 1,
          showbox1: 0,
          showbox2: 0,
          showbox3: 0
      }
  },
  mounted() {
  },
   methods: {
       changeimg1() {
                this.showbox1 = 1;
                this.showbord1 = 0;
                console.log("打开背面");
       },
       closeimg1() {
                this.showbox1 = 0;
                this.showbord1 = 1;
                console.log("关闭背面");
        },
        changeimg2() {
            this.showbox2 = 1;
                this.showbord2 = 0;
                console.log("打开背面");
        },
        closeimg2() {
            this.showbox2 = 0;
                this.showbord2 = 1;
                console.log("关闭背面");
        },
        changeimg3() {
            this.showbox3 = 1;
                this.showbord3 = 0;
                console.log("打开背面");
        },
        closeimg3() {
            this.showbox3 = 0;
                this.showbord3 = 1;
                console.log("关闭背面");
        },
        enteronepage() {
            this.$router.push('/identifyone');
        },
        entertwopage() {
            this.$router.push('/identifytwo');
        },
        enterthreepage() {
            this.$router.push('/identifythree');
        }
    }
}
</script>