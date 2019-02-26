<template>
  <ul class="platform-list-item">
    <!--头部-->
    <li class="platform-list-header">
      <div class="platform-list-header-info">
        #
      </div>
      <div class="platform-list-header-info">
        {{ $t('Dapps.Name') }}
      </div>
      <div class="platform-list-header-info">
        {{ $t('Dapps.platform') }}
      </div>
      <div class="platform-list-header-info">
        {{ $t('Dapps.Category') }}
      </div>
      <div class="platform-list-header-info">
        {{ $t('Dapps.Balance') }}
      </div>
      <div class="platform-list-header-info">
        {{ $t('Dapps.Users') }} 24h
      </div>
      <div class="platform-list-header-info">
        {{ $t('Dapps.Tx') }} 24h
      </div>
      <div class="platform-list-header-info">
        {{ $t('Dapps.Volume') }} 24h
      </div>
      <div class="platform-list-header-info">
        {{ $t('Dapps.Tx') }} 7d
      </div>
      <div class="platform-list-header-info">
        {{ $t('Dapps.Volume') }}   7d
      </div>
      <div class="platform-list-header-info">
        User  activity   (30d)
      </div>
    </li>
    <!--列表内容-->
    <li
      v-for="(item, index) in platform.list"
      :key="index"
      class="platform-list-container"
    >
      <div class="DApp-list-info">
        <div class="serial-number">
          {{ index+1 }}
        </div>
      </div>
      <div
        class="DApp-list-info DApp-platform-logo"
        @click="gotoDetail(item.id)"
      >
        <img
          :src="item.logoUrl"
          alt=""
        >
        <div class="name-des">
          <p>{{ item.name | setString(20) }}</p>
          <p>{{ item.description | setString(30) }}</p>
        </div>
      </div>
      <div class="DApp-list-info">
        <div
          :class="[platformName === 'All'?'category-name':'category-title']"
          @click="detailsPlatform(item.platform)"
        >
          {{ item.platform }}
        </div>
      </div>
      <div class="DApp-list-info">
        <div
          class="category-name"
          :style="{'background':`rgba(${setColor(item.categoryId)})`,'color':setFontColor(item.categoryId)}"
          @click="detailsCategory(item.categoryId)"
        >
          {{ item.category | setString(20) }}
        </div>
      </div>
      <div class="DApp-list-info">
        {{ item.balance | formatDouble }}
      </div>
      <div class="DApp-list-info">
        <div>{{ item.users24h | PrecentFilter }}</div>
        <!--<div>+150</div>-->
      </div>
      <div class="DApp-list-info">
        <div>{{ item.tx24h | PrecentFilter }}</div>
        <!--<div class="is-rise">+150</div>-->
      </div>
      <div class="DApp-list-info">
        <div>{{ item.volume24h | formatDouble }}</div>
        <!--<div class="is-negative">+150</div>-->
      </div>
      <div class="DApp-list-info">
        <div>{{ item.tx7d | formatDouble }}</div>
        <!--<div class="is-negative">+150</div>-->
      </div>
      <div class="DApp-list-info">
        {{ item.volume7d | formatDouble }}
      </div>
      <v-chart
        style="width:180px;height:70px;top:20px;display: none"
        :auto-resize="true"
        :options="chartOptions(marketTrend)"
      />
    </li>

    <!--page num-->
    <li
      v-if="platform.list!=''"
      class="load-more-button-container"
    >
      <el-pagination
        class="el-pagination-container"
        background
        layout="prev, pager, next"
        :page-size="platform.pageSize"
        :current-page="platform.page"
        :total="platform.total"
        @current-change="handlerEmitChange"
      />
    </li>
  </ul>
</template>

<script>
  import ECharts from 'vue-echarts'
  import 'echarts/lib/chart/line'
  import 'echarts/lib/component/polar'
    export default {
      name: "PlatformListItem",
      components: {
        'v-chart': ECharts
      },
      props: {
        platform: {
          type: Object,
          default: () => {}
        }
      },
      data(){
        return{
          marketTrend: ["399", "260", "255", "218", "232"],
          langCode: this.$store.state.locale,
          platformName:this.$route.query.platform
        }
      },
      watch: {
        '$route' (to) {
          window.scroll(0,0)
          this.platformName= to.query.platform
        },
      },
      methods:{
        handlerEmitChange(pages) {
          this.$emit('handlerChangePage',pages)
        },
        gotoDetail(id){
          this.$router.push(`/${this.$store.state.locale}/dapp/${id}`)
        },
        detailsCategory(id){
          this.$router.push(`/${this.langCode}/dapps?platform=All&category=${id}`)
        },
        detailsPlatform(name){
          this.$router.push(`/${this.langCode}/dapps?&category=&platform=${name}`)
        },
        chartOptions(trend = []) {
            if(!trend.length) return
            let arr = trend.slice().sort((a,b) => {return a - b})
            let min
            let max
            let interval
            let options
            if(arr[trend.length - 1] < 10) {

              trend = trend.map((i) => {return i * 10000})
              min = Math.floor(Number(arr[0]) * 10000)
              max = Math.ceil(Number(arr[trend.length - 1]) * 10000)
              interval = Math.round((max - min)/2)
              // this.yAxisLabel.min = min/10000
              // this.yAxisLabel.max = max/10000
              // this.yAxisLabel.interval = (interval + min)/10000
            } else {

              // this.yAxisLabel.min = min = Math.floor(arr[0])
              // this.yAxisLabel.max = max = Math.ceil(arr[trend.length - 1])
              // interval = Math.round((max - min)/2)
              // this.yAxisLabel.interval = interval + min
            }
            options = {
              grid: {
                width: 218
              },
              xAxis: {
                type: 'category',
                show: false
              },
              yAxis: {
                type: 'value',
                axisLine: {
                  show: false
                },

                axisLabel: {
                  show: false
                },
                axisTick: {
                  show: false,
                  length: 3
                },
                splitLine: {
                  interval: 1,
                  lineStyle: {
                    color: ['rgba(255,255,255,0.1)']
                  }
                }
              },
              series: [{
                data: trend,
                type: 'line',
                lineStyle: {
                  color: '#F9E650'
                },
                itemStyle: {
                  color: '#F9E650',
                  opacity: 0
                }
              }]
            }
            options.yAxis.min  = min
            options.yAxis.max  = max
            options.yAxis.interval =  interval
            return options
          }
      }
    }
