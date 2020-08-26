<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <div class="m-search">
            <el-col class="left" :span="3">
               <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
            </el-col>
            <el-col class="center" :span="14">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="请输入内容" class="el-input" @focus="focusInput" @blur="blurInput" @input="input"></el-input>
                    <el-button type="primary" class="el-icon-search el-button"></el-button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item, index) in hotPlaceList" :key="item + '_'+ index">
                            <router-link  :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                    <dl class="searchList" v-if="isSearchList">
                        <dd v-for="(item, index) in searchList" :key="index">
                            <router-link :to="{name:'goods', params: {name: item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                </div>
                <div class="suggest">
                     <router-link v-for="(item, index) in suggestList" :key="item + '~' + index" :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
                </div>
            </el-col>
            </div>
        </el-row>
    </div>
    
</template>
<script>
import api from "@/api/search"
export default {
    data(){
        return{
            searchWord:'',
            hotPlaceList:[],
            searchList:[],
            suggestList:[],
            isFoucse:false
        }
    },
    created(){
         api.getSearchHotwords().then(result=>{
             this.hotPlaceList = result.data.data;
             this.suggestList = result.data.data;
         })
    },
    computed: {
        isHotPlace() {
            return !this.searchWord && this.isFoucse;
        },
        isSearchList() {
            return this.searchWord && this.isFoucse;
        }
    },
    methods:{
        focusInput(){
             this.isFoucse = true;
             
        },
        blurInput(){
            let self = this;
            setTimeout(()=>{
                self.isFoucse = false;
            },200)
        },
        input(){
            console.log(this.searchWord);
            api.getSearchList().then(result=>{
                this.searchList = result.data.data.list;
            })
        }
    }
    
}
</script>
<style lang="scss">
@import "@/assets/css/public/header/search.scss";
@import "@/assets/css/public/header/index.scss"

</style>