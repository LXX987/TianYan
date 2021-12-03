<template>
    <div class="layout" style="overflow-x:hidden;">
      <Header/>
      <div class="main">
        <div class="main-head">
          <div class="suibian" style="height:0.01pt;"></div>
        <ul class="wordlist">
          <br>
          <li>趣味农作物科普识别系统</li>
          <li>学习农作物知识</li>
          <li>感受自然魅力</li>
          <li>开启探索未知的旅程吧~</li>
          <br>
          <li style="background-color: #0064009e;width:200px;border-radius:10px;;height:70px;line-height:70px;margin-left:37%"><a href="http://www.baidu.com" id="enter" style="text-decoration:none;">进入</a></li>
          <br>
        </ul>
        </div>
        <div class="main-body">
          <div class="section-body">
            <div class="section" style="color:rgb(64,35,0); font-size:30px;">
              <img src="../../assets/section1.png" style="width:50px;height:50px;float:left;margin-top: 5px;">
              <div class="section-word">
                identity
                <div class="section_buttom">
                  <a href="http://www.baidu.com" style="font-size:15px;line-height: 20px;text-decoration:none">identify your pictures</a>
                </div>
              </div>
            </div>
            <div class="section" style="color:rgb(64,35,0); font-size:30px;">
              <img src="../../assets/section2.png" style="width:50px;height:50px;float:left;margin-top: 5px;margin-left: 5px;">
              <div class="section-word">
                game
                <div class="section_buttom">
                  <a href="http://www.baidu.com" style="font-size:19px;line-height: 20px;text-decoration:none">start funny games</a>
                </div>
              </div>
            </div>
            <div class="section" style="color:rgb(64,35,0); font-size:30px;">
              <img src="../../assets/section3.png" style="width:50px;height:50px;float:left;margin-top: 5px;margin-left: 5px;">
              <div class="section-word">
                feedback
                <div class="section_buttom">
                  <a href="http://www.baidu.com" style="font-size:18px;line-height: 20px;text-decoration:none">give valuable advice</a>
                </div>
              </div>
            </div>
          </div>
          <br>
          <div class="main-introduction">
            <p style="font-size:35px;margin-left:11%;">
              <br>
              Document Scanning & Document Imaging
            </p>
            <p style="font-size:18px;margin-left:11%;width:80%">
              Reap the rewards of going paperless. Pioneer Records Management provides Document Scanning, Document Imaging, Document Management, and Document Storage services for a wide range of businesses and organizations throughout Florida, including Orlando, Tampa, and Daytona Beach. Contact Pioneer Records Management today to learn how your business can start benefiting from a paper-free workplace.
            </p>
            <p style="font-size:35px;margin-left:11%;">
              Our Services & Products
            </p>
            <div class="product-word">
              <div class="product">
                <p>Document Scanning and Imaging</p>
                <p style="font-size:15px;">We utilize the very latest Document Imaging Technology and Software and Document Scanning equipment, to provide our customers with proven, cost effective solutions to their Document Storage challenges.</p>
                <a href="http://www.baidu.com" style="color:white;text-decoration:none;" id="intro-buttom">identity</a>
              </div>
              <div class="product">
                <p>Document Management</p>
                <p style="font-size:15px;">With Enterprise Content Management services from Pioneer Records Management, you can turn your paper documents into searchable, instantly accessible information, that is ready when you need it.</p>
                <a href="http://www.baidu.com" style="color:white;text-decoration:none;" id="intro-buttom">game</a>
              </div>
            </div>
            <div class="pronext">
              <p>Secure Destruction</p>
              <p style="font-size:15px;">Pioneer offers a variety of destruction services. Whether it is a one time purge of documents to help you take back control of your space, or an ongoing scheduled pick up, Pioneer will customize a plan to fit your needs.</p>
              <a href="http://www.baidu.com" style="color:white;text-decoration:none;" id="intro-buttom">feedback</a>
            </div>
          </div>
        </div>
      </div>
      <div class="foot">
        Copyright © 2021 TianYan. All rights reserved.
      </div>
    </div>
