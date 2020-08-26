<template>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="m-crumbs">
            <el-breadcrumb-item>{{this.$store.state.position.name}}美团</el-breadcrumb-item>
            <el-breadcrumb-item>{{this.$store.state.position.name}}{{this.$route.params.name}}</el-breadcrumb-item>
        </el-breadcrumb>
</template>
<script>
export default {
    created(){
        console.log(this.$store.state.position);
    }
    
}
</script>

<style lang="scss">

</style>