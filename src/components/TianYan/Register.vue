<template>
<div class="loginbody">
    <div class="backgroundblock">
        <div class="body">
            <div class="a">
                <div class="b"></div>
                <div class="c">
                    <div class="d">
                        <h1>注册账号</h1>
                        <input type="text" class="e" v-model="useremail" placeholder="请输注册户邮箱">
                        <input type="password" class="e" v-model="password" placeholder="请输入密码">
                        <input type="emailcode" class="p" v-model="emailcode" placeholder="邮箱验证码">
                        <el-button class="button" @click="countDown">
                            {{content}}
                        </el-button>
                        <input type="code" class="p" v-model="inputcode" placeholder="验证码"><img id="codema" @click="changecode" :src="code"/>
                        <!-- <a href="#" @click="registernewuser" class="f" style="color:black;margin-left:55px;">注册新用户</a><a href="#" class="f" style="color:black;">忘记密码</a> -->
                        <a href="#" class="g" @click="login">注册</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style>
.el-button:active {
    color: #67c23a;
    border-color: #67c23a70;
    outline: 0;
}
.el-button:focus, .el-button:hover {
    color: #67c23a;
    border-color: #67c23a70;
    background-color: #67c23a12;
}
.el-button {
    width: 48%;
    margin-left: 0px;
    padding: 13px 6px;
    font-size: 10px;
}
        body{
            /* 设置背景渐变 */
            background-image: linear-gradient(to left,
            #35e23e,#9ddf34);
            display: flex;
            justify-content: center;
        }
        .a{
            position:relative;
            top: 60px;
            width: 700px;
            height: 370px;
            box-shadow: 0 5px 15px rgba(0,0,0,.8);
            display: flex;
            margin-left: 22%;
            margin-top: 6%;
        }
        .b{
            width: 450px;
            height: 370px;
            background-image: url("../../assets/register.jpg");
            /* 让图片适应大小 */
            background-size: cover;
        }
        .c{
            width: 250px;
            height: 370px;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .d{
            width: 200px;
            height: 300px;
        }
        .d h1{
            font: 550 30px '';
            color: black;
            margin-top: -16px;
            margin-bottom: 5px;
        }
        .e{
            width: 150px;
            margin: 10px 0;
            outline: none;
            border: 0;
            padding: 10px;
            border-bottom: 3px solid rgb(80, 170, 136);
            font: 550 14px '';
        }
        .p{
            width: 70px;
            margin: 10px 0;
            outline: none;
            border: 0;
            padding: 10px;
            border-bottom: 3px solid rgb(80, 170, 136);
            font: 550 14px '';
        }
        .f{
            float: right;
            margin: 0px 0;
            margin-top: 0px;
        }
        .g{
            position: absolute;
            margin: 12px;
            margin-top: 0px;
            margin-left: 20px;
            bottom: 0px;
            display: block;
            width: 130px;
            height: 45px;
            font: 600 25px '';
            text-decoration: none;
            line-height: 45px;
            border-radius: 30px;
            background-image: linear-gradient(to left,
            #35e23e,#9ddf34);
            text-align: center;
            color: #ffffff;
        }
.backgroundblock{
    overflow: hidden;
    width: 1280px;
    height: 609px;
    background-color: beige;
    background-size: 100% 100%;
    margin-top: 0px;
}
.loginblock{
    width: 520px;
    height: 380px;
    border-radius: 15px;
    background-color: #ffffff80;
    margin-left: 30%;
    margin-top: 90px;
}
.loginblock h1{
    color: #368c5b;
    font-size: 24px;
    text-align: center;
}
.headbar{
    width: 1280px;
    height: 70px;
    background-color: #368c5b;
}
#logoword{
    margin-left: 15px;
}
.logo{
    display: inline-block;
    vertical-align: top;
}
.logo img{
    width: 40px;
    height: 40px;
    margin-top: 15px;
    margin-left: 15px;
}
.logo h{
    color:white;
    font-size:40px;
    line-height: 70px;
}
#codema{
    width: 75px;
    height: 40px;
    background-color: blanchedalmond;
    margin-left: 25px;
}
</style>
<script>
import axios from 'axios'
export default {
    name: 'register',
    data() {
        return{
            emailcode: '',
            code: '',
            codehash: '',
            useremail: '',
            password: '',
            inputcode: '',
            userid: '',
            content: '发送验证码',
            totalTime: 5,
            canClick: true //添加canClick
        }
    },
    methods: {
        countDown () {
            if (!this.canClick) return  //改动的是这两行代码
                this.canClick = false
                this.content = this.totalTime + 's后重新发送'
                let clock = window.setInterval(() => {
                    this.totalTime--
                    this.content = this.totalTime + 's后重新发送'
                    if (this.totalTime < 0) {
                        window.clearInterval(clock)
                        this.content = '重新发送验证码'
                        this.totalTime = 10
                     this.canClick = true  //这里重新开启
                    }
                },1000)
            },
        changecode() {
            this.$axios.post("http://124.70.206.207/utils/generateCaptcha", {
            }).then( res=> {
                console.log (res)
                this.code = 'http://124.70.206.207/' + res.data.image_url
                this.codehash = res.data.hashkey
                console.log(this.code)
            })
        },
        login() {
            let data = new FormData();
            data.append("email", this.useremail);
            data.append("captcha_input", this.inputcode);
            data.append("password", this.password);
            data.append("captcha_hashkey", this.codehash);
            console.log(data);
            axios.post("http://124.70.206.207/register/checkAccount", data)
            .then(res=>{
                console.log(res);
                this.userid = res.data.uid;
                // console.log(this.userid);
                if(res.data.code == 0) {
                    // this.$router.push('/home');
                    this.$router.push({ name: 'login',params:{ids:this.userid} });
                    // this.$options.methods.jumphome(this.userid);
                }
            })
        },
    }
}
</script>