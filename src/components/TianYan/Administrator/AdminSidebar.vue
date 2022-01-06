<template>
    <div class="menupart">
            <el-row class="tac">
                <div class="icontext">
                    <i class="el-icon-location" style="font-size:25px;display:inline-block;margin-left:50px;"></i>
                    <span style="font-size:25px">工作台</span>
                </div>
                <el-col :span="18">
                    <el-menu
                    :default-active="this.$route.path"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#546e7a"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    router
                    style="width:220px;"
                    >
                    <el-menu-item index="/admin">
                        <i class="el-icon-user-solid"></i>
                        <span style="margin-left:-10px">用户信息管理</span>
                    </el-menu-item>

                    <el-menu-item index="/knowledge">
                        <i class="el-icon-s-grid"></i>
                        <span style="margin-left:-10px;">科普知识管理</span>
                    </el-menu-item>

                    <el-menu-item index="/check">
                        <i class="el-icon-circle-check"></i>
                        <span style="margin-left:-10px;">问题审核</span>
                    </el-menu-item>

                    <el-menu-item index="/dealfeedback">
                        <i class="el-icon-finished"></i>
                        <span style="margin-left:-10px;">反馈处理</span>
                    </el-menu-item>

                    <el-submenu>
                        <template slot="title">
                            <i class="el-icon-s-data" style="font-size:20px;"></i>
                            <span style="font-size:20px;margin-left:-10px;">数据统计</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/identifycount">
                              <i class="el-icon-pie-chart"></i>
                              <span style="margin-left:-10px;">识别统计</span>
                            </el-menu-item>
                            <el-menu-item index="/accuracycount">
                              <i class="el-icon-data-analysis"></i>
                              <span style="margin-left:-10px;">评分反馈</span>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    </el-menu>
                </el-col>
            </el-row>
    </div>
</template>

<script>
export default{
  name: 'AdminSidebar',
  data () {
    return {

    }
  },
  methods:{
    handleOpen(key,keyPath){
      console.log(key,keyPath);
    },
    handleClose(key,keyPath){
      console.log(key,keyPath);
    }
  }
}
</script>

<style scoped>
.menupart{
    position:absolute;
    top:80px;
    left:0px;
}
.icontext{
  width:220px;
  height:40px;
  float:left;
  background-color:#00c853;
}
.usertext{
    position:absolute;
    left:300px;
    top:100px;
}
.el-menu-item{
    font-size:20px;
}
</style>
