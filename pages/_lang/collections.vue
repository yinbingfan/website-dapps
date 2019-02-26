<template>
  <div class="Dapp-item-content">
    <div class="recently_added">
      <h2>{{ $t('home.RecentlyAdded') }}</h2>
      <p>{{ $t('home.latestDapps') }}</p>
    </div>
    <recently-list-item
      class="list"
      :recently-list="RecentlyAddList"
    />
    <!--more更多-->
    <div
      v-if="AddIsList"
      class="more"
      @click="loadMoreRecently"
    >
      <span>{{ $t('common.More') }}</span>
      <i class="el-icon-arrow-right" />
    </div>

    <div
      v-if="AddIsEnd"
      class="more"
    >
      <span>{{ $t('common.noMore') }}</span>
    </div>
  </div>
</template>

<script>
  import recentlyListItem from '~/components/home/recently-list-item.vue'

  export default {
    name: "Collections",
    components: {
      recentlyListItem
    },
    data(){
      return{
        pageSize:1,
        AddIsEnd:false,
        AddIsList:false,
        RecentlyAddList:[]
      }
    },
    head () {
      return {
        title: 'Dapp shark - Hunt for the most popular dapp in time',
        meta: [
          { hid: 'collections', name: 'referrer',content: 'no-referrer' }
        ]
      }
    },
    mounted(){
      this.getRecentlyAdd()
    },
    methods:{
      async getRecentlyAdd() {
        let res = await this.$store.dispatch('FETCH_RECENTLY_LISTS', {
          langCode:this.$store.state.locale,
          page:this.pageSize,
          size:8
        });

        if(res.data.length <= 0) {
          this.AddIsEnd = true
          this.AddIsList = false
          return
        }else if(res.data.length>0&&res.data.length<8){
          this.RecentlyAddList = [...this.RecentlyAddList, ...res.data]
          this.AddIsEnd = true
          this.AddIsList = false
          return
        }else {
          this.AddIsEnd = false
          this.AddIsList = true
        }

        this.pageSize++
        this.RecentlyAddList = [...this.RecentlyAddList, ...res.data]

      },
      loadMoreRecently(){
        this.getRecentlyAdd()
      }
    }

  }

</script>

<style lang="less" scoped>
    .Dapp-item-content{
      width:100%;
      min-height: 580px;
      background-color: #F3F7FB;
      .recently_added{
        width: 100%;
        line-height: 50px;
        padding:40px 0;
        text-align: center;
        h2{
          height:30px;
          font-size:22px;
          font-family:Helvetica-Bold;
          font-weight:bold;
          color:rgba(12,12,42,1);
          line-height:26px;
          margin-bottom: 7px;
        }
        p{
          height:20px;
          font-size:14px;
          font-family:Helvetica;
          color:rgba(12,12,42,1);
          line-height:17px;
        }
      }
      .list{
        width:98%;
        margin:0 auto;
      }
      .more{
        font-size: 14px;
        max-width:1200px;
        /*margin:0 auto 60px;*/
        font-family:PingFangSC-Semibold;
        font-weight:bold;
        color:rgba(0,0,0,0.6);
        text-align: center;
        line-height: 40px;
        border-radius: 6px;
        cursor: pointer;
        height:40px;
        background:rgba(255,255,255,1);
        box-shadow:0px 0px 16px 2px rgba(165,175,197,0.1);
        span{
          font-weight: bold;
        }
      }
    }


</style>
