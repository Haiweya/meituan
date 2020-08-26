<template>
    <div class="page-index">
       <el-row >
           <el-col :span ='5'>
               <m_menu/> 
           </el-col>
            <el-col :span ='19'>
                <life/>
            </el-col>
       </el-row>
       <el-row>
           <el-col :span='24'>
               <container :nav='nav' :resultsData="resultsData" @dataTypeChange="dataTypeChange" />
               <!-- <container/> -->
           </el-col>
       </el-row>
    </div>
</template>
<script>
import m_menu from "@/components/index/menu"
import life from "@/components/index/life"
import container from "@/components/index/container"
import api from "@/api/index.js"
export default {
    data(){
        return {
            nav:{
                title:'有格调',
                istyleList:[
                {
                text:'全部',
                data_type:'all',
                },
                {
                text:'约会聚餐',
                data_type:'food',
                },
                {
                text:'丽人spa',
                data_type:'spa',
                },
                {
                text:'电影演出',
                data_type:'movie',
                },
                {
                text:'品质出游',
                data_type:'travel',
                }   
              ]
            },
             
             resultsData:[], 
        }
    },
    created(){
        api.getGoods().then(result=>{
            this.resultsData = result.data.data.food
        })
    },
    components:{
        m_menu,
        life,
        container
    },
    methods:{
        dataTypeChange(dataType){
            api.getGoods().then(result=>{
                this.resultsData = result.data.data[dataType]
            })
        }
    }
    
}
</script>
<style lang="scss">
@import '@/assets/css/index/index.scss'

</style>