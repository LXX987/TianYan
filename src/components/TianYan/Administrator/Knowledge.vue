<template>
  <el-container>
    <Header/>
    <el-container>
      <AdminSidebar/>
      <el-main>
        <div class="knowledge">

          <div class="awcontent">
            <h1 style="margin-left:20px;margin-bottom:-25px;">农业世界</h1>
            <div class="content" v-for="(item,index) in agriculturalworld" :key="index">
              <div class="none">
              </div>
              <br>
              <h style="margin-left:20px;">名称</h>
              <el-input
                type="textarea"
                autosize
                v-model="item.name"
                readonly
                class="input-border"
                style="width:600px;margin-top:5px;margin-left:20px;"
              >
              </el-input>
              <p></p>
              <h style="margin-left:20px;">介绍</h>
              <el-input
                type="textarea"
                autosize
                v-model="item.content"
                readonly
                class="input-border"
                style="width:600px;margin-top:5px;margin-left:20px;"
              >
              </el-input>
              <div class="operate">
                <span style="margin:10px;">
                  <el-button type="primary" icon="el-icon-edit" size="mini" @click="clickchangeaw(item)">修改</el-button>
                </span>
                <span style="margin:10px;">
                  <el-button type="danger" icon="el-icon-check" size="mini" @click="clickconfirm(item)">确认</el-button>
                </span>
              </div>
              <el-dialog
                title="农业世界"
                :visible.sync="item.showawdialogue"
                width="50%"
                @close="editDialogClosed">
                <el-form
                  :model="item"
                  :rules="agriculturalworldRules"
                  ref="agriculturalworldRef"
                  label-width="80px">
                  <el-form-item label="名称" prop="name">
                    <el-input v-model="item.name"></el-input>
                  </el-form-item>
                  <el-form-item label="描述" prop="content">
                    <el-input
                      type="textarea"
                      autosize
                      v-model="item.content">
                    </el-input>
                  </el-form-item>
                </el-form>
                <span slot="footer" class="dialoguefooter">
                  <el-button type="primary" icon="el-icon-check" @click="clickawyes(item)">确定</el-button>
                  <el-button type="danger" icon="el-icon-close" @click="clickawno(item)">取消</el-button>
                </span>
              </el-dialog>
            </div>
            <div class="none">
            </div>
          </div>

          <br>

          <div class="sbcontent">
            <h1 style="margin-left:20px;margin-bottom:-25px;">科普基地</h1>
            <div class="content" v-for="(item,index) in sciencebase" :key="index">
              <div class="none">
              </div>
              <br>
              <h style="margin-left:20px;">名称</h>
              <el-input
                type="textarea"
                autosize
                v-model="item.name"
                readonly
                class="input-border"
                style="width:600px;margin-top:5px;margin-left:20px;"
              >
              </el-input>
              <p></p>
              <h style="margin-left:20px;">介绍</h>
              <el-input
                type="textarea"
                autosize
                v-model="item.content"
                readonly
                class="input-border"
                style="width:600px;margin-top:5px;margin-left:20px;"
              >
              </el-input>
              <div class="operate">
                <span style="margin:10px;">
                  <el-button type="primary" icon="el-icon-edit" size="mini" @click="clickchangesb(item)">修改</el-button>
                </span>
                <span style="margin:10px;">
                  <el-button type="danger" icon="el-icon-check" size="mini" @click="clickconfirm(item)">确认</el-button>
                </span>
              </div>
              <el-dialog
                title="科普基地"
                :visible.sync="item.showsbdialogue"
                width="50%"
                @close="editDialogClosed">
                <el-form
                  :model="item"
                  :rules="sciencebaseRules"
                  ref="sciencebaseRef"
                  label-width="80px">
                  <el-form-item label="名称" prop="name">
                    <el-input v-model="item.name"></el-input>
                  </el-form-item>
                  <el-form-item label="描述" prop="description">
                    <el-input
                      type="textarea"
                      autosize
                      v-model="item.content">
                    </el-input>
                  </el-form-item>
                </el-form>
                <span slot="footer" class="dialoguefooter">
                  <el-button type="primary" icon="el-icon-check" @click="clicksbyes(item)">确定</el-button>
                  <el-button type="danger" icon="el-icon-close" @click="clicksbno(item)">取消</el-button>
                </span>
              </el-dialog>
            </div>
            <div class="none">
            </div>
          </div>

          <br>

          <div class="ascontent">
            <h1 style="margin-left:20px;margin-bottom:-25px;">农学学堂</h1>
            <div class="content" v-for="(item,index) in agriculturalschool" :key="index">
              <div class="none">
              </div>
              <br>
              <h style="margin-left:20px;">名称</h>
              <el-input
                type="textarea"
                autosize
                v-model="item.name"
                readonly
                class="input-border"
                style="width:600px;margin-top:5px;margin-left:20px;"
              >
              </el-input>
              <p></p>
              <h style="margin-left:20px;">介绍</h>
              <el-input
                type="textarea"
                autosize
                v-model="item.content"
                readonly
                class="input-border"
                style="width:600px;margin-top:5px;margin-left:20px;"
              >
              </el-input>
              <div class="operate">
                <span style="margin:10px;">
                  <el-button type="primary" icon="el-icon-edit" size="mini" @click="clickchangeas(item)">修改</el-button>
                </span>
                <span style="margin:10px;">
                  <el-button type="danger" icon="el-icon-check" size="mini" @click="clickconfirm(item)">确认</el-button>
                </span>
              </div>
              <el-dialog
                title="农学学堂"
                :visible.sync="item.showasdialogue"
                width="50%"
                @close="editDialogClosed">
                <el-form
                  :model="item"
                  :rules="agriculturalschoolRules"
                  ref="agriculturalschoolRef"
                  label-width="80px">
                  <el-form-item label="名称" prop="name">
                    <el-input v-model="item.name"></el-input>
                  </el-form-item>
                  <el-form-item label="描述" prop="description">
                    <el-input
                      type="textarea"
                      autosize
                      v-model="item.content">
                    </el-input>
                  </el-form-item>
                </el-form>
                <span slot="footer" class="dialoguefooter">
                  <el-button type="primary" icon="el-icon-check" @click="clickasyes(item)">确定</el-button>
                  <el-button type="danger" icon="el-icon-close" @click="clickasno(item)">取消</el-button>
                </span>
              </el-dialog>
            </div>
            <div class="none">
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from './Header'
import AdminSidebar from './AdminSidebar'
export default {
  name: 'Knowledge',
  components:{Header,AdminSidebar},
  methods:{
    editDialogClosed(){
      this.$refs.agriculturalworldRef.resetFields();
      this.$refs.sciencebaseRef.resetFields();
      this.$refs.agriculturalschoolRef.resetFields();
    },
    clickchangeaw(item){
      item.showawdialogue=true;
    },
    clickawyes(item){
      item.showawdialogue=false;
      this.$refs[item].validate((valid)=>{
        if(valid){
          item.showawdialogue=false;
        }else{
          console.log('error submit!!');
          return false;
        }
      });

    },
    clickawno(item){
      item.showawdialogue=false;
    },

    clickchangesb(item){
      item.showsbdialogue=true;
    },
    clicksbyes(item){
      item.showsbdialogue=false;
    },
    clicksbno(item){
      item.showsbdialogue=false;
    },

    clickchangeas(item){
      item.showasdialogue=true;
    },
    clickasyes(item){
      item.showasdialogue=false;
    },
    clickasno(item){
      item.showasdialogue=false;
    }


  },
  data(){
    return {
      input:'',
      agriculturalworld:[{
        name:'白菜',
        content:'不好吃',
        showawdialogue:false
      },{
        name:'番茄',
        content:'好吃',
        showawdialogue:false
      }],
      sciencebase:[{
        name:'实验',
        content:'是什么',
        showsbdialogue:false
      },{
        name:'仪器',
        content:'是什么',
        showsbdialogue:false
      }],
      agriculturalschool:[{
        name:'果树',
        content:'果实',
        showasdialogue:false
      },{
        name:'仓库',
        content:'储存',
        showasdialogue:false
      }],
      agriculturalworldRules:{
        name:[
          {required:true,message:'请输入名称',trigger:'blur'},
        ],
        content:[
          {required:true,message:'请输入描述',trigger:'blur'},
        ]
      },
      sciencebaseRules:{
        name:[
          {required:true,message:'请输入名称',trigger:'blur'},
        ],
        content:[
          {required:true,message:'请输入描述',trigger:'blur'},
        ]
      },
      agriculturalschoolRules:{
        name:[
          {required:true,message:'请输入名称',trigger:'blur'},
        ],
        content:[
          {required:true,message:'请输入描述',trigger:'blur'},
        ]
      }
    }
  }
}
</script>

<style>
.knowledge{
  position:absolute;
  left:450px;
  top:100px;
}
.none{
  height:25px;
}
.operate{
  height:40px;
  margin-left:440px;
  margin-top:15px;
}
.content{
  margin-top:50px;
  margin-left:25px;
  width:650px;
  border-radius: 12px;
  background-color: white;
}
.awcontent{
  width:700px;
  border-radius: 12px;
  background-color: #4dd0e1;
}
.sbcontent{
  width:700px;
  border-radius: 12px;
  background-color:#a1887f;
}
.ascontent{
  width:700px;
  border-radius: 12px;
  background-color: #7986cb;
}
</style>

