<template>
  <div class="body">
    <Header/>
    <div class="identify-intro">
        <div class="heading" style="display:inline-block;" id="word">
            <h>用户中心</h>
        </div>
        <div class="heading" style="display:inline-block;" id="head-img">
            <img src="../../assets/identify_head.png" id="pic">
        </div>
    </div>
    <div class="tian"></div>
    <div class="slow">
        <el-tabs type="border-card">
            <el-tab-pane label="个人信息">
              <div class="ownerinfro" id="owner_img">
                <img :src="userInfo.avatar"/>
                <el-button id="edituserimg" @click.stop="uploadHeadImg">编辑头像</el-button>
                     <input type="file" accept="image/*" style="display: none" @change="handleFile" class="hiddenInput"/>
              </div>
              <div class="ownerinfro" id="owner_word">
              <h2>基本信息</h2>
                <div class="username">
                    <p class="userinformationblock">用户姓名:</p>
                    <p class="userinformationblock">{{username}}</p>
                </div>
                <div class="sexy">
                    <p class="userinformationblock">性别:</p>
                    <!-- <p class="userinformationblock">{{sexychoice}}</p> -->
                    <div class="userinformationblock" id="sexyradiochoose">
                    <label class="sexychoose">
                      <input type="radio" name="gender" value="MALE">男
                    </label>
                    <label class="sexychoose">
                      <input type="radio" name="gender" value="FEMALE" checked="checked">女
                    </label>
                    </div>
                </div>
                <h2>联系方式:</h2>
                <div class="connect">
                    <p class="userinformationblock">邮箱:</p>
                    <p class="userinformationblock" id="kuangkuang1">{{email}}</p>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="账号管理" style="height:600px;">
                <div class="passwordbutton">
                    <p>修改密码</p>
                    <p style="color:#777777;font-size:16px;">设置复杂密码更能保护您的账号安全</p>
                </div>
                <div class="passwordbutton" id="changekeybutton">
                    <!-- <span class="edit-btn" @click="changekey">修改</span> -->
                    <el-button type="text" class="edit-btn" @click="changekey">修改</el-button>
                    <div class="changebox" v-show="popup">
                        <div class="boxhead">
                          <p class="closebox">修改密码</p><div class="closebox" id="closebutton" @click="closekey"></div>
                        </div>
                        <el-divider></el-divider>
                        <div>
                          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
                            <el-form-item label="原密码" prop="oldpass">
                              <el-input type="password" v-model="ruleForm.oldpass" autocomplete="off" style="width:80%;"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="pass">
                              <el-input type="password" v-model="ruleForm.pass" autocomplete="off" style="width:80%;"></el-input>
                            </el-form-item>
                            <el-form-item label="确认密码" prop="checkPass">
                              <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" style="width:80%;"></el-input>
                            </el-form-item>
                            <el-form-item>
                              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                              <el-button @click="resetForm('ruleForm')">重置</el-button>
                            </el-form-item>
                          </el-form>
                        </div>
                    </div>
                </div>
                <el-divider></el-divider>
                <div class="logout">
                    <p>账号注销</p>
                    <p style="color:#777777;font-size:16px;">为保证您的账号安全，需要满足相应的条件，才能提交注销申请</p>
                </div>
                <div class="logout" id="logoutbutton">
                    <el-button type="text" class="edit-btn" @click="open">注销</el-button>
                </div>
                <el-divider></el-divider>
            </el-tab-pane>
            <el-tab-pane label="我的记录">
            </el-tab-pane>
        </el-tabs>
    </div>
    <div class="tian"></div>
    <div class="footer">
    <Footer/>
    </div>
  </div>
