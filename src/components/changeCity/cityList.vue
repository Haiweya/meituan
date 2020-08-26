<template>
     <div class="category">
        <dl class="m-categroy">
            <dt>按拼音首字母选择：</dt>
            <dd v-for="(item, index) in list" :key="index">
                <a :href="'#city-' + item">{{item}}</a>
            </dd>
        </dl>
         <dl class="m-categroy-section " v-for="(item, index) in cityGroup" :key="index" :id="'city-'+ index">
            <dt>{{index + 1 }}</dt>
            <dd>
               <span v-for="city in item" :key="city.id" @click="changeCity(city)"> {{city.name}}</span>
            </dd>
        </dl>
        
    </div>   
</template>
<script>
import api from '@/api/city.js'
export default {
    data(){
        return{
            list:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
            cityGroup:[]
        }
    },
    methods:{
        changeCity(city){
            console.log('item=====', city)
            this.$store.dispatch('setPosition', city);
            this.$router.push({name: 'index'})
        }
    },
    created(){
        api.getCityList().then(result => {
            console.log(result)
            var obj = {}
            result.data.data.forEach((item, index) => {
                if (!obj[item.firstChar.toUpperCase()]) {
                    obj[item.firstChar.toUpperCase()] = [];
                }
                obj[item.firstChar.toUpperCase()].push(item);
            });
            this.cityGroup = obj;
        })
    }
    
}
</script>
<style lang='scss'>
    @import "@/assets/css/changecity/categroy.scss";

</style>