<template>
  <div class="deal">
    <Header></Header>
    <el-container>
      <AdminSidebar/>
      <el-main>
        <div class="details">
          <div class="feedbackcontent" v-for="(item,index) in feedback" :key="index">
            <div class="content">
              <div class="none">
              </div>
              <div class="title">
                <span style="font-size:15px;margin-left:20px;color:red;">{{item.name}}</span>
                <span style="font-size:10px;margin-left:5px">{{item.time}}</span>
              </div>
              <el-input
                type="textarea"
                :autosize="{minRows:3,maxRows:5}"
                v-model="item.content"
                readonly
                class="input-border"
                style="width:600px;margin-top:5px;margin-left:20px;"
              >
              </el-input>
              <div class="operate">
                <span style="margin:10px;">
                  <el-button type="primary" icon="el-icon-bottom" size="mini" @click="clickreply(item)">回复</el-button>
                </span>
                <span style="margin:10px;">
                  <el-button type="danger" icon="el-icon-top" size="mini" @click="clickignore(item)">收起</el-button>
                </span>
              </div>
              <el-form ref="item" label-width="80px" class="demo-form" v-show="item.IsFeedbackShow" :model="item">
                <el-form-item label="反馈">
                  <el-input
                    type="textarea"
                    autosize
                    placeholder="请输入回复的内容"
                    v-model="item.reply"
                    style="width:560px;"
                    prop="reply"
                  >
                  </el-input>
                </el-form-item>
              </el-form>
              <div class="choice" v-show="item.IsFeedbackShow">
                <span style="margin:10px;">
                    <el-button type="success" :icon="item.send" size="mini" @click="clickfinish(item)">{{item.finish}}</el-button>
                  </span>
                <span style="margin:10px;">
                    <el-button type="warning" icon="el-icon-circle-close" size="mini" @click="clickcancel(item)">取消</el-button>
                  </span>
              </div>
            </div>
            <div class="none">
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from './Header'
import AdminSidebar from './AdminSidebar'
export default{
  name:"DealFeedback",
  components:{
    Header,AdminSidebar
  },
  data(){
    return{
      feedback:[],
      readonly:true,
    }
  },
  mounted() {
    getFeedback().then(res =>{
      let feedbacks = res.data.feedback
      for(let i=0; i<feedbacks.length; i++){
        this.feedback.push({
          name: feedbacks[i].user_name,
          time: feedbacks[i].time,
          content:feedbacks[i].content,
          fid: feedbacks[i].fid,
          IsFeedbackShow:false,
          IsFeedbackSend:false,
          reply:'',
          finish:"确认",
          send:"el-icon-message",
        })
      }
    }).catch(function (error) {
      console.log(error)
    });
  },
  methods: {
    clickreply:function(item){
      item.IsFeedbackShow=true;
    },
    clickignore:function(item){
      item.IsFeedbackShow=false;
    },
    clickfinish:function(item){
      if(item.finish==="确认"){
        feedback(item.name, item.reply, item.fid).then(res =>{
          alert("发送成功")
        }).catch(function (error) {
          console.log(error)
        });
        item.IsFeedbackSend=true;
      }
      item.finish="完成";
      item.send="el-icon-circle-check";
    },
    clickcancel:function(item){
      if(item.finish=="完成"){
        item.finish="确认";
        item.send="el-icon-message";
      }
      item.reply='';
    },
  }
}
</script>

<style>
.details{
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
.demo-form{
  margin-left:-20px;
}
.choice{
  height:50px;
  margin-left:440px;
  margin-top:-5px;
}
</style>
