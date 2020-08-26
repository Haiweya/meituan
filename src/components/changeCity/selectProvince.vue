<template>
    <div class="choose-wrap">
        <div class="choose" @click="changeShowWrapper" v-document-click="documentClick">
            <span>{{value}}</span>
            <i class="el-icon-caret-bottom"></i>
            <div :class="{'mt-content':true,'active':isShowWrapper}">
                <!-- 省份 -->
                <h4>{{title}}</h4>  
                 <!-- 省份列表  -->
                <div class="wrapper">
                     <div class="col" >
                         <!-- 这里如果province中拥有id的话 ，即可运用id== index 来判断是否为active -->
                         <span :class="{'mt-item': true, 'active': index === 4}"  v-for="(item,index) in list" :key='index' @click='chooseSpan(item)' >{{item.provinceName}}</span>
                     </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    props:{
        list:{
            type:Array
        },
        value:{
            type:String
        },
        isShowWrapper:{
            type:Boolean
        },
        title:{
            type:String
        }
    },
    methods:{
        changeShowWrapper(e){
            //阻止冒泡事件
            e.stopPropagation();
            console.log("changeShowWrapper");
            this.$emit("wrapperShowChange",true);
        },
        documentClick(){
            console.log('document-click');
            this.$emit("wrapperShowChange",false);
        },
        //事件委托
        chooseSpan(value){
            // 更改值并传回子数组
            this.$emit("valueChange",value);
            // 不显示下拉框
            // this.$emit("wrapperShowChange",false);  //不好使
        }
    }
}
</script>
<style lang='scss'>
@import '@/assets/css/changecity/select.scss'

</style>