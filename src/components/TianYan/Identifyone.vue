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
        <el-button type="primary" @click="backbefore" icon="el-icon-back" id="back" round>返回</el-button>
        <div class="identifybody">
            <br><br>
            <div class="upload">
                <div>
                <img style="width:300px;height:300px;margin-left:300px;border-radius: 10px;" id="img1" src alt />
                </div>
                <el-button icon="el-icon-upload">上传图片
                <input type="file" ref="file2" name="check_img_url" @change="tirggerFile($event)" />
                </el-button>
            </div>
            <el-divider></el-divider>
            <div class="introcontent">
                <h3>{{plantname}}</h3>
                <p>{{plantcontent}}</p>
                <!-- <img src="../../assets/honor.png"> -->
                <h4 @click="open">您觉得本次识别效果怎么样呢？</h4>
            </div>
            <div class="block" v-show="estimateview">
                <div id="closebutton" @click="closekey">×</div>
                        <h5 style="margin-top: 5px;">请为本次识别结果准确度打分，以帮助我们更好的改进产品，谢谢您的参与!</h5>
                      <el-slider v-model="value1" :step="1" :max="5"></el-slider>
                      <el-button @click="commitbutton" style="margin: 5px 120px;">确认</el-button>
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
#closebutton{
    width: 20px;
    height: 20px;
    font-size: 25px;
    /* background: url('../../assets/close.png') no-repeat;
    background-size: 100% 100%; */
    margin-top: -5px;
    margin-left: 360px;
}
.block {
    position: absolute;
    border-radius: 4px;
    background-color: white;
    border: 2px solid #49866a4b;
    margin-top: -200px;
    padding: 20px 40px;
    width: 40%;
    margin-left: 170px;
    z-index: 999;
}
.block .el-slider {
    margin-top: 10px;
    width:300px;
}
.identifybody .introcontent h4{
    margin-left: 280px;
    text-decoration:underline;
    color: black;
    font-size: 15px;
}
.identifybody .introcontent h4:hover{
    color: darkgreen;
}
.identifybody .introcontent img{
    width: 25%;
    height: 40%;
    margin-left: 610px;
    margin-top: 65px;
}
.identifybody .introcontent h3{
    margin: 20px 30px;
    font-size: 25px;
}
.identifybody .introcontent p{
    margin: 20px 30px;
    font-size: 18px;
}
.identifybody .introcontent {
    border: 1px solid #dbdde4d2;
    width: 90%;
    height: 400px;
    margin-left: 45px;
    margin-top: 40px;
}
.identifybody .el-divider--horizontal {
    width: 80%;
    margin: 24px 88px;
}
.identifybody {
    background-color: #FFF;
    width: 70%;
    height: 970px;
    margin-left: 180px;
      border-radius: 4px;
  border: 1px solid #EBEEF5;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.upload .el-button {
    color: white;
    width: 14%;
    height: 44px;
    margin-left: 390px;
    margin-top: 20px;
    font-size: 23px;
    box-shadow: rgb(173, 126, 60) 2px 2px;
    font-family: cursive;
    background-color: rgb(228, 167, 80);
    border-color: rgb(228, 167, 80);
    padding: 12px 0px;
}
.upload .el-button:focus, .el-button:hover {
    background: rgb(222, 160, 38);
    border-color: rgb(222, 160, 38);
    color: #FFF;
    box-shadow: rgb(187, 132, 23) 3px 3px;
    font-weight: bold;
}
.upload .el-button.is-active, .el-button:active {
    background: rgb(222, 160, 38);
    border-color: rgb(222, 160, 38);
    color: #FFF;
    box-shadow: rgb(187, 132, 23) 3px 3px;
}
.upload input {
    position: absolute;
    opacity: 0;
    left: 560px;
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
.body{
    overflow-x: hidden;
    margin: 0px;
    height: 1354px;
}
.slow #back {
    margin-top: 0px;
}
.slow{
    width:1280px;
    height: 1050px;
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
import axios from 'axios'
export default {
  name: "identifyone",
  components: {
    Header,
    Footer,
  },
  data() {
      return {
          picid:-1,
        //   filetest:'',
        estimateview: 0,
        value1: 0,
        plantname: '',
        plantcontent: ''
      }
  },
  mounted() {
      document.getElementById("img1").src = require('../../assets/kongtupian.png')
  },
   methods: {
       backbefore() {
           this.$router.push('/identify');
       },
       tirggerFile(event) {
                var file = event.target.files;
                console.log(file)
                var filetest = file[0];
                  var reader = new FileReader();//读取文件
                  console.log(reader);
                reader.readAsDataURL(file[0]);
                   reader.onload = function() {
                 document.getElementById("img1").src = reader.result;
                 console.log(document.getElementById("img1"));
                 console.log(document.getElementById("img1").src);
                 console.log(filetest)
            };

            let data = new FormData();
           data.append("image", filetest);
           console.log(data);
           axios.post("http://124.70.206.207/contest/identify", data)
           .then(res=>{
               console.log(res);
               this.plantname = res.data.category;
               this.plantcontent = res.data.description;
               this.picid = res.data.id;
            })

       },
       open() {
        this.estimateview = 1;
        console.log(this.estimateview);
      },
      closekey() {
          this.estimateview = 0;
          console.log(this.estimateview);
      },
      commitbutton() {
          this.estimateview = 0;
          console.log(this.value1);
            let data = new FormData();
           data.append("id", this.picid);
           data.append("mark", this.value1);
           console.log(data);
           axios.post("http://124.70.206.207/contest/mark", data)
           .then(res=>{
               console.log(res);
            })


          this.$notify({
          title: '成功',
          message: '感谢您的打分！',
          type: 'success'
        });
      }
    }
}
</script>