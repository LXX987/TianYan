<template>
  <el-container>
    <Header/>
    <el-container>
      <AdminSidebar/>
      <el-main>
        <div class="checkquestion">
          <div class="questioncontent" v-for="(item,index) in question" :key="index">
            <div class="content">
              <div class="none">
              </div>
              <div class="title">
                <span style="font-size:15px;margin-left:20px;color:red;">{{item.name}}</span>
                <span style="font-size:12px;margin-left:5px">{{item.time}}</span>
              </div>
              <br>
              <h style="margin-left:20px;font-weight:bold">问题题目</h>
              <el-input
                type="textarea"
                autosize
                v-model="item.title"
                readonly
                class="input-border"
                style="width:600px;margin-top:5px;margin-left:20px;"
              >
              </el-input>

              <p></p>
              <h style="margin-left:20px;font-weight:bold">问题图片</h>
              <div class="questionphoto">
                <img :src='item.photourl'>
              </div>
              <p></p>
              <h style="margin-left:20px;font-weight:bold">正确答案</h>
              <el-input
                type="textarea"
                autosize
                v-model="item.trueanswer"
                readonly
                class="input-border"
                style="width:600px;margin-top:5px;margin-left:20px;"
              >
              </el-input>

              <p></p>

              <h style="margin-left:20px;font-weight:bold">其他答案</h>
              <p></p>
              <h style="margin-left:20px">选项一</h>
              <el-input
                type="textarea"
                autosize
                v-model="item.wronganswer1"
                readonly
                class="input-border"
                style="width:600px;margin-top:5px;margin-left:20px;"
              >
              </el-input>

              <p></p>

              <h style="margin-left:20px">选项二</h>
              <el-input
                type="textarea"
                autosize
                v-model="item.wronganswer2"
                readonly
                class="input-border"
                style="width:600px;margin-top:5px;margin-left:20px;"
              >
              </el-input>

              <p></p>

              <h style="margin-left:20px">选项三</h>
              <el-input
                type="textarea"
                autosize
                v-model="item.wronganswer3"
                readonly
                class="input-border"
                style="width:600px;margin-top:5px;margin-left:20px;"
              >
              </el-input>

              <p></p>

              <div class="operate">
                <span style="margin:10px;">
                  <el-button type="primary" icon="el-icon-check" size="mini" @click="checkpass">通过</el-button>
                </span>
                <span style="margin:10px;">
                  <el-button type="danger" icon="el-icon-close" size="mini" @click="checkrefuse">反对</el-button>
                </span>
              </div>
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
  name: 'Check',
  components:{Header,AdminSidebar},
  methods:{
    checkpass(){
      this.$message({
        message:"审核成功通过！",
        type:'success'
      })
    },
    checkrefuse(){
      this.$message.error('审核不通过！');
    }

  },
  data(){
    return {
      question:[{
        name:'小小',
        time:'2022-01-10',
        title:'请选择下列图片的正确种类',
        trueanswer:'番茄',
        wronganswer1:'土豆',
        wronganswer2:'白菜',
        wronganswer3:'小麦',
        photourl:require('../../../assets/checktomato.jpg')
      },
      //   {
      //   name:'111',
      //   time:'2021.1.1',
      //   title:'11',
      //   answer:'1',
      //   photourl:require('../../../assets/section1.png')
      // },{
      //   name:'111',
      //   time:'2021.1.1',
      //   title:'11',
      //   answer:'1',
      //   photourl:require('../../../assets/section1.png')
      // },{
      //   name:'111',
      //   time:'2021.1.1',
      //   title:'11',
      //   answer:'1',
      //   photourl:require('../../../assets/section1.png')
      // },{
      //   name:'111',
      //   time:'2021.1.1',
      //   title:'11',
      //   answer:'1',
      //   photourl:require('../../../assets/section1.png')
      // }
      ]
    }
  }
}
</script>

<style scoped>
.checkquestion{
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
  width:650px;
  border:2px solid #bcaaa4;
  border-radius: 12px;
}
.questionphoto{
  border-radius:12px;
  margin-left:20px;
}
</style>
