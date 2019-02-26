<template>
  <div class="Dapp-item-container">
    <!--轮播图-->
    <div class="banner-region">
      <section-heading
        v-if="bannerList.length>0"
        :head-name="'banner'"
      />
      <banner-list :banner="bannerList" />
    </div>

    <!--平台排行榜-->
    <div class="platforms-region">
      <section-heading
        v-if="topFiveEthList.length>0 ||topFiveEosList.length>0 "
        :head-name="'dApps'"
      />
      <div class="platforms">
        <leader-board-list
          v-if="topFiveEthList.length>0"
          :plat-name="'ETH'"
          :platform-list="topFiveEthList"
        />
        <leader-board-list
          v-if="topFiveEosList.length>0"
          :plat-name="'EOS'"
          :platform-list="topFiveEosList"
        />
      </div>
    </div>
    <!--新增-->
    <section-heading
      v-if="RecentlyAddList.length>0"
      :head-name="'recentlyAdd'"
    />
    <recently-list-item :recently-list="RecentlyAddList" />
    <!--邮件订阅-->
    <common-newsletter-footer />
  </div>
</template>

<script>
  import bannerList from '~/components/home/banner-list.vue'
  import sectionHeading from '~/components/home/section-heading.vue'
  import recentlyListItem from '~/components/home/recently-list-item.vue'
  import leaderBoardList from '~/components/home/leader-board-list.vue'
  import commonNewsletterFooter from '~/components/common/common-newsletter-footer';
  export default {
    name: "Home",
    components: {
      bannerList,
      recentlyListItem,
      sectionHeading,
      leaderBoardList,
      commonNewsletterFooter
    },
    head () {
      return {
        title: 'Dapp shark - The best dapp information platform',
        meta: [
          { hid: 'index', name: 'referrer',content: 'no-referrer' }
        ]
      }
    },
    data(){
      return{
        langCode: this.$store.state.locale,
        RecentlyAddList:[],
        topFiveEthList:[],
        topFiveEosList:[],
        bannerList:[]
      }
    },
    async asyncData({store}) {
      let banner = await store.dispatch('FETCH_BANNER', {
        langCode:store.state.locale
      })
      let topFiveEth = await store.dispatch('FETCH_TOP_FIVE', {
        langCode:store.state.locale,
        platform:'ETH',
      })
      let topFiveEos = await store.dispatch('FETCH_TOP_FIVE', {
        langCode:store.state.locale,
        platform:'EOS',
      })
      let recently = await store.dispatch('FETCH_RECENTLY_LISTS', {
        langCode:store.state.locale
      })
      return {
        bannerList:banner.data,
        topFiveEthList: topFiveEth.data,
        topFiveEosList: topFiveEos.data,
        RecentlyAddList: recently.data,
      }
    },
    mounted(){

    },
    methods:{

    }
  }

</script>

<style lang="less" scoped>
  .banner-region{
    width: 100%;
    height: 350px;
    background: url("~assets/imgs/head-banner.png") no-repeat;
    background-size: 100% 100%;
  }
  .platforms-region{
    margin: 90px 0 60px;
  }
  .platforms {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    /*margin: 0 auto;*/
  }
</style>
