<template>
    <div>
      <div class="head" style="overflow-x:hidden;overflow-y:hidden;">
          <div class="container">
            <div class="headerlogo" style="display:inline-block;color:white;font-size:40px">
              <img src="../../assets/logo.png" id='logo'>TianYan
            </div>
            <div id="navbar" class="headerlogo" style="display:inline-block;">
                <ul id="menu-menu" class="nav-menu">
                  <li id="menu-home" class="page">
                    <router-link to="/home" style="text-decoration:none">home</router-link>
                  </li>
                  <li id="menu-identity" class="page">
                    <a href="http://www.baidu.com/" style="text-decoration:none">identity</a>
                  </li>
                  <li id="menu-game" class="page">
                    <router-link to="/gameintro" style="text-decoration:none">game</router-link>
                  </li>
                  <li id="menu-about" class="page">
                    <a href="http://www.baidu.com/" style="text-decoration:none">about</a>
                  </li>
                </ul>
            </div>
            <div class="headerlogo" id="userid" style="display:inline-block;">
              <!-- <router-link to="/honor2"><img src="../../assets/user.png" id="user"></router-link> -->
              <el-button circle id="userr" @click="addRoutes1"></el-button>
            </div>
          </div>
      </div>
    </div>
</template>
<style>
.a{ 
  color: white; 
} 
a:link { color:#fff; text-decoration:underline; }
a:active { color:white; text-decoration:none; }
a:visited { color:white;text-decoration:none; }
a:hover{ color:white;text-decoration:none;font-weight:bold; }
.nav-menu{
  width: 50%;
  height: 50px;
  list-style: none;
  position:absolute;
  padding-inline-start: 0px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 4;
  left: 50%;
}
#userr{
  background: url('../../assets/user.png') no-repeat;
  background-size: 100% 100%;
}
#userr.el-button{
  border: 0px solid #DCDFE6;
}
#userr.el-button.is-circle{
  padding: 20px;
}
.page
{
  display:inline;
  width: 10px;
  height: 15px;
  margin: 0px;
  padding: 0px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 20px;
}
.headerlogo{
  display: inline;
  height: 50px;
  vertical-align:top;
}

.head{
  width: 100%;
  height: 13%;
  position:absolute;
  top:0px;
  left:0px;
  background-color:#368c5b;
}
#logo{
  width: 40px;
  height: 40px;
  margin-top: 15px;
  margin-left: 15px;
}
div#userid {
  margin-left: 955px;
  margin-top:20px;
}
#user{
  width: 40px;
  height: 40px;
  margin-top: 15px;
  margin-right: 15px;
}
</style>
<script>
export default {
    name: "Header",
      methods: {
    addRoutes1 () {
      this.$router.push('/usercontrol')
    }
  }
}
</script>