<template>
  <div>
    <div class="m-product-categroy">
      <dl class="classic">
        <dt>分类</dt>
        <dt>全部</dt>
        <dd v-for="(item) in classicList" :key="item.type">
          <Mselect :name="item.title" :list="item.subList" />
        </dd>
      </dl>
      <dl class="classic">
        <dt>区域</dt>
        <dt>全部</dt>
        <dd v-for="(item) in areaList" :key="item.type">
          <Mselect :name="item.title" :list="item.subList" />
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
import Mselect from "@/components/product/select.vue"
import api from "@/api/good.js"
export default {
    components:{
        Mselect
    },
    created(){
      api.getClassifyList().then(result=>{
        this.classicList = result.data.data
      });
    },
  data() {
    return {
      classicList: [],

      areaList: [
        {
          title: "推荐商圈",
          subList: [
            {
              name: "望京",
              id: 120000,
            },
            {
              name: "昌平",
              id: 12222,
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang='scss'>
</style>