<template>
  <el-container>
    <Header/>
    <el-container>
      <AdminSidebar/>
      <el-main>
        <el-card class="box-card1">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
        <el-card class="box-card2">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
        <el-card class="box-card3">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
        <div id="myChart" style="width:400px;height:400px;"></div>
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
    drawLine(){
      let myChart=this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        title:{text:'使用echarts'},
        tooltip:{},
        xAxis:{
          data:["沉沙灰姑娘","lndsg","lwneg"]
        },
        yAxis:{},
        series:[{
          name:'xiang',
          type:'bar',
          data:[1,2,3]
        }]
      });
    }
  },
  mounted(){
    this.drawLine();
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
}
.box-card2{
  position:absolute;
  width:300px;
  left:700px;
  top:120px;
}
.box-card3{
  position:absolute;
  width:300px;
  left:1100px;
  top:120px;
}
</style>
