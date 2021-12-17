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
        <el-button type="primary" @click="backgameone" icon="el-icon-back" id="back" round>返回</el-button>
        <!-- <div class="content" id="left"></div>
        <div class="content" id="right"></div> -->
        <div class="uploadcontent">
            <h3 style="font-size:30px;font-family:emoji;color:rgb(30,83,53);text-align:center;margin-bottom:10px;">介绍</h3>
            <h4 style="font-size:18px;color:rgb(54,140,91);text-align:center;margin:5px;">上传题目</h4>
            <el-divider></el-divider>
            <p>为了进一步优化系统，提升用户平台使用满意度和参与感，我们推出用户上传问题入口。</p>
            <p>您可以通过下面的输入框输入您认为有趣的农业识别知识问题（含答案），我们在审核后将存入题库，丰富我</p>
            <p>们的农作物识别题库,</p>
            <p>让更多人的人可以看到有趣的，独特的农作物识别游戏题目。</p>
            <p>一起帮助我们共同打造更好的农业识别平台，传播知识，感受自然的魅力</p>
        </div>
        <div class="uploadquestionbody">
            <div class="questionheading">
                <p style="font-size:20px;font-weight:bold;margin-left:20px;color:red;display:inline-block;vertical-align:top;">*</p><p style="font-size:18px;margin-left:10px;display:inline-block;vertical-align:top;">问题题目</p>
                <el-input v-model="input1" placeholder="请输入题目内容"></el-input>
            </div>
            <div class="questionpicture">
                <p style="font-size:20px;font-weight:bold;margin-left:20px;color:red;display:inline-block;vertical-align:top;">*</p><p style="font-size:18px;margin-left:10px;display:inline-block;vertical-align:top;">问题图片</p>
                <el-button id="uploadpicbutton" icon="el-icon-upload">上传图片
                <input type="file" ref="file2" name="check_img_url" @change="tirggerFile($event)" />
                </el-button>
                <div>
                <img style="width:300px;height:300px;margin-left:300px;border-radius: 10px;" id="img1" src alt />
                </div>
            </div>
            <div class="questionanswer">
                <p style="font-size:20px;font-weight:bold;margin-left:20px;color:red;display:inline-block;vertical-align:top;">*</p><p style="font-size:18px;margin-left:10px;display:inline-block;vertical-align:top;">问题答案</p>
                <el-input v-model="input2" placeholder="请输入题目答案"></el-input>
            </div>
            <div class="questioreason">
                <p style="font-size:20px;font-weight:bold;margin-left:20px;color:red;display:inline-block;vertical-align:top;">*</p><p style="font-size:18px;margin-left:10px;display:inline-block;vertical-align:top;">题目特点</p>
                <el-input type="textarea" :rows="2" placeholder="请输入您认为题目与什么特点" v-model="textarea1"></el-input>
            </div>
            <div class="questionote">
                <p style="font-size:20px;font-weight:bold;margin-left:20px;color:red;display:inline-block;vertical-align:top;">*</p><p style="font-size:18px;margin-left:10px;display:inline-block;vertical-align:top;">题目备注</p>
                <el-input type="textarea" :rows="2" placeholder="请输入您的备注" v-model="textarea2"></el-input>
            </div>
            <div class="uploadconfirm">
                <el-button id="confirmbutton" @click="openprompt">上传</el-button>
            </div>
            <div class="prompt" v-show="promptview">
                <div id="closebutton" @click="closekey">×</div>
                <el-descriptions title="题目信息">
                    <el-descriptions-item label="问题题目">{{questionname}}</el-descriptions-item>
                    <el-descriptions-item label="问题答案">{{answer}}</el-descriptions-item>
                    <el-descriptions-item label="题目特点">{{characteristic}}</el-descriptions-item>
                    <el-descriptions-item label="题目备注">{{promptcontent}}</el-descriptions-item>
                    <el-descriptions-item label="图片状态">
                        <el-tag size="small">已上传</el-tag>
                    </el-descriptions-item>
                </el-descriptions>
                <el-button @click="confirm">确认提交</el-button>
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
.el-descriptions-item__label:not(.is-bordered-label) {
    margin-right: 10px;
    margin-left: 40px;
}
.prompt .el-button {
    margin-left: 345px;
    margin-top: 10px;
}
.prompt #closebutton {
    margin-left: 730px;
    margin-top: 20px;
}
.el-descriptions__title {
    margin-top: 0px;
    margin-left: 350px;
    font-size: 20px;
}
.prompt {
    position: absolute;
    height: 230px;
    width: 60%;
    margin-top: -360px;
    background-color: #ffffff;
    margin-left: 60px;
    border: 1px solid rgb(132, 156, 86);
    border-radius: 10px;
}
.uploadconfirm .el-button{
    margin-left: 380px;
    width: 140px;
    margin-top: 60px;
    margin-bottom: 20px;
    font-size: 18px;
    font-family: cursive;
    border-radius: 10px;
}
.questionote .el-textarea {
    width: 80%;
    margin-left: -20px;
    margin-top: 60px;
}
.questioreason .el-textarea {
    width: 80%;
    margin-left: -20px;
    margin-top: 60px;
}
.questionanswer .el-input {
    width: 80%;
    margin-left: -20px;
    margin-top: 60px;
}
.questionpicture .el-button:focus, .el-button:hover {
    color: #ffffff;
    border-color: #d8e7d2;
    background-color: #b6d4a5;
    font-weight: bold;
    /* font-size: 30px; */
}
.questionpicture #uploadpicbutton {
    margin-left: 260px;
    width: 140px;
    margin-top: 60px;
    margin-bottom: 20px;
    font-size: 18px;
    font-family: cursive;
    border-radius: 10px;
}
.questionpicture input {
    position: absolute;
    opacity: 0;
    left: 590px;
}
.questionheading .el-input {
    width: 80%;
    margin-left: -20px;
    margin-top: 60px;
}
.uploadquestionbody {
    width: 900px;
    height: 1000px;
    border: 1px solid rgb(132, 156, 86);
    border-radius: 10px;
    margin-left: 180px;
    margin-top: 15px;
    /* box-shadow: inset 0px 8px 20px 0 rgb(239 225 204); */
}
.uploadcontent .el-divider--horizontal {
    width: 80%;
    margin: 13px 90px;
}
.uploadcontent p{
    margin: 5px 10px;
    text-align: center;
    font-family: cursive;
    font-size: 20px;
}
.content {
    display: inline-block;
    vertical-align: top;
}
.uploadcontent {
    width: 900px;
    height: 300px;
    border: 1px solid rgb(132, 156, 86);
    border-radius: 10px;
    margin-left: 180px;
    /* box-shadow: inset 0px 8px 20px 0 rgb(239 225 204); */
}
/* .slow #left {
    width: 200px;
    height: 50px;
    border: 1px solid rgb(54,140,91);
}
.slow #right {
    width: 200px;
    height: 50px;
    border: 1px solid rgb(54,140,91);
} */
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
    height: 1754px;
}
.slow #back {
    margin-top: 0px;
}
.slow{
    width:1280px;
    height: 1450px;
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
  name: "Uploadone",
  components: {
    Header,
    Footer,
  },
  data() {
      return {
          input1: '',
          input2: '',
          input3: '',
          textarea2: '',
          textarea1: '',
          promptview: 0,
          questionname: '',
          answer: '',
          characteristic: '',
          promptcontent: ''
      }
  },
  mounted() {
  },
   methods: {
       backgameone() {
           this.$router.push('/game1');
       },
       tirggerFile(event) {
                var file = event.target.files;
                  var reader = new FileReader();//读取文件
                reader.readAsDataURL(file[0]);
                   reader.onload = function() {
                 document.getElementById("img1").src = reader.result;
            };
       },
       closekey() {
           this.promptview = 0;
       },
       openprompt() {
           this.promptview = 1;
           this.questionname = this.input1;
           this.answer = this.input2;
           this.characteristic = this.textarea1;
           this.promptcontent = this.textarea2;
       },
       confirm() {
           this.promptview = 0;
           this.$notify({
               title: '成功',
               message: '已成功上传，等待审核',
               type: 'success',
               showClose: false,
               duration: 1000
            });
       }
    }
}
</script>