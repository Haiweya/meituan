<template>
  <div class="m-header">
    <div class="m-header-wrapper">
       <topBar/>
       <searchBar/>
    </div>
  </div>
</template>
<script>
import topBar from "./topBar"
import searchBar from "./searchBar"
export default {
  components:{
      topBar,
      searchBar
  }
    
}
</script>
<style lang="scss">
@import "@/assets/css/public/header/index.scss"

</style>