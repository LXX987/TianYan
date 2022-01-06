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
          <i class="el-icon-top" style="font-size:50px;margin-top:20px;"></i>
          <h style="font-size:45px;margin-left:100px;">8</h>
        </el-card>
        <el-card class="box-card3" style="background-color: #ffee58">
          <i class="el-icon-bottom" style="font-size:50px;margin-top:20px;"></i>
          <h style="font-size:45px;margin-left:100px;">6</h>
        </el-card>
        <el-card class="boxcard4">
          <div id="number" style="width:700px;height:400px;"></div>
        </el-card>
        <el-card class="boxcard5">
          <div id="proportion" style="width:360px;height:420px;"></div>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from './Header'
import AdminSidebar from './AdminSidebar'
export default {
  name: 'AccuracyCount',
  components:{Header,AdminSidebar},
  methods:{
    drawNumber(){
      let number=this.$echarts.init(document.getElementById('number'))
      number.setOption({
        title:{text:'不同作物的识别评分',left:'center'},
        tooltip:{},
        xAxis:{
          data:["大豆","西红柿","茄子","土豆","玉米"]
        },
        yAxis:{
        },
        series:[{
          name:'类型',
          type:'bar',
          barWidth:'50%',
          data:[
            {value:9,itemStyle:{color:'#4db6ac'}},
            {value:5,itemStyle:{color:'#d32f2f'}},
            {value:2,itemStyle:{color:'#7b1fa2'}},
            {value:6,itemStyle:{color:'#ffa000'}},
            {value:8,itemStyle:{color:'#ffd600'}}
          ]
        }]
      })
    },
    drawPie(){
      let proportion=this.$echarts.init(document.getElementById('proportion'))
      proportion.setOption({
        title: {
          text: '识别评价',
          subtext: 'True Data',
          left: 'center',
          top:0
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          top:'10%'
        },
        series: [
          {
            name: '评价',
            type: 'pie',
            radius: '48%',
            top:'10%',
            data: [
              { value: 580, name: '较差(0~3)' },
              { value: 484, name: '一般(4~6)' },
              { value: 300, name: '良好(7~10)' }
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
    this.drawPie();
    this.drawNumber();
  },
  data(){
    return {
      input:'',
    }
  }
}
</script>
<style scoped>
#myChart{
  position:absolute;
  margin-left:500px;
  margin-top:300px;
}
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
  width:700px;
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
#proportion{
  margin-left:20px;
  margin-top:20px;
}
</style>
