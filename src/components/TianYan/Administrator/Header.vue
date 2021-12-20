<template>
    <div class="head">
        <el-header>
            <div class="asidelogo" style="display:inline-block;color:white;font-size:40px">
                <img src="../../../assets/logo.png" id='logo'>TianYan
            </div>
        </el-header>
    </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>
<style>
.head{
    width: 100%;
    height: 80px;
    position:absolute;
    top:0px;
    left:0px;
    background-color:#368c5b;
}
.asidelogo{
    display:inline;
    height:50px;
}
.el-header{
    position:absolute;
    left:0px;
}
#logo{
  width: 40px;
  height: 40px;
  margin-top: 15px;
  margin-left: 15px;
}
</style>
