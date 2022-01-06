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
        <div class="multigamebody">
            <div class="vs_body">
                <div class="headpic" id="pic1" style="margin-left: 104px;margin-top: 109px;"><img id="headpic1" :src = "headpic1" /></div>
                <div class="headpic" id="pic2" style="margin-left: 390px;margin-top: 109px;"><img id="headpic2" :src = "headpic2" /></div>
                <i v-show="loadingshow" class="el-icon-loading"></i>
            </div>
            <el-progress :percentage=loading color="green"></el-progress>
        </div>
        <Footer/>
    </div>
</template>
<style scoped>
.el-icon-loading {
    position: absolute;
    left: 855px;
    top: 350px;
}
/* .headpic #pic1 {
    margin-left: 50px;
} */
#headpic1 {
    width: 100px;
    height: 100px;
}
#headpic2 {
    width: 100px;
    height: 100px;
}
.headpic {
    display: inline-block;
    vertical-align: top;
    width: 100px;
    height: 100px;
    /* border: 2px solid #555555; */
    border-radius: 50%;
    /* background-color: #003a1f; */
}
.vs_body {
    width:800px;
    height: 350px;
    margin-left: 17%;
    margin-top: 40px;
    /* border: #003a1f 3px ; */
    /* background-color: #003a1f; */
    background: url('../../assets/loadingpic.png') no-repeat;
    background-size: 100% 100%;
}
.el-progress {
    width: 50%;
    /* margin-top: 20px;
    margin-left: 27%; */
    height: 20px;
    position: absolute;
    left: 24%;
    top: 85%;
}
.multigamebody {
    /* width: 200px; */
    height: 186px;
    margin-bottom: 200px;
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
.body{
    overflow-x: hidden;
    margin: 0px;
    height: 649px;
    background-color: #fff6e6;
}
.el-button.is-round{
    padding: 6px 11px;
}
#word{
    position:absolute;
}
#pic{
    height: 80px;
}
.el-button--primary:focus, .el-button--primary:hover {
    background: rgb(222, 160, 38);
    border-color: rgb(222, 160, 38);
    color: #FFF;
    box-shadow: rgb(187, 132, 23) 3px 3px;
    font-weight: bold;
}
#head-img{
    position:absolute;
    margin-left:800px;
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
.el-message-box{
    border-radius: 10px;
}
</style>
<script>
import Header from './Header'
import Footer from './Footer'
export default {
    name: "multigame",
    components: {
    Header,
    Footer,
  },
  data() {
    return {
        headpic1: 'https://s2.loli.net/2022/01/06/TN4VmgL9i5pXdRq.png',
        headpic2: 'https://s2.loli.net/2022/01/06/ghxNeYjOwc3v97K.png',
        input: '',
        gamename: '请输入姓名',
        show_pattern_block: 0,
        loading: 10,
        loadingshow: 1
    //   currentstatus: "loading"
    }
  },
    methods: {
        format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
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
            this.$router.push('/vs1');
        }
        //清除定时器
        if(progressnuw>=100){
            clearInterval(timer);
        }
        //获取重新赋值
        this.loading=progressnuw;
        // format(100);
        },30)
        
        
    }

}
</script>