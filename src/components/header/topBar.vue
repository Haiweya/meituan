<template>
    <div  class="m-header-topbar">
       <el-row>
           <el-col :span="10">
               <geo/>
           </el-col>
           <el-col :span="14">
               <navBar/>
           </el-col>
       </el-row>
    </div>
    
</template>
<script>
import geo from './geo';
import navBar from './navBar'
export default {
    components:{
        geo,
        navBar
    }
    
}
</script>
<style lang="scss">
@import "@/assets/css/public/header/topbar.scss"

</style>