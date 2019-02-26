<template>
  <!--轮播图-->
  <h2
    v-if="headName == 'banner'"
    class="SectionHeading"
  >
    <a class="link">
      <img
        src="~/assets/imgs/Featured-icon.svg"
        alt=""
        class="select_logo"
      >
      <span class="heading Featured-head">
        {{ $t('home.Featured') }} Dapps
      </span>
    </a>
  </h2>
  <!--平台排行榜-->
  <h2
    v-else-if="headName == 'dApps'"
    class="SectionHeading"
  >
    <a
      :href="`/${langCode}/dapps?platform=All&category=`"
      class="link"
    >
      <img
        src="~/assets/imgs/Ranking-icon.svg"
        alt=""
        class="select_logo"
      >
      <span class="heading">
        {{ $t('home.RankingByPlatform') }}
      </span>
    </a>
    <!--<a-->
    <!--:href="`/${langCode}/dapps?platform=All`"-->
    <!--class="see_all"-->
    <!--&gt;-->
    <!--<span>{{ $t('home.viewAll') }}</span>-->
    <!--<span class="el-icon-arrow-right" />-->
    <!--</a>-->
  </h2>
  <!--新增-->
  <h2
    v-else-if="headName == 'recentlyAdd'"
    class="SectionHeading"
  >
    <nuxt-link
      :to="`/${langCode}/collections`"
      class="link"
    >
      <img
        src="~/assets/imgs/Racently-icon.svg"
        alt=""
        class="select_logo"
      >
      <span class="heading">
        {{ $t('home.RecentlyAdded') }}
      </span>
    </nuxt-link>
    <!--<nuxt-link-->
    <!--:to="`/${langCode}/collections`"-->
    <!--class="see_all"-->
    <!--&gt;-->
    <!--<span>{{ $t('home.viewAll') }}</span>-->
    <!--<span class="el-icon-arrow-right" />-->
    <!--</nuxt-link>-->
  </h2>
</template>

<script>
    export default {
      name: "SectionHeading",
      props: {
        headName: {
          type: String,
          default: ''
        }
      },
      data( ){
        return{
          langCode: this.$store.state.locale
        }
      },
    }
</script>

<style lang="less" scoped>
  .SectionHeading {
    width: 100%;
    /*margin: 30px auto 0;*/
    padding-bottom: 15px;
    letter-spacing: -.95px;
    text-align: center;
    font-size: 22px;
      .link{
        .select_logo{
          width: 20px;
          height:20px;
          display: inline-block;
          margin-right: 10px;
        }
      }
      .heading{
        font-size:22px;
        font-weight:600;
        color:rgba(0,0,0,1);
        line-height:30px;
      }
    .Featured-head{
      color: #e6e6e6;
    }
      .see_all{
        margin-top: 5px;
        font-size: 10px;
        color:#333;
        margin-left: 12px;
      }
  }



</style>
