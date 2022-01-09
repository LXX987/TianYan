<template>
  <el-container>
      <Header/>
      <AdminSidebar/>
      <el-main>
        <div class="usertext">
          <h3>用户管理</h3>
        </div>
        <div class="search">
          <el-input v-model="input" placeholder="请输入内容" style="width:170px"></el-input>
          <el-button type="primary" icon="el-icon-search" style="width:90px">搜索</el-button>
          <el-button type="primary" icon="el-icon-plus" style="width:90px" id="add">添加</el-button>
        </div>
        <div class="table">
            <el-table
              :data="tableData"
              border
              style="width:100%"
              height="450"
              >
              <el-table-column
                  prop="id"
                  label="ID"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="name"
                  label="昵称"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="email"
                  label="邮箱"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="score"
                  label="游戏积分"
                  width="140">
              </el-table-column>
              <el-table-column
                  prop="or"
                  label="是否为管理员"
                  width="140">
              </el-table-column>
              <el-table-column
                  label="操作"
                  width="200">
                  <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" icon="el-icon-edit" size="small" type="primary">编辑</el-button>
                      <el-button icon="el-icon-delete" size="small" type="danger">删除</el-button>
                  </template>
              </el-table-column>
            </el-table>
        </div>
      </el-main>
    </el-container>
</template>

<script>
import Header from './Header'
import AdminSidebar from './AdminSidebar'
export default {
    name: 'Admin',
    components:{Header,AdminSidebar},
    methods:{
        handleOpen(key,keyPath){
            console.log(key,keyPath);
        },
        handleClose(key,keyPath){
            console.log(key,keyPath);
        },
        handleClick(row){
            console.log(row);
        }
    },
    data(){
        return {
            input:'',
            tableData:[{
                id:'4',
                name:'test',
                email:'123456@qq.com',
                score:'550',
                or:'否'
            },{
                id:'7',
                name:'lxt',
                email:'lxt@163.com',
                score:'130',
                or:'否'
            },{
                id:'2',
                name:'1128',
                email:'2372@126.com',
                score:'340',
                or:'否'
            },{
                id:'21',
                name:'小小',
                email:'56383ff@qq.com',
                score:'80',
                or:'否'
            },{
                id:'12',
                name:'lll',
                email:'hfj@748.com',
                score:'110',
                or:'否'
            },{
                id:'43',
                name:'yffiffff',
                email:'758449huu@ls.com',
                score:'20',
                or:'否'
            },{
                id:'328',
                name:'yrr',
                email:'yfu844@jd3.com',
                score:'470',
                or:'否'
            },{
                id:'19',
                name:'7494j',
                email:'84dcn@eir.com',
                score:'290',
                or:'否'
            },{
                id:'28',
                name:'hfj9',
                email:'s6dyf@ie3.com',
                score:'290',
                or:'否'
            },{
                id:'223',
                name:'83j',
                email:'8djd32@do.com',
                score:'260',
                or:'否'
            }]
        }
    }
}
</script>


<style scoped>
.usertext{
    position:absolute;
    left:300px;
    top:100px;
}
.search{
    position:absolute;
    left:300px;
    top:170px;
}
.search #add{
    position:absolute;
    left:935px;
    top:0px;
}
.table{
    position:absolute;
    left:300px;
    top:250px;
}

</style>
