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
                <div class="username">
                    用户姓名：{{username}}
                </div>
                <div class="sexy">
                    性别：{{sexychoice}}
                </div>
                <div class="connect">
                    联系方式：电话号码：{{phonenumber}}
                    邮箱：{{email}}
                </div>
            </el-tab-pane>
            <el-tab-pane label="账号管理">
                <div class="passwordbutton">
                    <p>修改密码</p>
                    <p style="color:#777777;font-size:16px;">设置复杂密码更能保护您的账号安全</p>
                </div>
                <div class="passwordbutton" id="changekeybutton">
                    <span class="edit-btn" @click="changekey">修改</span>
                    <div class="changebox">
                        <div class="boxhead">
                            <p class="closebox">修改密码</p><div class="closebox" id="closebutton"></div>
                        </div>
                        <el-divider></el-divider>
                        <div>
                            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="年龄" prop="age">
    <el-input v-model.number="ruleForm.age"></el-input>
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
                    <span class="edit-btn" @click="changekey">注销</span>
                </div>
                <el-divider></el-divider>
            </el-tab-pane>
            <el-tab-pane label="我的记录">角色管理</el-tab-pane>
        </el-tabs>
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
    height: 974px;
}
.closebox{
    display: inline-block;
    vertical-align: top;
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
    padding-left: 10px;
    width: 500px;
    height: 500px;
    position: absolute;
    margin-top:0px;
    margin-left: -550px;
    background: rgb(255, 216, 216);
    z-index: 999;
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
    background: rgb(219, 151, 52);
    border-radius: 20px;
    width: 90px;
    height: 32px;
    text-align: center;
    line-height: 32px;
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
    margin-left: 3%;
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
export default {
  name: "Usercontrol",
  components: {
    Header,
    Footer,
  },
  data(){
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
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
          username: "lxt",
          sexychoice: "女",
          phonenumber:"123456789",
          email: "123321@163.com",
          ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      }
  },
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      changekey(){

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
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>