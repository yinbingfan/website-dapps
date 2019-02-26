<template>
  <div class="Dapp-item-container">
    <div class="dapp-header">
      <select-platform :platform-name="platformName" />
    </div>
    <div class="Dapps-container">
      <sort-tab
        :category="CategoryList"
        @tabCategory="handlerTabCategory"
      />
      <default-bottom />
      <platform-list-item
        v-if="DAapps.list"
        :platform="DAapps"
        @handlerChangePage="handlerChangePage"
      />
      <div
        v-if="isEnd"
        class="no-more"
      >
        <span>{{ $t('common.noMore') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import platformListItem from '~/components/Dapps/platform-list-item.vue';
  import sortTab from '~/components/Dapps/sort-tab.vue';
  import selectPlatform from '~/components/Dapps/select-platform.vue';
  import defaultBottom from '~/components/details/default-bottom.vue';

  export default {
      name: "DappPlatform",
      components:{
        platformListItem,
        sortTab,
        selectPlatform,
        defaultBottom
      },
      head () {
        return {
          title: 'Dapp shark - Discover the world\'s most fun dapp',
          meta: [
            { hid: 'dapps', name: 'referrer',content: 'no-referrer' }
          ]
        }
      },
      data(){
        return{
          langCode: this.$store.state.locale,
          categoryId: this.$route.query.category,
          platformName: this.$route.query.platform,
          DAapps:{},
          CategoryList:[],
          isEnd:false,
          DappPages: this.$route.query.pages || 1,
        }
      },
      watch: {
        '$route' (to) {
          window.scroll(0,0)
          this.DappPages = to.query.pages
          this.platformName= to.query.platform
          this.categoryId=to.query.category
          this.getDAappList(to.query.category,to.query.platform)
        },
      },
      mounted(){
        this.getDAappList(this.categoryId,this.platformName)
      },
     async asyncData({store}) {
         let Category = await store.dispatch('FETCH_CATEGORY', {
           langCode:store.state.locale
         });
        return {
          CategoryList : Category.data
        }
     },
      methods:{
        async getDAappList(id,platform) {
          if(platform=='All'){
           platform=''
          }
          let DAapp = await this.$store.dispatch('FETCH_FIND_LISTS', {
            langCode:this.$store.state.locale,
            page:this.DappPages,
            platform:platform,
            categoryId:id,
            // sortColumn:'user',
            // sortType:'desc'
          });
          if(DAapp.data==''||DAapp.data==null||DAapp.data.list.length<=0){
            this.DAapps={}
            this.isEnd=true
            return
          }else {
            this.isEnd=false
          }
          this.DAapps = DAapp.data
        },
        handlerTabCategory (id) {
          if(this.$route.query.platform==undefined){
            this.$router.push(`/${this.langCode}/dapps?platform=All&category=${id}`)
          }else {
            this.$router.push(`/${this.langCode}/dapps?platform=${this.platformName}&category=${id}`)
          }
        },
        handlerChangePage(pages) {
          if(this.$route.query.category==undefined){
            this.$router.push(`?platform=${this.platformName}&category=&pages=${pages}`) // 换页
          }else {
            this.$router.push(`?platform=${this.platformName}&category=${this.categoryId}&pages=${pages}`) // 换页
          }
        }
      }
  }
</script>

<style lang="less" scoped>
  .dapp-header{
    width: 100%;
    height: 180px;
    background: url(~assets/imgs/dapp-banner.svg) no-repeat;
    /*background-size: 100% 100%;*/
    padding:0px 83px 0;
    margin: 0;
  }
  .Dapps-container{
    /*max-width: 1200px;*/
    /*margin:60px auto;*/
    .no-more{
      width: 100%;
      height: 52px;
      color: #333333;
      font-size: 12px;
      line-height: 52px;
      text-align: center;
    }
  }
</style>
