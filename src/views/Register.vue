<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="英语宝典">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="/login" slot="right" class="shortcut">
          登录
        </router-link>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 表单区域开始 -->
    <div>
        <mt-field 
          type="text" 
          label="用户名"
          placeholder="请输入用户名"
          :attr="{maxlength:15}"
          v-model="username"
          :state="usernameState"
          @blur.native.capture="checkUsername">
        </mt-field>   

        <mt-field 
          type="password" 
          label="密码"
          placeholder="请输入密码"
          :attr="{maxlength:20,autocomplete:'off'}"
          v-model="password"
          :state="passwordState"
          @blur.native.capture="checkPassword">
        </mt-field>   

        <mt-field 
          type="password" 
          label="确认密码"
          placeholder="请再次输入密码"
          :attr="{maxlength:20,autocomplete:'off'}"
          v-model="conpassword"
          :state="conpasswordState"
          @blur.native.capture="checkConpassword">
        </mt-field>   

        <mt-button type="primary" size="large" @click="handle">免费注册</mt-button>    
    </div>
    <!-- 表单区域结束 -->
  </div>
</template>
<style scoped>
.shortcut{
  text-decoration: none;  
}
</style>
<script>
export default {
  data(){
    return {
      // 用户名
      username:'',
      // 密码
      password:'',
      // 确认密码
      conpassword:'',
      // 用户名的状态
      usernameState:'',
      // 密码的状态
      passwordState:'',
      // 确认密码的状态
      conpasswordState:''
    }
  },
  methods:{
    //校验用户名
    checkUsername(){  
      let usernameRegExp = /^[0-9a-zA-Z_]{6,20}$/;
      if(usernameRegExp.test(this.username)){
        this.usernameState = 'success';
        return true;
      } else {
        this.usernameState = 'error';
        this.$toast({
          message:"用户名为必填项",
          position:"top",
          duration:"2000"
        });
        return false;
      }
    },
    //校验密码
    checkPassword(){
      //密码的正则表达式
      let passwordRegExp = /^[0-9A-Za-z]{8,20}$/;
      if(passwordRegExp.test(this.password)){
        return true;
      } else {
        this.$toast({
          message:"密码必须为字母、数字的组合体",
          position:"top",
          duration:"2000"
        });
        return false;
      }
    },
    //校验确认密码
    checkConpassword(){
      if(this.password != this.conpassword){
        this.$toast({
          message:"两次密码不一致",
          position:"top",
          duration:"2000"
        });
        return false;
      } else {
        return true;
      }
    },
    handle(){
      if(this.checkUsername() && this.checkPassword() && this.checkConpassword()){
        //该将获取到的信息提交到WEB服务器
        console.log('该将获取到的信息提交到WEB服务器');
      }
    }
  }
}
</script>