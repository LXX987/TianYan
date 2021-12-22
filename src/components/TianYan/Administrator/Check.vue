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
              <h style="margin-left:20px;">问题题目</h>
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
              <h style="margin-left:20px;">问题照片</h>
              <el-input
                type="textarea"
                autosize
                v-model="item.photo"
                readonly
                class="input-border"
                style="width:600px;margin-top:5px;margin-left:20px;"
              >
              </el-input>

              <p></p>
              <h style="margin-left:20px;">问题答案</h>
              <el-input
                type="textarea"
                autosize
                v-model="item.answer"
                readonly
                class="input-border"
                style="width:600px;margin-top:5px;margin-left:20px;"
              >
              </el-input>

              <p></p>
              <h style="margin-left:20px;">问题特点</h>
              <el-input
                type="textarea"
                autosize
                v-model="item.feature"
                readonly
                class="input-border"
                style="width:600px;margin-top:5px;margin-left:20px;"
              >
              </el-input>

              <p></p>
              <h style="margin-left:20px;">问题备注</h>
              <el-input
                type="textarea"
                autosize
                v-model="item.remark"
                readonly
                class="input-border"
                style="width:600px;margin-top:5px;margin-left:20px;"
              >
              </el-input>

              <div class="operate">
                <span style="margin:10px;">
                  <el-button type="primary" icon="el-icon-check" size="mini">通过</el-button>
                </span>
                <span style="margin:10px;">
                  <el-button type="danger" icon="el-icon-close" size="mini">反对</el-button>
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

  },
  data(){
    return {
      question:[{
        name:'啦啦啦',
        time:'2021.1.1',
        title:'种子',
        photo:'',
        answer:'key',
        feature:'ke',
        remark:'11'
      },{
        name:'111',
        time:'2021.1.1',
        title:'11',
        photo:'11',
        answer:'1',
        feature:'1',
        remark:'1'
      },{
        name:'111',
        time:'2021.1.1',
        title:'11',
        photo:'11',
        answer:'1',
        feature:'1',
        remark:'1'
      },{
        name:'111',
        time:'2021.1.1',
        title:'11',
        photo:'11',
        answer:'1',
        feature:'1',
        remark:'1'
      },{
        name:'111',
        time:'2021.1.1',
        title:'11',
        photo:'11',
        answer:'1',
        feature:'1',
        remark:'1'
      }
      ]
    }
  }
}
</script>

<style>
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
  border:1px solid deepskyblue;
  border-radius: 12px;
}
</style>