</template>
<style>
#owner_img img{
  height: 80px;
  width: 80px;
}
.body{
    overflow-x: hidden;
    margin: 0px;
    height: 974px;
}
.username{
  width: 400px;
}
.userinformationblock{
  display: inline-block;
  vertical-align: top;
}
.ownerinfro{
  display: inline-block;
  vertical-align: top;
}
#edituserimg{
  margin-top: 150px;
  margin-left: -10px;
}
#sexyradiochoose{
  margin-top: 17px;
}
#owner_img{
  background: url('../../assets/user.png') no-repeat center 0;
  background-color: #E4E7ED;
  background-size: 100% 100%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-left: 70px;
  margin-top: 50px;
}
#owner_word{
  margin-left: 160px;
  margin-top: 20px;
}
#kuangkuang1{
  border-style:solid;
  border-width:1px;
  border-radius: 10px;
  width: 280px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
}
.closelogoutbox{
  margin-top: 25px;
  display: inline-block;
  vertical-align: top;
}
.logoutbox .el-divider--horizontal {
  margin: 5px 0;
}
.logoutbox{
  background-color: rgb(255, 255, 255);
  position: absolute;
  width: 35%;
  top:160px;
  left:250px;
  padding-left: 30px;
  padding-right: 30px;
  /* z-index: 999; */
  border-color: #368c5b;
  border-style:solid;
  border-width:1px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.closebox{
  display: inline-block;
  vertical-align: top;
}
#closelogoutbutton{
  background: url('../../assets/close.png') no-repeat;
  background-size: 100% 100%;
  width: 22px;
  height: 22px;
  margin-left: 194px;
  margin-top: 16px;
}
#closebutton{
    width: 20px;
    height: 20px;
    background: url('../../assets/close.png') no-repeat;
    background-size: 100% 100%;
    margin-top: 10px;
    margin-left: 410px;
}
.changebox{
    padding-left: 20px;
    width: 500px;
    height: 400px;
    position: absolute;
    margin-top:0px;
    margin-left: -550px;
    background: rgb(255, 255, 255);
    z-index: 999;
    border-color: #368c5b;
    border-style:solid;
    border-width:1px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
#changekeybutton{
    margin-left: 300px;
}
#logoutbutton{
    margin-left: 108px;
}
#head-img{
    position:absolute;
    margin-left:800px;
}
#word{
    position:absolute;
}
.edit-btn {
    line-height: 6px;
    background: rgb(219, 151, 52);
    border-radius: 20px;
    width: 90px;
    height: 32px;
    text-align: center;
    display: inline-block;
    color: #fff;
    cursor: pointer;
    margin-top: 22px;
}
.logout{
    margin-left: 20px;
    display: inline-block;
    vertical-align:top;
}
.logout span {
    font-size: 20px;
    font-family: cursive;
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
.el-button{
    margin:20px 30px;
    box-shadow: rgb(173, 126, 60) 2px 2px;
    font-family: cursive;
    font-size: 20px;
    color: #ffffff;
    background-color: rgb(228, 167, 80);
    border-color: rgb(228, 167, 80);
}
.passwordbutton{
    margin-left: 20px;
    display: inline-block;
    vertical-align:top;
}
.passwordbutton span {
    font-size: 20px;
    font-family: cursive;
}
.el-tabs__item:hover {
    color: #368c5b;
    cursor: pointer;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color: #368c5b;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item:not(.is-disabled):hover {
    color: #368c5b;
}
.el-tabs--border-card {
    width: 60%;
    margin-left: 19%;
    height: 550px;
}
.el-tabs__item {
    height: 59px;
    line-height: 59px;
    font-size:medium;
}
.el-tabs__nav {
    height: 60px;
}
#pic{
    height: 80px;
}
.tian{
    width:1280ps;
    height: 40px;
    background-color: #fff6e6;
}
.slow{
    width:1280px;
    height: 670px;
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
  name: "usercontrol",
  components: {
    Header,
    Footer,
  },
  data(){
      var validateoldPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入原密码'));
        } else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return{
            userInfo: {
      avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20190203%2F53463928a43447f78a4ff616bd86dbf7.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1641135214&t=876527eda6f954bb21ebb63790b74ea9'
    },
          id: '',
          popup: 0,
          logoutview: 0,
          username: "lxt123456",
          phonenumber:"123456789",
          email: "123321@163.com",
          ruleForm: {
          oldpass: '',
          pass: '',
          checkPass: '',
        },
        rules: {
          oldpass: [
            { validator: validateoldPass, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      }
  },
  mounted:function() {
    console.log(this.$route.params.ids);
  },
   methods: {
         uploadHeadImg: function () {
      this.$el.querySelector('.hiddenInput').click()
    },
    // 将头像显示
    handleFile: function (e) {
      let $target = e.target || e.srcElement
      let file = $target.files[0]
      var reader = new FileReader()
      reader.onload = (data) => {
        let res = data.target || data.srcElement
        this.userInfo.avatar = res.result
      }
      reader.readAsDataURL(file)
    },
     open() {
        this.$confirm('此操作将永久注销账户, 是否继续?', '提示', {
          cancelButtonText: '取消',
          confirmButtonText: '确定',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      changekey(){
        this.popup = 1;
      },
      logbutton(){
        this.logoutview = 1;
      },
      closekey(){
        this.popup = 0;
      },
      closelogout(){
        this.logoutview = 0;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        console.log(this.ruleForm.oldpass);
        console.log(this.ruleForm.pass);
        let data = new FormData();
        data.append("uid", this.id);
        data.append("old_password", this.ruleForm.oldpass);
        data.append("new_password", this.ruleForm.pass);
        console.log(data);
        axios.post("http://124.70.206.207/login/updatePassword", data)
        .then(res=>{
            console.log(res);
            console.log(res.data.code);
            if(res.data.code == 1){
              alert('旧密码和账号原密码一致');
            }
            else if(res.data.code == 0){
              alert('修改成功！');
            }
        })

      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>