</template>
<style>
.a{ 
  color: white; 
} 
a:link { color:#fff; text-decoration:underline; }
a:active { color:white; text-decoration:none; }
a:visited { color:white;text-decoration:none; }
a:hover{ color:white;text-decoration:none;font-weight:bold; }
#background{
    width: 100%;
    height: 32%;
    left: 0px;
    top: auto;
    z-index: 0;
    opacity:0.5;
}
#intro-buttom{
  background-color: #c08026;
  text-shadow: 1px 1px 1px #724d1a;
  font-size: 19px;
  padding: 6px 10px;
  border-radius: 5px;
}
.wordlist{
  border-radius: 10px;
  list-style: none;
  font-size: 40px;
  font-family: cursive;
  color: rgb(255 255 255);
  margin-left: 18%;
  text-shadow: 5px 2px 6px #000;
  width: 800px;
  height: auto;
  background-color:#fff6e670;
  text-align: center;
  padding-inline-start: 0px;
}
#enter{
  width: 200px;
  height: 50px;
  
}
.main-introduction{
  width: 100%;
  background-color: #ffeecf50;
  height: 785px;
  box-shadow: inset 0px 8px 20px 0 rgb(239 225 204);
}
.product{
  display:inline-block;
  width: 35%;
  margin-left:11%;
  font-size:23px;
}
.pronext{
  display:inline-block;
  width: 35%;
  margin-left:11%;
  font-size:23px;
}
.nav-menu{
  width: 50%;
  height: 50px;
  list-style: none;
  position:absolute;
  padding-inline-start: 0px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 4;
  left: 50%;
}
.page
{
  display:inline;
  width: 10px;
  height: 15px;
  margin: 0px;
  padding: 0px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 20px;
  
}
.gamepage{
  width: 20px;
}
.headerlogo{
  display: inline;
  height: 50px;
}
.layout{
  width:100%;
  height: 100%;
  position:absolute;
  top:0px;
  left:0px;
}
.head{
  width: 100%;
  height: 13%;
  background-color:#368c5b;
}
.main{
  width: 100%;
  height: 230%;
  background-color:#fff6e6;
  margin-top: 79px;
}
.main-head{
  background: url('../../assets/1.png') no-repeat;
  background-size: 100% 100%;
  width: 100%;
    height: 32%;
    left: 0px;
    top: auto;
    z-index: 0;
    margin-top: 40px;
}
.section-word{
      height: 100px;
    width: 200px;
    margin-left: 70px;
}
.section_buttom{
  margin-top: 5px;
      width: 180px;
  font-family: "Open Sans",'Trebuchet MS', Helvetica, sans-serif;
  padding: 7px 10px;
  font-weight: bold;
  color: #fff;
  background: #607249 url(https://pioneerrmanage.wpengine.com/wp-content/uploads/2018/10/calbt.gif) repeat-x top left;
  border-radius: 5px;
text-decoration: none;
text-align: center;
line-height: 20px;
text-shadow: #232a1b 1px 1px 1px;
}
.main-body{
  width: 100%;
  height: 400px;
  text-align: left;
}
.section-body{
  display:inline-block;
  margin: 0 auto;
  width: 1000px;
  margin-top: 30px;
  margin-left: 12%;
}
.section{
  width:290px;
  display: inline-block;
  background-color: rgb(248, 233, 212);
  border-radius: 4px;
  box-shadow:inset 0 0 5px 5px rgb(231, 218, 197);
  margin-left: 20px;
  height: 100px;
  font-style: oblique;
}
.foot{
  width: 100%;
  height: 11%;
  background-color:#368c5b;
  text-align: center;
  color: white;
  line-height: 400%;
}
#logo{
  width: 40px;
  height: 40px;
  margin-top: 15px;
  margin-left: 15px;
}
div#userid {
  margin-left: 975px;
}
#user{
  width: 40px;
  height: 40px;
  margin-top: 15px;
  margin-right: 15px;
}
</style>
<script>
import Header from './Header'
export default {
    name: "Home",
    components: {
      Header,
    }
}
</script>