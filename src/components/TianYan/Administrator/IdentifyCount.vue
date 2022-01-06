<template>
  <el-container>
    <Header/>
    <el-container>
      <AdminSidebar/>
      <el-main>
        <el-card class="box-card1" style="background-color:#4fc3f7">
          <i class="el-icon-user" style="font-size:50px;margin-top:20px;"></i>
          <h style="font-size:45px;margin-left:100px;">11</h>
        </el-card>
        <el-card class="box-card2" style="background-color: #26c6da">
          <i class="el-icon-zoom-in" style="font-size:50px;margin-top:20px;"></i>
          <h style="font-size:45px;margin-left:100px;">11</h>
        </el-card>
        <el-card class="box-card3" style="background-color: #ffee58">
          <i class="el-icon-s-comment" style="font-size:50px;margin-top:20px;"></i>
          <h style="font-size:45px;margin-left:100px;">11</h>
        </el-card>
        <el-card class="boxcard4">
          <div id="threepercent" style="width:700px;height:400px;"></div>
        </el-card>
        <el-card class="boxcard5">
          <div id="identifynumber" style="width:360px;height:420px;"></div>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from './Header'
import AdminSidebar from './AdminSidebar'
export default {
  name: 'IdentifyCount',
  components:{Header,AdminSidebar},
  methods:{
    drawThreePercent(){
      const data1=[
        {
          name:'茄子',
          value:11
        },
        {
          name:'大豆',
          value:22
        },
        {
          name:'土豆',
          value:33
        },
        {
          name:'玉米',
          value:44
        }
      ];
      const data2=[
        {
          name:'茄子',
          value:11,
        },
        {
          name:'大豆',
          value:22
        },
        {
          name:'土豆',
          value:33
        },
        {
          name:'玉米',
          value:44
        }
      ];
      const data3=[
        {
          name:'茄子',
          value:11
        },
        {
          name:'大豆',
          value:22
        },
        {
          name:'土豆',
          value:33
        },
        {
          name:'玉米',
          value:44
        }
      ];
      let threepercent=this.$echarts.init(document.getElementById('threepercent'))
      threepercent.setOption({
        title:[
          {
            text:'不同准确度下不同作物反馈的数量',
            left:'center',
            top:'4%'
          },
          {
            subtext:'低准确度(0~40%)',
            left:"16.67%",
            textAlign:'center',
            top:'75%'
          },
          {
            subtext:"中准确度(41%~60%)",
            left:"50%",
            textAlign:'center',
            top:'75%'
          },
          {
            subtext:"高准确度(61%~100%)",
            left:"83.33%",
            textAlign:'center',
            top:'75%'
          }
        ],
        tooltip:{
          trigger:'item'
        },
        legend:{
          orient:'vertical',
          left:'left',
          top:'12%'
        },
        series:[
          {
            type:'pie',
            radius:'45%',
            center:['50%','50%'],
            left:0,
            right:'66.6667%',
            top:'15%',
            bottom:0,
            data:data1
          },
          {
            type:'pie',
            radius:'45%',
            center:['50%','50%'],
            left:'33.3333%',
            right:'33.3333%',
            top:'15%',
            bottom:0,
            data:data2
          },
          {
            type:'pie',
            radius:'45%',
            center:['50%','50%'],
            left:'66.6667%',
            right:0,
            top:'15%',
            bottom:0,
            data:data3
          }
        ]
      })
    },
    drawIdentifyNumber(){
      let identifynumber=this.$echarts.init(document.getElementById('identifynumber'))
      identifynumber.setOption({
        title: {
          text: '不同农作物的识别次数',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          top:'7%'
        },
        series: [
          {
            name: '农作物',
            type: 'pie',
            radius: '50%',
            top:'11%',
            data: [
              { value: 580, name: '大豆',itemStyle:{color:'#0277bd'}},
              { value: 484, name: '西红柿' },
              { value: 300, name: '土豆' },
              {value:220,name:'茄子',itemStyle:{color:'#e64a19'}}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    }
  },
  mounted(){
    this.drawThreePercent();
    this.drawIdentifyNumber();
  },
  data(){
    return {
      input:'',
    }
  },
}
</script>
<style scoped>
.box-card1{
  position:absolute;
  width:300px;
  left:300px;
  top:120px;
  height:120px;
}
.box-card2{
  position:absolute;
  width:300px;
  left:700px;
  top:120px;
  height:120px;
}
.box-card3{
  position:absolute;
  width:300px;
  left:1100px;
  top:120px;
  height:120px;
}
.boxcard4{
  position:absolute;
  width:750px;
  height:410px;
  top:280px;
  left:300px;
}
.boxcard5{
  position:absolute;
  width:400px;
  height:410px;
  left:1100px;
  top:280px;
}
#identifynumber{
  margin-left:20px;
  margin-top:20px;
}
</style>
