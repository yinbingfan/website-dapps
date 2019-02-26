<template>
  <el-carousel
    v-if="details.picUrls.length>0"
    :interval="5000"
    :arrow="arrow"
    indicator-position="none"
  >
    <el-carousel-item

      v-for="(item,key) in details.picUrls"
      :key="key"
      class="details-banner-img"
    >
      <img
        v-lazy="item"
        alt=""
      >
    </el-carousel-item>
  </el-carousel>
</template>

<script>
    export default {
      name: "BannerArea",
      props: {
        details: {
          type: Object,
          default: () => []
        }
      },
      data(){
        return{
          arrow:''
        }
      },
      mounted(){
       this.isArrow()
      },
      methods:{
        isArrow(){
          if(this.details.picUrls.length>1){
            this.arrow='always'
          }else{
            this.arrow='never'
          }
        }
      }
    }
</script>

<style lang="less" scoped>
.details-banner-img{
  img{
    width: 100%;
    height: 100%;
    &[lazy=error]{
      background: url('~assets/imgs/detail-banner-defult.svg') no-repeat;
      background-size: cover;
    }
    &[lazy=loading]{
      background: url('~assets/imgs/detail-banner-defult.svg') no-repeat;
      background-size: cover;
    }
  }
}
</style>
