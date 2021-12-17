<template>
<div class="loginbody">
    <!-- <div class="headbar">
        <div class="logo" id="logoimgblock">
            <img id="logoimg" src="../../assets/logo.png">
        </div>
        <div class="logo" id="logoword">
            <h>TianYan</h>
        </div>
    </div> -->
    <div class="backgroundblock">
        <div class="body">
            <div class="a">
                <div class="b"></div>
                <div class="c">
                    <div class="d">
                        <h1>TianYan</h1>
                        <input type="text" class="e" v-model="useremail" placeholder="用户邮箱">
                        <input type="password" class="e" v-model="password" placeholder="密码">
                        <input type="password" class="p" v-model="inputcode" placeholder="验证码"><img id="codema" @click="changecode" :src="code"/>
                        <a href="#" @click="registernewuser" class="f" style="color:black;margin-left:55px;">注册新用户</a><a href="#" class="f" style="color:black;">忘记密码</a>
                        <a href="#" class="g" @click="login">登录</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style>
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
            background-image: url("../../assets/1.jpg");
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
            margin-top: 0px;
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
            width: 50px;
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
            margin: 20px;
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
    /* background: url('../../assets/1.png') no-repeat; */
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
    font-size: 30px;
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
    name: 'Login',
    data() {
        return{
            code: '',
            codehash: '',
            useremail: '',
            password: '',
            inputcode: '',
            userid: ''
        }
    },
    methods: {
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
            axios.post("http://124.70.206.207/login/checkAccount", data)
            .then(res=>{
                console.log(res);
                this.userid = res.data.uid;
                // console.log(this.userid);
                if(res.data.code == 0) {
                    // this.$router.push('/home');
                    this.$router.push({ name: 'Home',params:{ids:this.userid} });
                    // this.$options.methods.jumphome(this.userid);
                }
            })
        },
        registernewuser() {
            console.log("jump");
            this.$router.push('/register');
        },
        // jumphome(id) {
        //     console.log(id);
        //     this.$router.push('/home');
        //     //  this.$router.push({name:'Home', params: { id:this.userid }})
        //     // this.$router.push({ name: 'Home',params:{ids:2} })
        //     // this.$router.push({ name: 'Home',params:{ids:id} })
        // }
    }
}
</script>