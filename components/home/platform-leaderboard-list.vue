<template>
  <div class="FeaturedRankingByPlatformListItem">
    <h3 class="title">
      <a
        class="link"
        :href="`/dapp/222`"
      >
        Ethereum
        <img
          src="~assets/imgs/more.png"
          alt=""
        >
      </a>
      <span class="label-dau">
        用户 (24小时)
      </span>
    </h3>
    <ul class="dapp-list">
      <li class="dapp-item">
        <span class="dapp-rank">
          <span>1</span>
        </span>
        <a
          :href="`/dapp/222`"
          class="dapp-icon-wrapper"
        >
          <img
            src="~assets/imgs/news-img-test.png"
            width="32"
            height="32"
            class="dapp-icon"
          >
        </a>
        <span class="dapp-name">
          <a
            href=""
            class=""
          >
            Status
          </a>
        </span>
        <span class="dapp-dau">
          <span>104</span>
        </span>
      </li>
      <li class="dapp-item">
        <span class="dapp-rank">
          <span>1</span>
        </span>
        <a
          href=" "
          class="dapp-icon-wrapper"
        >
          <img
            src="~assets/imgs/news-img-test.png"
            width="32"
            height="32"
            class="dapp-icon"
          >
        </a>
        <span class="dapp-name">
          <a
            href=""
            class=""
          >
            Status
          </a>
        </span>
        <span class="dapp-dau">
          <span>104</span>
        </span>
      </li>
      <li class="dapp-item">
        <span class="dapp-rank">
          <span>1</span>
        </span>
        <a
          href=" "
          class="dapp-icon-wrapper"
        >
          <img
            src="~assets/imgs/news-img-test.png"
            width="32"
            height="32"
            class="dapp-icon"
          >
        </a>
        <span class="dapp-name">
          <a
            href=""
            class=""
          >
            Status
          </a>
        </span>
        <span class="dapp-dau">
          <span>104</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "PlatformLeaderboardList"
    }
</script>

<style lang="less" scoped>

  .FeaturedRankingByPlatformListItem{
    margin: 10px;
    .title{
      font-size: 13px;
      font-weight: 600;
      letter-spacing: -.5px;
      margin-top: 10px;
      margin-bottom:10px;
      position: relative;
      .label-dau {
        font-weight: 400;
        font-size: 10px;
        position: absolute;
        right: 0;
        top: 0px;
      }
      .link{
        display: flex;
        align-items: center;
      }
    }
    .dapp-list{
      margin-top: 5px;
      .dapp-item{
        display: flex;
        align-items: center;
        background: #fafafa;
        border-radius: 4px;
        box-shadow: 0 5px 10px rgba(51,51,51,.05);
        margin-bottom: 7px;
        padding: 10px;
        .dapp-rank {
          padding: 5px;
          background: #524375;
          margin: -10px 15px -10px -10px;
          font-weight: 700;
          height: 52px;
          width: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: .95rem;
          color: #fafafa;
          line-height: 0;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }
        .dapp-icon-wrapper {
          display: block;
          margin-right: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          text-decoration: none;
          .dapp-icon{
            width: 32px;
            height: 32px;
            border-radius: 4px;
          }
        }
        .dapp-dau{
          font-family: Inconsolata,monospace;
          line-height: 1;
          font-size: 12px;
          margin-left: auto;
        }
      }
    }

  }

</style>
