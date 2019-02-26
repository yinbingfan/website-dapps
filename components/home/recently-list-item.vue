<template>
  <div class="home_wrap">
    <!--list列表-->
    <div class="list_wrap">
      <el-row :gutter="20">
        <el-col
          v-for="(item,key) in recentlyList"
          :key="key"
          :span="12"
        >
          <a
            class="grid-content"
            :href="`/${$store.state.locale}/dapp/${item.id}`"
          >
            <div class="list_item">
              <img
                v-lazy="item.logoUrl"
                alt=""
                class="list_item_img"
              >
              <div class="list_item_content">
                <p>{{ item.name | setString(20) }}</p>
                <div>{{ item.title | setString(20) }}</div>
              </div>
            </div>
            <div
              class="list_info_top"
              :style="{backgroundColor:`rgba(${setColor(item.categoryId)})`}"
            >
              <p
                class="list_info"
                :style="{'color':setFontColor(item.categoryId)}"
              >
                {{ item.category }}
              </p>
            </div>
            <!--<div-->
            <!--class="list_info_wrap"-->
            <!--:style="{backgroundColor:setColor(item.categoryId)}"-->
            <!--&gt;-->
            <!--<p class="list_info">-->
            <!--{{ item.category }}-->
            <!--</p>-->
            <!--</div>-->
          </a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
      name: "RecentlyListItem",
      props: {
        recentlyList: {
          type: Array,
          default: () => []
        }
      }
    }
</script>

<style lang="less" scoped>
  .home_wrap{
    width: 100%;
    .list_wrap{
      max-width: 1220px;
      margin:  0 auto 80px;
      .grid-content {
        display: block;
        margin-top:20px;
        position: relative;
        box-shadow: 0px 2px 10px 7px rgba(207,207,219,0.14);
        transition: all .4s ease;
        &:hover {
          transform: translateY(-2px)
        }
          .list_item{
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            background-color: #fff;
            height:150px;
            display: flex;
            align-items: center;
            padding:0 25px 0 25px;
            .list_item_img{
              margin:0 20px 0 0;
              width: 42px;
              height: 42px;
              border-radius: 4px;
              &[lazy=error]{
                background: url('~assets/imgs/recently-defult.png') no-repeat;
                background-size: 100% 100%;
              }
              &[lazy=loading]{
                background: url('~assets/imgs/recently-defult.png') no-repeat;
                background-size: 100% 100%;
              }
            }
            .list_item_content{
              p{
                opacity: 0.8;
                -webkit-font-smoothing: antialiased;
                color: #524375;
                letter-spacing: -.25px;
                max-height:42px;
                overflow: hidden;
                font-size:18px;
                font-weight:bold;
                color:rgba(0,0,0,1);
                line-height:22px;
              }
              div{
                max-width: 250px;
                margin-left: auto;
                margin-right: auto;
                overflow: hidden;
                height:17px;
                font-size:14px;
                font-family:Helvetica;
                color:rgba(0,0,0,0.6);
                line-height:17px;
                margin-top: 10px;
              }
            }
          }
          .list_info_wrap{
            padding:8px 20px;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            .list_info{
              text-transform: uppercase;
              font-size: .75rem;
              font-weight: 700;
              flex-grow: 1;
              text-align: left;
            }
          }
        .list_info_top{
          position: absolute;
          top:0;
          left:0;
          padding:6px 20px 7px 10px;
          border-radius:0px 0px 100px 0px;
          .list_info{
            text-transform: uppercase;
            font-size: .75rem;
            font-weight: 700;
            flex-grow: 1;
            text-align: left;
          }
        }

      }
    }
  }

</style>
