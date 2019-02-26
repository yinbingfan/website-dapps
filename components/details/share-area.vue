<template>
  <div
    v-if="details.weibo || details.wechat ||details.facebook || details.twitter ||details.telegram ||details.reddit ||details.medium ||details.github ||details.discord || details.qq"
    class="share-area"
  >
    <h2>{{ $t('details.chat') }}</h2>
    <ul class="share-area-lists">
      <li
        v-if="details.facebook"
        class="share-icon-list"
      >
        <div class="share-icon-list-logo">
          <img
            src="~/assets/imgs/top-facebook.png"
            alt=""
          >
          <span>Facebook group</span>
        </div>
        <a
          class="join"
          :href="details.facebook"
          target="_blank"
        >
          {{ $t('details.join') }}
        </a>
      </li>
      <li
        v-if="details.twitter"
        class="share-icon-list"
      >
        <div class="share-icon-list-logo">
          <img
            src="~/assets/imgs/twitter-top.png"
            alt=""
          >
          <span>Twitter</span>
        </div>
        <a
          class="join"
          :href="details.twitter"
          target="_blank"
        >
          {{ $t('details.join') }}
        </a>
      </li>
      <li
        v-if="details.telegram"
        class="share-icon-list"
      >
        <div class="share-icon-list-logo">
          <img
            src="~/assets/imgs/telegram.png"
            alt=""
          >
          <span>Telegram</span>
        </div>
        <a
          class="join"
          :href="details.telegram"
          target="_blank"
        >
          {{ $t('details.join') }}
        </a>
      </li>
      <li
        v-if="details.reddit"
        class="share-icon-list"
      >
        <div class="share-icon-list-logo">
          <img
            src="~/assets/imgs/reddit.png"
            alt=""
          >
          <span>Reddit</span>
        </div>
        <a
          class="join"
          :href="details.reddit"
          target="_blank"
        >
          {{ $t('details.join') }}
        </a>
      </li>
      <li
        v-if="details.medium"
        class="share-icon-list"
      >
        <div class="share-icon-list-logo">
          <img
            src="~/assets/imgs/medium.png"
            alt=""
          >
          <span>Medium</span>
        </div>
        <a
          class="join"
          :href="details.medium"
          target="_blank"
        >
          {{ $t('details.join') }}
        </a>
      </li>
      <li
        v-if="details.github"
        class="share-icon-list"
      >
        <div class="share-icon-list-logo">
          <img
            src="~/assets/imgs/github.png"
            alt=""
          >
          <span>Github</span>
        </div>
        <a
          class="join"
          :href="details.github"
          target="_blank"
        >
          {{ $t('details.join') }}
        </a>
      </li>
      <li
        v-if="details.discord"
        class="share-icon-list"
      >
        <div class="share-icon-list-logo">
          <img
            src="~/assets/imgs/discord.png"
            alt=""
          >
          <span>Discord</span>
        </div>
        <a
          class="join"
          :href="details.discord"
          target="_blank"
        >
          {{ $t('details.join') }}
        </a>
      </li>
      <li
        v-if="details.qq"
        class="share-icon-list"
      >
        <div class="share-icon-list-logo">
          <img
            src="~/assets/imgs/qq.png"
            alt=""
          >
          <span>QQ</span>
        </div>
        <a
          class="join"
          :href="details.qq"
          target="_blank"
        >
          {{ $t('details.join') }}
        </a>
      </li>
      <li
        v-if="details.weibo"
        class="share-icon-list"
      >
        <div class="share-icon-list-logo">
          <img
            src="~/assets/imgs/weibo.png"
            alt=""
          >
          <span>{{ $t('details.Weibo') }}</span>
        </div>
        <a
          class="join"
          :href="details.weibo"
          target="_blank"
        >
          {{ $t('details.join') }}
        </a>
      </li>
      <li
        v-if="details.wechat"
        class="share-icon-list"
      >
        <div class="share-icon-list-logo">
          <img
            src="~/assets/imgs/wechat.png"
            alt=""
          >
          <span>Wechat group</span>
        </div>
        <div
          class="join"
          @mouseenter="showQrcode"
          @mouseleave="hideQrcode"
        >
          {{ $t('details.join') }}
        </div>

        <div
          v-if="erwei"
          class="erweima"
        >
          <qriously
            :value="details.wechat"
            :size="size"
            :background-alpha="backgroundAlpha"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "ShareArea",
      props: {
        details: {
          type: Object,
          default: () => []
        }
      },

      data(){
          return{
            langCode: this.$store.state.locale,
            erwei:false,
            value: 'https://www.baidu.com',
            size: 90,
            backgroundAlpha:1
          }
        },
        mounted(){

        },
       methods: {
         showQrcode(){
           this.erwei= true
          },
         hideQrcode(){
           this.erwei= false
         }
        }
    }
</script>

<style lang="less" scoped>

  .share-area{
    h2{
      font-size:22px;
      color:rgba(12,12,42,1);
      line-height:26px;
    }
    .share-area-lists{

      .share-icon-list{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
        position: relative;
        .share-icon-list-logo{
          display: flex;
          align-items: center;
          span{
            font-size:14px;
            color:rgba(12,12,42,0.7);
            line-height:17px;
          }
          img{
            margin-right: 10px;
          }
        }
        .join{
          padding: 1px 10px;
          cursor: pointer;
          transition: all .2s ease;
          display: flex;
          align-items: center;
          border:1px solid rgba(35,46,189,1);
          border-radius: 4px;
          font-size:12px;
          color:rgba(12,12,42,1);
          /*line-height:18px;*/
          /*height:18px;*/
        }
        .erweima{
          width: 80px;
          height: 80px;
          position: absolute;
          right: 0px;
          top: 30px;
          img{
            width: 80px;
            height: 80px;
          }
        }
      }

    }

  }
</style>
