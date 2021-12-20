<template>
    <div class="menupart">
        <el-aside>
            <el-row class="tac">
                <div class="icontext">
                    <i class="el-icon-location" style="font-size:25px;display:inline-block"></i>
                    <span style="font-size:25px">工作台</span>
                </div>    
                <el-col :span="18">
                    <el-menu
                    :default-active="this.$route.path"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    router
                    >
                    <el-menu-item index="/admin">
                        <i class="el-icon-location"></i>
                        <span style="margin-left:-10px">用户信息管理</span>
                    </el-menu-item>    

                    <el-menu-item index="/traindata">
                        <i class="el-icon-location"></i>
                        <span style="margin-left:-10px">训练数据管理</span>    
                    </el-menu-item>

                    <el-menu-item index="/knowledge">
                        <i class="el-icon-location"></i>
                        <span style="margin-left:-10px;">科普知识管理</span>
                    </el-menu-item>

                    <el-menu-item index="/check">
                        <i class="el-icon-location"></i>
                        <span style="margin-left:-10px;">问题审核</span>
                    </el-menu-item>

                    <el-menu-item index="/dealfeedback">
                        <i class="el-icon-location"></i>
                        <span style="margin-left:-10px;">反馈处理</span>
                    </el-menu-item>
                    
                    <el-submenu>
                        <template slot="title">
                            <i class="el-icon-s-data" style="font-size:20px;"></i>
                            <span style="font-size:20px;margin-left:-10px;">数据统计</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="/identifycount">识别统计</el-menu-item>
                            <el-menu-item index="accuracycount">反馈准确度</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    </el-menu>
                </el-col>
            </el-row>
        </el-aside>
    </div>
</template>

<script>
export default{
  name: 'AdminSidebar',
  data () {
    return {
        
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
    height:40px;
    left:0px;
    float:left;
    margin-left:50px;
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