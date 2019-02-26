<template>
  <div class="statistics">
    <h2>{{ $t('details.statistics') }}</h2>
    <ul class="statistics-lists">
      <li class="statistics-list">
        <div class="statistics-list-logo">
          <img
            src="~/assets/imgs/Balance.png"
            alt=""
          >
          <span>{{ $t('details.Balance') }}</span>
        </div>
        <div class="statistics-list-data">
          {{ details.balance |PrecentFilter }}
        </div>
      </li>
      <li class="statistics-list">
        <div class="statistics-list-logo">
          <img
            src="~/assets/imgs/Transactions.png"
            alt=""
          >
          <span>{{ $t('details.Transactions') }} (24h)</span>
        </div>
        <div class="statistics-list-data">
          {{ details.tx24h |PrecentFilter }}
        </div>
      </li>
      <li class="statistics-list">
        <div class="statistics-list-logo">
          <img
            src="~/assets/imgs/crowd.png"
            alt=""
          >
          <span>{{ $t('details.users') }} (24h)</span>
        </div>
        <div class="statistics-list-data">
          {{ details.users24h |PrecentFilter }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "StatisticsArea",
      props: {
        details: {
          type: Object,
          default: () => []
        }
      }
    }
</script>

<style lang="less" scoped>
  .statistics{
    h2{
      font-size:22px;
      color:rgba(12,12,42,1);
      line-height:26px;
    }
    .statistics-lists{
      .statistics-list{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 0;
        .statistics-list-logo{
          display: flex;
          align-items: center;
          span{
            font-size:14px;
            color:rgba(12,12,42,0.7);
            line-height:17px;
          }
          img{
            width: 20px;
            height: 20px;
            margin-right: 10px;
          }
        }
        .statistics-list-data{
          font-size:14px;
          color:rgba(12,12,42,0.7);
          line-height:17px;
        }

      }
    }
  }
</style>
