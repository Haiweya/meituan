<template>
    <div class="page-changeCity">
       <el-row>
           <province/>
       </el-row>
       <el-row>
           <hotCity title="热门城市:" :list="hotList" />
       </el-row>
       <el-row>
           <hotCity title="最近访问:" :list="resentVisitList" />
       </el-row>
       <el-row>
           <cityList/>
       </el-row>

    </div>
</template>
<script>
import province from '@/components/changeCity/province.vue'
import hotCity from '@/components/changeCity/hot.vue'
import cityList from '@/components/changeCity/cityList.vue'
import api from '@/api/city.js'

export default {
    components:{
       province ,
       hotCity,
       cityList
    },
    created(){
        api.getHotCityList().then(result=>{
            this.hotList = result.data.data;
        })
        api.getRecenteList().then(result=>{
            this.resentVisitList = result.data.data
        })
    },
    data(){
        return{
            hotList:[],
            resentVisitList:[ "上海","昆明", "广东", "台湾","大连", "吉林", "黑龙江", "辽源", "通化", "白山"]
        }
    }
    
}
</script>
<style lang="scss">
@import '@/assets/css/changecity/iselect.scss'

</style>