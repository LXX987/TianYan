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
          <h style="font-size:45px;margin-left:100px;">5</h>
        </el-card>
        <el-card class="box-card3" style="background-color: #ffee58">
          <i class="el-icon-bottom" style="font-size:50px;margin-top:20px;"></i>
          <h style="font-size:45px;margin-left:100px;">1</h>
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
import axios from 'axios'
export default {
  name: 'AccuracyCount',
  components:{Header,AdminSidebar},
  methods:{
    drawNumber(){

            axios.post("http://124.70.206.207/contest/getIdentifyMark")
            .then(res=>{
                console.log(res);
                let number=this.$echarts.init(document.getElementById('number'))
      number.setOption({
        title:{text:'不同作物的识别评分',left:'center'},
        tooltip:{},
        xAxis:{
          data:[res.data.data[0].name,res.data.data[1].name,res.data.data[2].name,res.data.data[3].name,res.data.data[4].name]
        },
        yAxis:{
        },
        series:[{
          name:'类型',
          type:'bar',
          barWidth:'50%',
          data:[
            {value:res.data.data[0].mark,itemStyle:{color:'#4db6ac'}},
            {value:res.data.data[1].mark,itemStyle:{color:'#d32f2f'}},
            {value:res.data.data[2].mark,itemStyle:{color:'#7b1fa2'}},
            {value:res.data.data[3].mark,itemStyle:{color:'#ffa000'}},
            {value:res.data.data[4].mark,itemStyle:{color:'#ffd600'}}
          ]
        }]
      })
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
              { value: 5, name: '较差(0~2)' },
              { value: 8, name: '一般(3)' },
              { value: 20, name: '良好(4~5)' }
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
