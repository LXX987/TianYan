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
        <div class="identifybord" id="bord1"></div>
        <div class="identifybord" id="bord2"></div>
        <div class="identifybord" id="bord3"></div>
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
    height: 754px;
}
.identifybord{
    display: inline-block;
    vertical-align: top;
}
.slow #bord1{
    width: 350px;
    height: 400px;
    background-color: blanchedalmond;
    margin-left: 50px;
    margin-top: 20px;
    border-radius: 10px;
}
.slow #bord2{
    width: 350px;
    height: 400px;
    background-color: blanchedalmond;
    margin-left: 50px;
    margin-top: 20px;
    border-radius: 10px;
}
.slow #bord3{
    width: 350px;
    height: 400px;
    background-color: blanchedalmond;
    margin-left: 50px;
    margin-top: 20px;
    border-radius: 10px;
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
   methods: {
    }
}
</script>