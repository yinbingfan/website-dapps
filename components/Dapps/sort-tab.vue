<template>
  <div class="sort-tab">
    <div
      class="sort-tab-contain transition300"
      @click="changeCategory('')"
    >
      <img
        src="~/assets/imgs/all.png"
        alt=""
      >
      <span
        :class="[ categoryId === ''?'is-active':'']"
      >
        {{ $t('Dapps.all') }}
      </span>
    </div>
    <div
      v-for="(item,index) in category "
      :key="index"
      class="sort-tab-contain"
      @click="changeCategory(item.id)"
    >
      <img
        :src="item.iconUrl"
        alt=""
      >
      <span
        :class="[ categoryId == item.id?'is-active':'']"
      >
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "SortTab",
      props: {
        category: {
          type: Array,
          default: () => []
        }
      },
      data(){
        return{
          categoryId: this.$route.query.category
        }
      },
      watch: {
        '$route' (to) {
          window.scroll(0,0)
          this.categoryId=to.query.category
        },
      },
      methods:{
        changeCategory(id){
          this.categoryId = id
          this.$emit('tabCategory', id)
        }
      }
    }
</script>

<style lang="less" scoped>
  .sort-tab{
    /*width: 100%;*/
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin:  0 auto;
    .transition300{
      transition: all 300ms;
    }
    .sort-tab-contain{
      display: flex;
      align-items: center;
      cursor: pointer;
      img{
        width: 16px;
        height: 16px;
        margin-right: 5px;
      }
      span{
        font-size: 14px;
        width: max-content;
        font-family:Helvetica-Bold;
        font-weight:bold;
        color:rgba(12,12,42,1);
        line-height:17px;
      }
      .is-active{
        border-bottom: 1px solid #303133;
        /*color: orangered;*/
      }
    }
    .is-active{
      border-bottom: 1px solid #303133;
    }
  }
</style>
