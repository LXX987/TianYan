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

  },
  mounted(){

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
