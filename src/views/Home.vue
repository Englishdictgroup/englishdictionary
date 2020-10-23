<template>
  <div>
    <!-- 顶部导航栏开始 -->
    <mt-header title="英语宝典">
      <div slot="right" class="shortcut">
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
      </div>
    </mt-header>
    <div class="main">
      <!-- 顶部导航栏结束 -->
      <!-- 顶部链接开始 -->
      <div class="section">
        <router-link to="">
          <div>
            <img
              src="../assets/Icon/word.png"
              alt=""
              width="18px"
              height="18px"
            />
          </div>
          <span>单词本</span>
        </router-link>
        <router-link to="">
          <div>
            <img
              src="../assets/Icon/talking.png"
              alt=""
              width="18px"
              height="18px"
            />
          </div>
          <span>拍照翻译</span>
        </router-link>
        <router-link to="">
          <div>
            <img
              src="../assets/Icon/photo.png"
              alt=""
              width="18px"
              height="18px"
            />
          </div>
          <span>对话翻译</span>
        </router-link>
        <router-link to="">
          <div>
            <img
              src="../assets/Icon/pen.png"
              alt=""
              width="18px"
              height="18px"
            />
          </div>
          <span>词典笔</span>
        </router-link>
      </div>
      <div style="clear: both"></div>
      <div class="section_floor2">
        <div class="">
          <img src="../assets/Icon/1.png" alt="" />
          <p>实用英语</p>
        </div>
        <div>
          <img src="../assets/Icon/2.png" alt="" />
          <p>实用英语</p>
        </div>
        <div>
          <img src="../assets/Icon/3.png" alt="" />
          <p>实用英语</p>
        </div>
        <div>
          <img src="../assets/Icon/4.png" alt="" />
          <p>实用英语</p>
        </div>
        <div>
          <img src="../assets/Icon/5.png" alt="" />
          <p>实用英语</p>
        </div>
        <div>
          <img src="../assets/Icon/6.png" alt="" />
          <p>实用英语</p>
        </div>
        <div>
          <img src="../assets/Icon/7.png" alt="" />
          <p>实用英语</p>
        </div>
        <div>
          <img src="../assets/Icon/8.png" alt="" />
          <p>实用英语</p>
        </div>
        <div>
          <img src="../assets/Icon/9.png" alt="" />
          <p>实用英语</p>
        </div>
        <div>
          <img src="../assets/Icon/10.png" alt="" />
          <p>实用英语</p>
        </div>
      </div>
      <div style="clear: both"></div>
      <div class="lunbo">
        <router-link to="">
          <mt-swipe :auto="3000" class="banner">
            <mt-swipe-item><img src="../assets/banner/image1.png"/></mt-swipe-item>
            <mt-swipe-item><img src="../assets/banner/image2.png"/></mt-swipe-item>
            <mt-swipe-item><img src="../assets/banner/image3.png"/></mt-swipe-item>
            <mt-swipe-item><img src="../assets/banner/image4.png"/></mt-swipe-item>
          </mt-swipe>
        </router-link>
      </div>
      <div class="section_floor3">
        <router-link to="">
          <p>A smile is the best makeup any girl can wear</p>
          <img src="../assets/img/11.png" alt="" />
          <div class="section_floor3_3">壹句 22.9万跟读</div>
        </router-link>
      </div>
      <div class="section_floor4">
        <router-link to="">
          <img src="../assets/img/02.png" alt="" />
          <img src="../assets/img/03.png" alt="" />
          <img src="../assets/img/04.png" alt="" />
        </router-link>
      </div>
      <!-- 面板区域开始 -->
      <div class="zhuti" v-for="(article,index) of articles" :key="index">
        <div class="zhuti_left">
          <div class="zhuti_left_text">
            <p>{{article.title}}</p>
            <p>{{article.subtitle}}</p>
          </div>
        </div>
        <div class="zhuti_right">
          <img src="../assets/img/12.png" alt="" />
        </div>
      </div>
      <!-- 面板区域结束 -->
    </div>
    <!-- 底部选项卡开始 -->
    <mt-tabbar v-model="selectedTab" fixed class="mt_tabbar">
      <mt-tab-item id="index">
        词典
        <img
          src="../assets/Icon/dict_enabled1.png"
          slot="icon"
          v-if="selectedTab == 'index'"
        />
        <img src="../assets/Icon/dict_disable.png" slot="icon" v-else />
      </mt-tab-item>
      <mt-tab-item id="list">
        精品课
        <img
          src="../assets/Icon/course_enabled.png"
          slot="icon"
          v-if="selectedTab == 'list'"
        />
        <img src="../assets/Icon/course_disabled.png" slot="icon" v-else />
      </mt-tab-item>
      <mt-tab-item id="me">
        个人中心
        <img
          src="../assets/Icon/me_enabled.png"
          slot="icon"
          v-if="selectedTab == 'me'"
        />
        <img src="../assets/Icon/me_disabled.png" slot="icon" v-else />
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<style scoped>
/* 内容主体样式 */

