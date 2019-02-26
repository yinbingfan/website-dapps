<template>
  <div class="header">
    <div class="head">
      <div class="head-part">
        <img
          class="header-logo"
          src="~/assets/imgs/logo-top.png"
          alt=""
          @click="handlerLogoGoto"
        >
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item
            index="/"
            :class="['el-menu-item-under-default',$store.state.menu == 'home'?'el-menu-item-under': '']"
          >
            {{ $t('nav.home') }}
          </el-menu-item>
          <el-submenu
            index="/dapps"
            :class="['el-menu-item-under-default',$store.state.menu == 'dapps'?'el-menu-item-under': '']"
          >
            <template slot="title">
              DApps
            </template>
            <el-menu-item index="/dapps?platform=ETH&category=">
              ETH
            </el-menu-item>
            <el-menu-item index="/dapps?platform=EOS&category=">
              EOS
            </el-menu-item>
            <!--<el-menu-item v-for="(item, index) in channelList" :key="index" :index="`/dapps?platform=${item.id}`">-->
            <!--{{item.name}}-->
            <!--</el-menu-item>-->
          </el-submenu>
        </el-menu>
      </div>
      <el-dropdown
        size="small"
        class="top-bar-right"
        @command="gotoOtherIndex"
      >
        <span class="el-dropdown-link">
          {{ $t('nav.language') }}
          <i class="el-icon-arrow-down el-icon--right" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-if="$store.state.locale !== 'zh'"
            command="zh"
          >
            中文-汉语
          </el-dropdown-item>
          <el-dropdown-item
            v-if="$store.state.locale !== 'en'"
            command="en"
          >
            English
          </el-dropdown-item>
          <el-dropdown-item
            v-if="$store.state.locale !== 'ja'"
            command="ja"
          >
            日本 - 日本語
          </el-dropdown-item>
          <el-dropdown-item
            v-if="$store.state.locale !== 'ko'"
            command="ko"
          >
            대한민국 - 한국어
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
    export default {
      name: "CommonHeader",
      data(){
        return{
          channelList:[],
          langCode: this.$store.state.locale
        }
      },
      methods:{
        gotoOtherIndex(lan) {
          // window.location.href='/' + lan
          let str=window.location.href
          let href= str.replace(this.langCode, lan)
          window.location.href = href
        },
        handleSelect(key){
          this.$router.push(`/${this.langCode}${key}`)
        },

        handlerLogoGoto(){
          this.$router.push(`/${this.langCode}`)
        }
      }
    }
</script>

<style lang="less" scoped>
  .header{
    width: 100%;
    height: 61px;
    background:linear-gradient(225deg,rgba(43,91,218,1) 0%,rgba(27,35,183,1) 100%);
    .head{
      box-sizing: content-box;
      max-width: 1200px;
      min-width:500px;
      padding:0 20px;
      height: 61px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .head-part{
        display: flex;
        align-items: center;
        .header-logo{
          width:180px;
          margin: 0 20px 0  -23px;
          cursor: pointer;
        }
        .el-menu--horizontal {
          border-bottom: none;
          .el-menu-item.is-active {
            font-weight: inherit;
          }
          .el-submenu .el-submenu__title {
            color: rgba(31,33,35,.65);
            border-bottom: 0!important;
          }
          .el-menu-item {
            border-bottom-width: 0;
            &:hover {

            }
          }
          .el-menu-item-under-default{
            background-color: rgba(0,0,0,0)!important;
            color:#fff!important;
            .el-submenu__title{
              color: #fff!important;
            }
          }
        }
      }
      .top-bar-right{
        margin-right: 20px;
      }
      .el-menu-item-under {
        border-bottom: 2px solid #fff !important;
        .el-submenu__title {

          border-bottom: 2px solid #fff !important;
          background-color: rgba(0,0,0,0)!important;
        }
      }
      .el-dropdown-link{
        color: rgba(255,255,255,0.9);
      }
      .el-dropdown-menu__item{
        color:#fff!important;
      }
    }

  }


</style>
