<template>
    <div  class="page-product">
        <el-row>
           <crumb/>
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <category/>
                </el-row>
                <el-row>
                    <list/>
                </el-row>
            </el-col>
            <el-col :span="5">
                map + fav 
            </el-col>
        </el-row>
    </div>
</template>
<script>
import crumb from '@/components/product/crumb.vue'
import category from '@/components/product/category.vue'
import list from '@/components/product/list.vue'
export default {
    components:{
        crumb,
        category,
        list
    }
}
</script>
<style lang="scss">
@import '@/assets/css/products/index.scss'

</style>