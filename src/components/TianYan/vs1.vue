<template>
    <div class="body">
        <Header/>
        <div class="identify-intro">
            <div class="heading" style="display:inline-block;" id="word">
                <h>在线对抗</h>
            </div>
            <div class="heading" style="display:inline-block;" id="head-img">
                <img src="../../assets/identify_head.png" id="pic">
            </div>
        </div>
        <div class="multigamebody">
            
        </div>
        <Footer/>
    </div>
</template>
<style>
.multigamebody {
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
    name: "vs1",
    components: {
    Header,
    Footer,
  },
  data() {
    return {
        input: '',
        gamename: '请输入姓名',
        show_pattern_block: 0,
        loading: 10,
        loadingshow: 1
    }
  },
    methods: {
        
    },
    mounted:function() {
        
    }

}
</script>