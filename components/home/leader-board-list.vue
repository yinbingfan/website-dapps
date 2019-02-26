<template>
  <ul class="dapp-list">
    <li class="platform-list">
      <div
        class="platform-list-item"
        @click="gotoDapps(platName)"
      >
        <span class="list-item-title">
          {{ platName }}
        </span>
        <img
          src="~assets/imgs/more.png"
          alt=""
          class="list-item-img"
        >
      </div>
      <div class="platform-list-item" />
      <div class="platform-list-item">
        {{ $t('home.Users') }}
        <span class="list-item-h">
          24h
        </span>
      </div>
      <div class="platform-list-item">
        {{ $t('home.Volume') }}
        <span class="list-item-h">
          (24h)
        </span>
      </div>
      <div class="platform-list-item">
        {{ $t('home.Category') }}
      </div>
    </li>
    <li
      v-for="(item,key) in platformList"
      :key="key"
      class="dapp-item"
    >
      <div class="DApp-list-info">
        <div
          class="serial-number"
          :class="`dapp-list-${key}`"
        >
          {{ key+1 }}
        </div>
      </div>
      <div
        class="DApp-list-info DApp-list-info-logo"
        @click="gotoDetail(item.id)"
      >
        <img
          v-lazy="item.logoUrl"
          alt=""
        >
        <p>{{ item.name | setString(20) }}</p>
      </div>

      <div class="DApp-list-info">
        {{ item.users |PrecentFilter }}
      </div>
      <div class="DApp-list-info">
        {{ item.volume |formatDouble }}
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
    </li>
  </ul>
</template>

<script>
  export default {
    name: "LeaderBoardList",
    props: {
      platformList: {
        type: Array,
        default: () => []
      },
      platName: {
        type: String,
        default: ''
      }
    },
    data( ){
      return{
        langCode: this.$store.state.locale
      }
    },
    methods:{
      detailsCategory(id){
        this.$router.push(`/${this.langCode}/dapps?platform=All&category=${id}`)
      },
      gotoDetail(id){
        this.$router.push(`/${this.$store.state.locale}/dapp/${id}`)
      },
      gotoDapps(platName){
        this.$router.push(`/${this.$store.state.locale}/dapps?platform=${platName}&category=`)
      }
    }
  }
</script>

<style lang="less" scoped>
  .dapp-list{
    width: 100%;
    &:nth-of-type(1){
      margin-right: 10px;
    }
    .platform-list{
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 50px;
      .platform-list-item{
        font-size: 14px;
        font-family: Overpass,sans-serif;
        .list-item-h{
          font-size: 10px;
        }
        .list-item-title{
          font-size:14px;
          font-weight:bold;
          color:rgba(12,12,42,1);
          line-height:17px;
          margin-right: 5px;
        }
        .list-item-img{

          height:12px;
        }
        &:nth-of-type(1){
          width: 50px;
          text-align: center;
          display: flex;
          align-items: center;
          font-size: 18px;
          font-weight: 600;
          color:#333;
          cursor: pointer;
        }
        &:nth-of-type(2){
          width: 190px;
          text-align: right;
        }
        &:nth-of-type(3){
          width: 100px;
          text-align: right;
          color:rgba(12,12,42,0.7);
          line-height:17px;
        }
        &:nth-of-type(4){
          width: 120px;
          text-align: right;
          color:rgba(12,12,42,0.7);
          line-height:17px;
        }
        &:nth-of-type(5){
          width: 110px;
          /*text-align: center;*/
          color:rgba(12,12,42,0.7);
          line-height:17px;
          padding-left:25px;
        }
      }

    }

    .dapp-item{
      display: flex;
      justify-content: space-around;
      align-items: center;
      background-color: #ffffff;
      height: 48px;
      margin-bottom: 5px;
      border-radius: 4px;
      .dapp-list-0{
        background:rgba(35,46,189,1);
      }
      .dapp-list-1{
        background:rgba(35,46,189,.9);
      }
      .dapp-list-2{
        background:rgba(35,46,189,.8);
      }
      .dapp-list-3{
        background:rgba(35,46,189,.7);
      }
      .dapp-list-4{
        background:rgba(35,46,189,.6);
      }
      .DApp-list-info-logo{
        display: flex;
        align-items: center;
      }
      .DApp-list-info{
        .serial-number{
          width: 22px;
          height: 22px;
          line-height: 22px;
          border-radius: 50%;
          text-align: center;
        }
        &:nth-of-type(1){
          width: 50px;
          text-align: center;
          font-weight: 700;
          display: flex;
          height: 100%;
          align-items: center;
          justify-content: center;
          color:#fff

        }
        &:nth-of-type(2){
          width: 190px;
          text-align: left;
          p{
            cursor: pointer;
            font-size:14px;
            color:rgba(12,12,42,0.8);
            line-height:17px;
          }
          img{
            width: 26px;
            height: 26px;
            margin:0  6px;
            &[lazy=error]{
              background: url('~assets/imgs/dapp-logo-defult.png') no-repeat;
              background-size: 100% 100%;
            }
            &[lazy=loading]{
              background: url('~assets/imgs/dapp-logo-defult.png') no-repeat;
              background-size: 100% 100%;
            }
          }
        }
        &:nth-of-type(3){
          width: 100px;
          text-align: right;
          font-size:14px;
          color:rgba(12,12,42,0.8);
          line-height:17px;
        }
        &:nth-of-type(4){
          width: 120px;
          text-align: right;
          font-size:14px;
          color:rgba(12,12,42,0.8);
          line-height:17px;
        }
        &:nth-of-type(5){
          width: 110px;
          display: flex;
          /*justify-content: left;*/
          font-size: 13px;
          cursor: pointer;
          .category-name{
            text-decoration: none;
            padding: 5px;
            /*margin: 4px 4px 4px 20px ;*/
            margin-left: 25px;
            border-radius: 5px;
          }
        }
      }
    }
  }


</style>