.zhuti{
  width: 100%;
}
.zhuti_left {
  margin: 15px 0 0 15px;
}
.zhuti_left_text p:last-child {
  font-size: 12px;
  margin-top: 65px;
}
.zhuti_left {
  width: 60%;
  float: left;
}
.zhuti_right img {
  width: 35%;
  height: 120px;
}
/* 轮播图 */
.lunbo {
  height: 130px;
}
.banner img {
  width: 100%;
  height: 120px;
}
.main {
  margin: 10px 0 60px 0;
}
a {
  text-decoration: none;
}
/* 顶部选项卡样式 */
.shortcut a {
  text-decoration: none;
  margin-left: 10px;
  color: white;
}
/* 面板区域样式 */
.section a {
  text-decoration: none;
  float: left;
  width: 25%;
  text-align: center;
  font-size: 12px;
  margin-top: 10px;
}
.section a div img {
  margin-top: 10px;
}
.section a:nth-child(1) div,
.section a:nth-child(3) div,
.section a:nth-child(2) div,
.section a:nth-child(4) div {
  border-radius: 40px;
  width: 80px;
  height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  background-color: #26a22f;
}
.section a:nth-child(2) div,
.section a:nth-child(4) div {
  background-color: #f5500e;
}
.section_floor2 {
  margin: 0 7px;
  margin-top: 20px;
}
.section_floor2 div {
  width: 20%;
  float: left;
  font-size: 12px;
  margin: 0 0 12px 0;
  text-align: center;
}
.section_floor2 img {
  width: 32px;
  height: 32px;
}
.section_floor3 {
  border-bottom: 1px solid #e8e8e8e8;
}
.section_floor3 a p {
  width: 100%;
  font-size: 16px;
  text-align: center;
}
.section_floor3 img {
  width: 100%;
}
.section_floor3_3 {
  font-size: 12px;
  color: #999999;
  margin: 0 0 10px 20px;
}
.section_floor4 {
  margin-top: 15px;
}
.section_floor4 a img {
  width: 33.33%;
  height: 100%;
}
</style>
<script>
export default {
  data() {
    return {
      //默认被选定的顶部选项卡
      active: "1",
      //默认被选定的底部选项卡
      selectedTab: "index",
      //存储获取到的文章信息
      articles:[]
    };
  },
  methods: {
    
  },
  //监听底部选项卡的变化
  watch: {
    selectedTab(value) {
      if (value == "index") {
        this.$router.push("/").catch((e) => {});
      }
      if (value == "list") {
        this.$router.push("/").catch((e) => {});
      }
      if (value == "me") {
        this.$router.push("/").catch((e) => {});
        //selectedTab='me'
      }
    },
  },
  mounted() {
    
      // 获取文章分类信息
      this.axios.get('/articles').then(res=>{
        //接收服务器返回数据并且赋值给属性articles
        this.articles = res.data.results;
      });
    }
}
</script>

