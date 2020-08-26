<template>
<div class="layout-default">
    <el-container  class="el-container">
        <el-header class="el-header" height=''>
            <myHeader/>
            <!-- <div style="width:100vw;height:100px; background:#ccc; z-index:1 postion:relative"></div> -->
        </el-header>
        <el-main class="el-main" >
          <router-view></router-view>
        </el-main>
        <el-footer class="el-footer" height=''>
            <myFooter/>
        </el-footer>
    </el-container>
</div>
</template>
<script>

import myHeader from "@/components/header/index"
import myFooter from "@/components/footer/index"

export default {
    components:{
        myHeader,
        myFooter
    }
    
}
</script>

<style lang="scss">
@import "@/assets/css/public/layout.scss"

</style>