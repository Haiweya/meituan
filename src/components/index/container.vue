<template>
  <div class="m-istyle">
    <dl @mouseover="over">
      <dt>{{nav.title}}</dt>
      <dd v-for="(item,index) in nav.istyleList"  :key="index" :class="{active: kind ===item.data_type}" :data_type = item.data_type> {{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultsData" :key="index">
        <!-- <router-link :to=''></router-link> -->
        <!-- 这里应该是跳转到详情页 -->
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image">
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
               <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props:{
    nav:{
      type:Object
    },
    resultsData:{
      type:Array
    }
  },
  data() {
    return {
      kind: "all",
    };
  },
  created() {
   
  },
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if(tagName != "dd"){
        return false
      }
      this.kind = dom.getAttribute("data_type");
      console.log(this.kind)
      //发送ajax 请求动态获取数据，这当然由父级完成。注册一个事件由父级接收。
      this.$emit('dataTypeChange',this.kind) 
    }
  }
};
</script>
<style lang="scss">
    @import "@/assets/css/index/artistic.scss";
</style>

