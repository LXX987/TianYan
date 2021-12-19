<template>
  <div class="deal">
    <Header></Header>
    <el-container>
      <el-main>
        <div class="returnbutton">
          <el-button type="primary" icon="el-icon-back" style="width:90px" @click="clickreturn">返回</el-button>
        </div>
        <div class="feedbacknumber">
          <span style="margin:10px;">
          <el-badge :value="feedback.length" class="feedbackitem">
            <el-button>反馈</el-button>
          </el-badge>
          </span>
          <span style="margin:10px;">
          <el-badge :value="replynumber" class="replyitem" type="primary">
            <el-button>回复</el-button>
          </el-badge>
          </span>
          <span style="margin:10px;">
          <el-badge :value="refusenumber" class="refuseitem" type="warning">
            <el-button>拒绝</el-button>
          </el-badge>
          </span>
        </div>
        <div class="details">
          <div class="feedbackcontent" v-for="(item,index) in feedback" :key="index">
            <div class="content">
              <div class="none">
              </div>
                <span style="font-size:15px;float:left;margin-left:15px;color:red;">{{item.name}}</span>
                <span style="font-size:10px;float:left;margin-left:10px;margin-top:4px;">{{item.time}}</span>
              <el-input
                type="textarea"
                :autosize="{minRows:3,maxRows:5}"
                v-model="item.content"
                readonly
                class="input-border"
                style="width:620px;margin-top:5px;margin-left:0px;"
              >
              </el-input>
              <div class="operate">
                <span style="margin:10px;">
                  <el-button type="primary" icon="el-icon-message" size="mini" @click="clickreply(item)" v-show="item.IsReplyShow">回复</el-button>
                </span>
                <span style="margin:10px;">
                  <el-button type="danger" icon="el-icon-delete" size="mini" @click="clickignore(item)">{{item.ignore}}</el-button>
                </span>
              </div>
              <el-form ref="form" label-width="80px" class="demo-form" v-show="item.IsFeedbackShow">
                <el-form-item label="反馈">
                  <el-input
                    type="textarea"
                    autosize
                    placeholder="请输入回复的内容"
                    v-model="item.reply"
                    style="width:580px;left:-10px;top:-2px;"
                  >
                  </el-input>
                </el-form-item>
              </el-form>
              <div class="choice" v-show="item.IsFeedbackShow">
                <span style="margin:10px;">
                    <el-button type="success" icon="el-icon-circle-check" size="mini" @click="clickfinish(item)">{{item.finish}}</el-button>
                  </span>
                <span style="margin:10px;">
                    <el-button type="warning" icon="el-icon-circle-close" size="mini" v-show="item.IsCancelShow" @click="clickcancel(item)">取消</el-button>
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
export default{
  name:"DealFeedback",
  components:{
    Header
  },
  data(){
    return{
      feedback:[
        {
          name:"搁浅的晴天一路向北",
          time:"2002-10-23",
          content:"太帅了",
          IsFeedbackShow:false,
          IsReplyShow:true,
          ignore:"忽略",
          reply:'',
          IsCancelShow:true,
          finish:"确认",
        },
        {
          name:"prince",
          time:"2021-12-06",
          content:"听说贝克汉姆都没他拽",
          IsFeedbackShow:false,
          IsReplyShow:true,
          ignore:"忽略",
          reply:'',
          IsCancelShow:true,
          finish:"确认",
        },
        {
          name:"某人",
          time:"2021-12-06",
          content:'好漂亮',
          IsFeedbackShow:false,
          IsReplyShow:true,
          ignore:"忽略",
          reply:'',
          IsCancelShow:true,
          finish:"确认",
        },
        {
          name:"某人",
          time:"2021-12-06",
          content:'好漂亮',
          IsFeedbackShow:false,
          IsReplyShow:true,
          ignore:"忽略",
          reply:'',
          IsCancelShow:true,
          finish:"确认",
        },
        {
          name:"某人",
          time:"2021-12-06",
          content:'好漂亮',
          IsFeedbackShow:false,
          IsReplyShow:true,
          ignore:"忽略",
          reply:'',
          IsCancelShow:true,
          finish:"确认",
        },
        {
          name:"某人",
          time:"2021-12-06",
          content:'好漂亮',
          IsFeedbackShow:false,
          IsReplyShow:true,
          ignore:"忽略",
          reply:'',
          IsCancelShow:true,
          finish:"确认",
        },
      ],
      readonly:true,
      replynumber:0,
      refusenumber:0,
    }
  },
  methods: {
    clickreply:function(item){
      if(item.finish=="完成"){
        item.IsCancelShow=true;
        item.finish="确认";
      }
      else{
        item.IsFeedbackShow=!item.IsFeedbackShow;
      }
    },
    clickignore:function(item){
      item.IsReplyShow=!item.IsReplyShow;
      item.IsFeedbackShow=false;
      if(item.IsReplyShow){
        item.ignore="忽略";
        this.refusenumber--;
      }
      else{
        item.ignore="撤销";
        this.refusenumber++;
      }
    },
    clickfinish:function(item){
      if(item.IsFeedbackShow){
        if(item.IsCancelShow){
          item.IsCancelShow=false;
          item.finish="完成";
          this.replynumber++;
        }
      }
    },
    clickcancel:function(item){
      item.IsFeedbackShow=!item.IsFeedbackShow;
    },
    clickreturn:function(){
      this.$router.push('/admin');

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
.returnbutton{
  position:fixed;
  left:100px;
  top:120px;
}
.feedbacknumber{
  position:fixed;
  top:200px;
  left:90px;
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
