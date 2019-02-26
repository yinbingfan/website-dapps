<template>
  <div>
    <div
      v-show="langCode==='zh'"
      class="share-icon"
    >
      <h2>{{ $t('details.share') }}</h2>
      <social-sharing
        v-cloak
        :url="url"
        :title="details.title"
        :quote="quote"
        :twitter-user="twitteruser"
        inline-template
      >
        <div class="share-img">
          <network
            network="facebook"
            class="share-icon-list"
          >
            <img
              src="~/assets/imgs/Facebook.png"
              alt=""
            >
          </network>
          <network
            network="twitter"
            class="share-icon-list"
          >
            <img
              src="~/assets/imgs/twitter.png"
              alt=""
            >
          </network>
        </div>
      </social-sharing>
    </div>
    <div
      v-show="langCode==='ja'"
      class="share-icon"
    >
      <h2>{{ $t('details.share') }}</h2>
      <social-sharing
        v-cloak
        :url="url"
        :title="details.title"
        :quote="quote"
        :twitter-user="twitteruser"
        inline-template
      >
        <div class="share-img">
          <network
            network="facebook"
            class="share-icon-list"
          >
            <img
              src="~/assets/imgs/Facebook.png"
              alt=""
            >
          </network>
          <network
            network="twitter"
            class="share-icon-list"
          >
            <img
              src="~/assets/imgs/twitter.png"
              alt=""
            >
          </network>
        </div>
      </social-sharing>
    </div>
    <div
      v-show="langCode==='en'"
      class="share-icon"
    >
      <h2>{{ $t('details.share') }}</h2>
      <social-sharing
        v-cloak
        :url="url"
        :title="details.title"
        :quote="quote"
        :twitter-user="twitteruser"
        inline-template
      >
        <div class="share-img">
          <network
            network="facebook"
            class="share-icon-list"
          >
            <img
              src="~/assets/imgs/Facebook.png"
              alt=""
            >
          </network>
          <network
            network="twitter"
            class="share-icon-list"
          >
            <img
              src="~/assets/imgs/twitter.png"
              alt=""
            >
          </network>
        </div>
      </social-sharing>
    </div>
    <div
      v-show="langCode==='ko'"
      class="share-icon"
    >
      <h2>{{ $t('details.share') }}</h2>
      <social-sharing
        v-cloak
        :url="url"
        :title="details.title"
        :quote="quote"
        :twitter-user="twitteruser"
        inline-template
      >
        <div class="share-img">
          <network
            network="facebook"
            class="share-icon-list"
          >
            <img
              src="~/assets/imgs/Facebook.png"
              alt=""
            >
          </network>
          <network
            network="twitter"
            class="share-icon-list"
          >
            <img
              src="~/assets/imgs/twitter.png"
              alt=""
            >
          </network>
        </div>
      </social-sharing>
    </div>
  </div>
</template>

<script>
    export default {
      name: "ShareIcon",
      props: {
        details: {
          type: Object,
          default: () => []
        }
      },

      data(){
        return{
          url:"",
          title:"",
          description:"",
          quote:"",
          twitteruser:"",
          langCode: this.$store.state.locale
        }
      },
      mounted(){
        /*
       * 分享链接的配置
       * */
        this.url=document.location.href;//分享的url
        this.title=this.details.title;//分享的标题
        this.description=this.details.title;//分享的描述
        this.quote=this.details.title;//facebook的quote，只有facebook使用
        this.twitteruser=this.setTwitterUser(this.langCode);//Twitter user，只有twitter使用
      },
      methods:{
        setTwitterUser(lang) {
          let twitterUrl='';
          switch(lang) {
            case 'ja':
              twitterUrl = '';
              break;
            case 'zh':
              twitterUrl = '';
              break;
            case 'ko':
              twitterUrl = '';
              break;
            case 'en':
              twitterUrl = '';
              break;
            default:
              twitterUrl = ''
          }
          return twitterUrl
        },
      }
    }
</script>

<style lang="less">
.share-icon{
  h2{
    margin: 15px 0;
    font-size:22px;
    color:rgba(12,12,42,1);
    line-height:26px;
  }
  .share-img{
    display: flex;
    .share-icon-list{
      margin-right: 10px;
    }
    span{
      cursor: pointer;
      display: block;
      img{
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>
