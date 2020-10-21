<template>
  <div class="course">
    <mt-header title="学前端,到英语宝典">
      <div slot="right" class="shortcut" >
        <router-link to="/register">注册</router-link>|
        <router-link to="/login">登录</router-link>
      </div>
    </mt-header>
    <div id="search">
      <div>
				<input @blur="checkWord"
               type="text" 
               v-model="keyword" 
               placeholder="请您输入想要翻译得内容" />
        <button @click="handle">搜索</button>
			</div>
    </div>
    
    
    <div v-if="isLogin"  id="context">
      <div id="yemian1">
        <!-- <p>{{words[0].englishWord}}</p> -->
        <h2>
          {{data.englishWord}}
        </h2>
        <div id="pa">
          <span>/{{data.pa}}/</span>
        </div>
        <div id="chineseword">
          <span>{{data.chineseWord}}</span>
        </div>
      </div>
      <div id="yemian2">
        <div id="ep_english1">
          <span>{{data.englishInstance1}}</span>
        </div>
        <div id="ep_chinese1">
          <span>{{data.chineseInstance1}}</span>
        </div>
        <div id="ep_english2">
          <span>{{data.englishInstance2}}</span>
        </div>
        <div id="ep_chinese1">
          <span>{{data.chineseInstance2}}</span>
        </div>
      </div>
    </div>
    <div id="index" v-else>
      <ul>
        <li v-for="(item,index) of words" :key="index" 
            @click="login(item.englishWord,item.chineseWord,item.pa,item.englishInstance1,item.englishInstance2,item.chineseInstance1,item.chineseInstance2)">
            
          {{item.englishWord}} : {{item.chineseWord}}
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return{
      isLogin:false,
      active:"1",
      tabbar:'active',
      words:[],
      keyword:'',
      data:{
        chineseInstance1:"",
        chineseInstance2:"",
        chineseWord:"",
        collect:"",
        englishInstance1:"",
        englishInstance2:"",
        englishWord:"",
        pa:"",
        pron:""
      },
    }
  },
  methods:{
    login(englishWord,chineseWord,pa,englishInstance1,englishInstance2,chineseInstance1,chineseInstance2){
      this.data.englishWord = englishWord;
      this.data.chineseWord = chineseWord;
      this.data.pa = pa;
      this.data.englishInstance1 = englishInstance1;
      this.data.englishInstance2 = englishInstance2;
      this.data.chineseInstance1 = chineseInstance1;
      this.data.chineseInstance2 = chineseInstance2;
      this.isLogin=true;
    },
    checkWord(){
      let keywordRegExp = /^[\u4e00-\u9fa5_a-zA-Z]+$/;
      if(keywordRegExp.test(this.keyword)){
        return true;
      }else{
        this.$toast({
          message:"不能为空"
        });
        return false;
      }
    },
    handle(){
      if(this.checkWord()){
        let obj = {keyword:this.keyword}
      }
      this.axios.get('/words?keyword='+this.keyword).then(res=>{
      if(res.data.results.length){
        console.log(res.data.results);
        this.words = res.data.results
        this.data = res.data.results[0]
        this.isLogin=false;
      }else{
         this.$toast({
          message:"查询不到"
        });
      }
    })
  },
    //  this.axios.get('/words?keyword='+this.keyword).then(res=>{
    //   this.data = res.data.results
    //   this.data = this.data[0]
    // if(res.data.code == 1){
    //     console.log(this.data);
    // }else{
    //   console.log("chaxunshibai");
    // }      
    // });
  }
}
</script>

<style scoped>
/* 双语例句 */

  #ep_english1,#ep_english2,#ep_chinese1,#ep_chinese2{
    margin-left: 25px;
    margin-right: 14px;
    margin-top: 18px;
    text-align: left;
  }
/* 单词详情页 */
  #yemian1{
    border-bottom: 1px solid black;
  }
  h2{
    margin-top: 16px;
    margin-left: 30px;
    text-align: left;
    font-size: 26px;
  }
  #pa{
    text-align: left;
    font-size: 16px;
    margin-left: 35px;
    margin-top: 10px;

  }
  #chineseword{
    text-align: left;
    margin-left: 20px;
    margin-right: 5px;
    margin-top: 15px;
    padding-bottom: 18px;
  }
  #index{
    position: absolute;
    background-color: rgba(0,0,0,0.1);
    float: left;
    margin-left: 8px;
    margin-top: 8px;
  }
  ul{
    list-style-type: none;
  }
  li{
    text-align: left;
    width: 360px;
    height: 35px;
    border-bottom: 1px dashed #F6F7F8;
    line-height: 35px;
    overflow: hidden;
  }
  
  #search input{
    width: 70%;
    height: 32px;
    padding-left: 10px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: 1px solid #000;
  }
  #search button{
    padding-bottom: 3px;
    height: 36px;
    width: 20%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: 1px solid #000;
    border-left: none;
  }
  #search>div:first-child{
    margin-top: 20px;
  }

  .course .mint-header{
    background-color: #f11e27;
  }
  .course .mint-navbar .mint-tab-item.is-selected{
    border-bottom: 3px solid#f11e27;
  }
  .course .mint-swipe{
      height:150px;
  }
  .course .swipe_img{
    height: 100%;
  }
  .course .mint-swipe, .mint-swipe-items-wrap{
    background-color: red;
  }
  .course a.is-selected .mint-tab-item-label{
    color:#ff303b;
  }

</style>