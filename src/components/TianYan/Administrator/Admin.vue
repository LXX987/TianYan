<template>
  <el-container>
      <Header/>
      <AdminSidebar/>
      <el-main>
        <div class="usertext">
          <h3>用户管理</h3>
        </div>
        <div class="search">
          <el-button type="primary" icon="el-icon-plus" style="width:90px" id="add" @click="addnewuser">添加</el-button>
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
                      <el-button @click="handleClick(scope.row)" icon="el-icon-edit" size="small" type="primary" >编辑</el-button>
                      <el-button icon="el-icon-delete" size="small" type="danger" @click="deleteRow(scope.$index,tableData)">删除</el-button>
                  </template>
              </el-table-column>
            </el-table>
        </div>

        <el-dialog
          title="添加用户"
          :visible.sync="showadduser"
          width="50%"
          >
          <el-form
            :model="adduser"
            :rules="addnewuserRules"
            label-width="80px">
            <el-form-item label="ID" prop="id">
              <el-input v-model="adduser.id"></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="name">
              <el-input v-model="adduser.name"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="adduser.email"></el-input>
            </el-form-item>
            <el-form-item label="得分" prop="score">
              <el-input v-model="adduser.score"></el-input>
            </el-form-item>
            <el-form-item label="是否为管理员" prop="or">
              <el-input v-model="adduser.or"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialoguefooter">
                  <el-button type="primary" icon="el-icon-check" @click="clickaddyes">确定</el-button>
                  <el-button type="danger" icon="el-icon-close" @click="clickaddno">取消</el-button>
                </span>
        </el-dialog>

        <el-dialog
          title="修改用户"
          :visible.sync="showedituser"
          width="50%"
        >
          <el-form
            :model="edituser"
            label-width="80px">
            <el-form-item label="ID" prop="id">
              <el-input v-model="edituser.id"></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="name">
              <el-input v-model="edituser.name"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="edituser.email"></el-input>
            </el-form-item>
            <el-form-item label="得分" prop="score">
              <el-input v-model="edituser.score"></el-input>
            </el-form-item>
            <el-form-item label="是否为管理员" prop="or">
              <el-input v-model="edituser.or"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialoguefooter">
                  <el-button type="primary" icon="el-icon-check" @click="clickedityes">确定</el-button>
                  <el-button type="danger" icon="el-icon-close" @click="clickeditno">取消</el-button>
                </span>
        </el-dialog>

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
            this.showedituser=!this.showedituser;
        },
      addnewuser(){
          this.showadduser=!this.showadduser;
      },
      clickaddyes(){
          this.showadduser=!this.showadduser;
      },
      clickaddno(){
          this.showadduser=!this.showadduser;
      },
      edituser(){
          this.showedituser=!this.showedituser();
      },
      clickedityes(){
          this.showedituser=!this.showedituser;
      },
      clickeditno(){
          this.showedituser=!this.showedituser;
      },
      deleteRow(index,rows){
          rows.splice(index,1);
      }


    },
    data(){
        return {
          input:'',
          showadduser:false,
          showedituser:false,
          adduser:{
            id:'',
            name:'',
            email:'',
            score:'',
            or:''
          },
          edituser:{
            id:'4',
            name:'test',
            email:'123456@qq.com',
            score:'550',
            or:'否'
          },
          addnewuserRules:{
            id:[
              {required:true,message:'请输入ID',trigger:'blur'},
            ],
            name:[
              {required:true,message:'请输入昵称',trigger:'blur'},
            ],
            email:[
              {required:true,message:'请输入邮箱',trigger:'blur'},
            ],
            score:[
              {required:true,message:'请输入得分',trigger:'blur'},
            ],
            or:[
              {required:true,message:'是否为管理员',trigger:'blur'},
            ],
          },
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
    top:0px;
}
.table{
    position:absolute;
    left:300px;
    top:250px;
}

</style>
