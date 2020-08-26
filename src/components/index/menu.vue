<template>
    <div class="m-menu">
        <dl class="nav" @mouseleave="MenuMouseLeave">
            <dt>全部分类</dt>
            <dd v-for="(item , index) in menuList" :key="index"  @mouseenter="handleMouseEnter(item)">
                <i :class="item.type"></i>
                {{item.name}}
                <span class="arrow"></span>
            </dd>
        </dl>
        <div class="detail" v-if='curDetail' @mouseenter=" detailEnter" @mouseleave="detailLeave">
            <template  v-for="(childrenItem,index) in curDetail.items"  >
                <h4 :key="index">{{childrenItem.title}}</h4>
                <span v-for="(span,spanIndex) in childrenItem.items "  :key="span+'_'+spanIndex">
                    <router-link :to="{name: 'goods', params: {name: span}}" style='text-decoration: none;'> 
                         {{span}}
                    </router-link>
                    </span>
                   
            </template>
        </div>
    </div>
</template>
<script>
 import api from "@/api/menu.js"
export default {
   
    data(){
        return {
            menuList:[],
            showDetail:false,
            curDetail:null

      }
   },
   created(){
       api.getMenuList().then(result=>{
           console.log(result);
           this.menuList = result.data.data;
       })
   },
   methods:{
       handleMouseEnter(item){
           this.curDetail = item;
       },
       MenuMouseLeave(){
           var self = this;
           this.timer = setTimeout(() => {
                 self.curDetail = null;
           }, 200);
       },
       detailEnter(){
           clearTimeout(this.timer)
       },
       detailLeave(){
           this.curDetail = null;
       }
   }

}
   
</script>


<style  lang="scss">

</style>