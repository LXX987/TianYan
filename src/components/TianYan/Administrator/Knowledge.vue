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
                :visible.sync="showawdialogue"
                width="50%"
                @close="editDialogClosed">
                <el-form
                  :model="agriculturalworld"
                  :rules="agriculturalworldRules"
                  ref="agriculturalworldRef"
                  label-width="80px">
                  <el-form-item label="名称" prop="name">
                    <el-input v-model="agriculturalworld.name"></el-input>
                  </el-form-item>
                  <el-form-item label="描述" prop="description">
                    <el-input
                      type="textarea"
                      autosize
                      v-model="agriculturalworld.content">
                    </el-input>
                  </el-form-item>
                </el-form>
                <span slot="footer" class="dialoguefooter">
                  <el-button type="primary" icon="el-icon-check" @click="clickawyes">确定</el-button>
                  <el-button type="danger" icon="el-icon-close" @click="clickawno">取消</el-button>
                </span>
              </el-dialog>
            </div>
            <div class="none">
            </div>
          </div>

          <br>

          <div class="sbcontent">
            <h1 style="margin-left:20px;margin-bottom:-25px;">科普基地</h1>
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
                v-model="item.title"
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
            </div>
            <el-dialog
              title="科普基地"
              :visible.sync="showsbdialogue"
              width="50%"
              @close="editDialogClosed">
              <el-form
                :model="sciencebase"
                :rules="sciencebaseRules"
                ref="sciencebaseRef"
                label-width="80px">
                <el-form-item label="名称" prop="name">
                  <el-input v-model="sciencebase.name"></el-input>
                </el-form-item>
                <el-form-item label="描述" prop="description">
                  <el-input
                    type="textarea"
                    autosize
                    v-model="sciencebase.content">
                  </el-input>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialoguefooter">
                  <el-button type="primary" icon="el-icon-check" @click="clicksbyes">确定</el-button>
                  <el-button type="danger" icon="el-icon-close" @click="clicksbno">取消</el-button>
                </span>
            </el-dialog>
            <div class="none">
            </div>
          </div>

          <br>

          <div class="ascontent">
            <h1 style="margin-left:20px;margin-bottom:-25px;">农学学堂</h1>
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
                v-model="item.title"
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
            </div>
            <el-dialog
              title="农学学堂"
              :visible.sync="showasdialogue"
              width="50%"
              @close="editDialogClosed">
              <el-form
                :model="agriculturalschool"
                :rules="agriculturalschoolRules"
                ref="agriculturalschoolRef"
                label-width="80px">
                <el-form-item label="名称" prop="name">
                  <el-input v-model="agriculturalschool.name"></el-input>
                </el-form-item>
                <el-form-item label="描述" prop="description">
                  <el-input
                    type="textarea"
                    autosize
                    v-model="agriculturalschool.content">
                  </el-input>
                </el-form-item>
              </el-form>
              <span slot="footer" class="dialoguefooter">
                  <el-button type="primary" icon="el-icon-check" @click="clickasyes">确定</el-button>
                  <el-button type="danger" icon="el-icon-close" @click="clickasno">取消</el-button>
                </span>
            </el-dialog>
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
      this.showawdialogue=!this.showawdialogue;
    },
    clickawyes(){
      this.showawdialogue=!this.showawdialogue;
    },
    clickawno(){
      this.showawdialogue=!this.showawdialogue;
    },

    clickchangesb(item){
      this.showsbdialogue=!this.showsbdialogue;
    },
    clicksbyes(){
      this.showsbdialogue=!this.showsbdialogue;
    },
    clicksbno(){
      this.showsbdialogue=!this.showsbdialogue;
    },

    clickchangeas(item){
      this.showasdialogue=!this.showasdialogue;
    },
    clickasyes(){
      this.showasdialogue=!this.showasdialogue;
    },
    clickasno(){
      this.showasdialogue=!this.showasdialogue;
    }


  },
  data(){
    return {
      input:'',
      agriculturalworld:[{
        name:'111',
        content:'111',
      },{
        name:'222',
        content:'111'
      }],
      sciencebase:[{
        name:'222',
        content:'111',
      },{
        name:'111',
        content:'222'
      }],
      agriculturalschool:[{
        name:'111',
        content:'222',
      },{
        name:'222',
        content:'111'
      }],
      showawdialogue:false,
      showsbdialogue:false,
      showasdialogue:false,
      agriculturalworldRules:{
        name:[
          {required:true,message:'请输入名称',trigger:'blur'},
        ],
        description:[
          {required:true,message:'请输入描述',trigger:'blur'},
        ]
      },
      sciencebaseRules:{
        name:[
          {required:true,message:'请输入名称',trigger:'blur'},
        ],
        description:[
          {required:true,message:'请输入描述',trigger:'blur'},
        ]
      },
      agriculturalschoolRules:{
        name:[
          {required:true,message:'请输入名称',trigger:'blur'},
        ],
        description:[
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
  /*border:1px solid deepskyblue;*/
  border-radius: 12px;
  background-color: white;
}
.awcontent{
  width:700px;
  /*border:2px solid #40c4ff;*/
  border-radius: 12px;
  background-color: #4dd0e1;
}
.sbcontent{
  width:700px;
  /*border:2px solid #69f0ae;*/
  border-radius: 12px;
  background-color:#a1887f;
}
.ascontent{
  width:700px;
  /*border:2px solid deepskyblue;*/
  border-radius: 12px;
  background-color: #7986cb;
}
</style>

