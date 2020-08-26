<template>
  <div class="m-iselect">
      <!-- 二级联动菜单 -->
    <span class="name">按省份选择:</span>
    <Pselect
      :list="provinceList"
      title="省份"
      :value="province"
      :isShowWrapper="showProvinceActive"
      @wrapperShowChange="provinceChange"
      className="province"
      @valueChange="provinceValueChange"
    />
    <Cselect
      :list="cityList"
      title="城市"
      :value="city"
      :isShowWrapper="showCityActive"
      @wrapperShowChange="cityChange"
      className="city"
       @valueChange="cityValueChange"
    />
     <span class="search">直接搜索:</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template> 

<script>
import Pselect from "@/components/changeCity/selectProvince.vue";
import Cselect from "@/components/changeCity/selectCity.vue"
import api from "@/api/city"
export default {
  components: {
    Pselect,
    Cselect
  },
  data() {
    return {
      province: "省份",
      provinceList: [],
      city: "城市",
      cityList: [],
      showCityActive: false,
      showProvinceActive: false,
      provinceValue: "",
      cityValue: "",
      searchWord:'',
      loading:false,
      searchList: ["哈尔滨", "佳木斯", "牡丹江", "鹤岗"]
    };
  },
  created(){
    api.getProvinceList().then(result=>{
      this.provinceList = result.data.data
    })

  },
  methods: {
    provinceChange(flag) {
      console.log(flag)
      this.showProvinceActive = flag;
      if (flag) {
        this.showCityActive = false;
      }
    },
    cityChange(flag) {
      this.showCityActive = flag;
      if (flag) {
        this.showProvinceActive = false;
      }
    },
    provinceValueChange(value){
        this.province = value.provinceName,
        // 选择数据后下拉框不显示
        this.cityList = value.cityInfoList;
    },
    
    cityValueChange(value){
        this.city = value;
    },
    remoteMethod(){

    }
  },
};
</script>
<style lang='scss'>
@import "@/assets/css/changecity/iselect.scss";
</style>