</script>

<style lang="less" scoped>
  .platform-list-item{
    .platform-list-header{
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 50px;
      height: 50px;
      .platform-list-header-info{
        color:rgba(12,12,42,0.65);
        font-size: 14px;
        &:nth-of-type(1){
          width: 50px;
          text-align: center;
        }
        &:nth-of-type(2){
          /*width: 220px;*/
          text-align: left;
        }
        &:nth-of-type(3){
          width: 130px;
          text-align: left;
        }
        &:nth-of-type(4){
          width: 120px;
        }
        &:nth-of-type(5){
          width: 100px;
          text-align: right;
        }
        &:nth-of-type(6){
          width: 96px;
          text-align: right;
        }
        &:nth-of-type(7){
          width: 90px;
          text-align: right;
        }
        &:nth-of-type(8){
          width: 120px;
          text-align: right;
        }
        &:nth-of-type(9){
          width: 90px;
          text-align: right;
          display: none;
        }
        &:nth-of-type(10){
          width: 120px;
          text-align: right;
          display: none;
        }
        &:nth-of-type(11){
          width: 180px;
          text-align: right;
          display: none;
        }
      }
    }
    .platform-list-container{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      background: #fafafa;
      border-radius: 4px;
      box-shadow: 0 0 10px rgba(51,51,51,.1);
      margin-bottom: 6px;
      .DApp-platform-logo{
        display: flex;
        align-items: center;
        img{
          width: 28px;
          height: 28px;
          margin-right: 8px;
        }
        .name-des{
          p{
            text-align: left;
            &:nth-of-type(1){
              /*font-weight: bold;*/
              font-size:14px;
              color:rgba(0,0,0,1);
            }
            &:nth-of-type(2){
              font-size: 14px;
              color:rgba(0,0,0,0.5);
            }
          }

        }

      }
      .DApp-list-info{
        .is-rise{
          color: #1db200;
        }
        .is-negative{
          color: #ff005a;
        }
        .serial-number{
          width: 24px;
          height: 24px;
          line-height: 24px;
          border-radius: 50%;
          text-align: center;
          background:rgba(35,46,189,1);
          color:rgba(255,255,255,1);
        }
        &:nth-of-type(1){
          width: 50px;
          font-weight: 700;
          padding: 0;
          display: flex;
          height: 100%;
          align-items: center;
          justify-content: center;

        }
        &:nth-of-type(2){
          /*width: 220px;*/
          text-align: right;
          cursor: pointer;
        }
        &:nth-of-type(3){
          width: 130px;
          font-size:14px;
          .category-name{
            width: min-content;
            padding: 5px;
            border-radius: 5px;
            background:rgba(239,239,239,1);
            cursor: pointer;
          }
          .category-title{
            width: min-content;
            padding: 5px;
            border-radius: 5px;
            background:rgba(239,239,239,1);
            cursor:default;
          }
        }
        &:nth-of-type(4){
          font-size:14px;
          width: 120px;
          /*display: flex;*/
          cursor: pointer;
          .category-name{
            padding: 5px;
            border-radius: 5px;
          }
        }
        &:nth-of-type(5){
          width: 100px;
          text-align: right;
          font-size:14px;
        }
        &:nth-of-type(6){
          width: 96px;
          text-align: right;
          margin-right: 6px;
          font-size:14px;
        }
        &:nth-of-type(7){
          width: 90px;
          text-align: right;
          font-size:14px;
        }
        &:nth-of-type(8){
          width: 120px;
          text-align: right;
          margin-right: 6px;
          font-size:14px;
        }
        &:nth-of-type(9){
          width: 90px;
          text-align: right;
          display: none;
        }
        &:nth-of-type(10){
          width: 120px;
          text-align: right;
          display: none;
        }
        &:nth-of-type(11){
          width: 120px;
          display: none;
        }
      }
    }
    .load-more-button-container{
      display: flex;
      justify-content: center;
      padding-top: 20px;
    }
  }



</style>
