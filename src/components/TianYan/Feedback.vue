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
            <div class="back"><router-link to="/gameintro" id="routeback" style="text-decoration:none;"><div class="el-icon-back" id="backpage"></div><p id="packpage">返回</p></router-link></div>
            <h2>选择农作物的正确图片</h2>
            <p>题目数：</p><p style="margin-left:55px;font-size:20px;color:rgb(228, 167, 80)">{{questionnumber}}</p><p>说明：</p><p style="margin-left:55px;">依据题目内容，选择对应农作物种类的图片，作答结束，点击提交按钮即可查看结果。</p>
            <el-divider></el-divider>
            <h3>1.【填空题】（2分）</h3>
            <img :src="question1"/>
            <p>请回答：</p><el-input v-model="input1" placeholder="请输入答案"></el-input>
            <el-divider></el-divider>
            <h3>2.【填空题】（2分）</h3>
            <img :src="question2"/>
            <p>请回答：</p><el-input v-model="input2" placeholder="请输入答案"></el-input>
            <el-divider></el-divider>
            <h3>3.【填空题】（2分）</h3>
            <img :src="question3"/>
            <p>请回答：</p><el-input v-model="input3" placeholder="请输入答案"></el-input>
            <el-divider></el-divider>
            <h3>4.【填空题】（2分）</h3>
            <img :src="question4"/>
            <p>请回答：</p><el-input v-model="input4" placeholder="请输入答案"></el-input>
            <el-divider></el-divider>
            <h3>5.【填空题】（2分）</h3>
            <img :src="question5"/>
            <p>请回答：</p><el-input v-model="input5" placeholder="请输入答案"></el-input>
            <el-divider></el-divider>
            <h3>6.【填空题】（2分）</h3>
            <img :src="question6"/>
            <p>请回答：</p><el-input v-model="input6" placeholder="请输入答案"></el-input>
            <el-divider></el-divider>
            <el-button round>提交</el-button>
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
    height: 3374px;
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
    height:3050px;
    background-color: rgb(255, 239, 220);
    margin-left: 90px;
    box-shadow: inset 0px 8px 20px 0 rgb(239 225 204);
    border-radius: 10px;
    padding-top: 30px;
    padding-left: 80px;
    padding-right: 80px;
}
.paper .el-button{
    width:100px;
    height: 40px;
    text-align: center;
    line-height: 20px;
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
.paper p{
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
    height: 3070px;
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
  name: "Feedback",
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
    },
    mounted:function() {
        this.$axios.post("https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=UKHMEldVHVqw0U1B8GtT1hr2&client_secret=XB8ap23BSr933rDy8V4ECjU38w82Dt2p", {

        }).then( res=> {
            console.log(res)
        })
    }
}
</script>