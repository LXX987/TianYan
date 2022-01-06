<template>
  <el-container>
    <Header/>
    <el-container>
      <AdminSidebar/>
      <el-main>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from './Header'
import AdminSidebar from './AdminSidebar'
export default {
  name: 'TrainData',
  components:{Header,AdminSidebar},
  methods:{
  },
  data(){
    return {
      input:'',
    }
  }
}
</script>
<style scoped>

</style>
