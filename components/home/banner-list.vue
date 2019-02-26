<template>
  <div class="featured-list-wrapper">
    <ul class="featured-list">
      <li
        v-for="(item,key) in banner "
        :key="key"
        class="FeaturedDappListItem has-promotion"
      >
        <a
          class="link"
          @click="bannerGoto($event,item.adFlag,item.dappId,item.adUrl)"
        >
          <div class="product-image-wrapper">
            <img
              v-lazy="item.imgurl"
              alt=""
            >
          </div>
          <div class="info">
            <h4 class="name">
              {{ item.title | setString(20) }}
            </h4>
            <p class="tagline">
              {{ item.desc | setString(35) }}
            </p>
            <span class="promoted">
              {{ item.platform }}
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "BannerList",
      props: {
        banner: {
          type: Array,
          default: () => []
        }
      },
      data(){
        return{
          langCode: this.$store.state.locale
        }
      },
      methods:{
        bannerGoto(e, adFlag,id,adUrl) {
          e.preventDefault()
          if(adFlag) {
            window.open(adUrl)
          } else {
            this.$router.push(`/${this.$store.state.locale}/dapp/${id}`)
          }

        }
      }

    }
</script>

<style lang="less" scoped>
    .featured-list-wrapper{
      position: relative;
      max-width: 1200px;
      margin: 40px auto 0;
      .featured-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .FeaturedDappListItem {
          /*width:282px;*/
          /*width:23.8%;*/
          height:260px;
          background:rgba(255,255,255,1);
          box-shadow:-2px 3px 10px 12px rgba(34,34,34,0.06);
          border-radius:2px;
          cursor: pointer;
          transition: all .2s ease;
          &:hover {
            transform: translateY(-2px)
          }
          .link {
            position: relative;
            width: 100%;
            .product-image-wrapper {
              height: 180px;
              display:flex;
              align-items:center;
              justify-content:center;
              img{
                width: 100%;
                height: 100%;
                &[lazy=error]{
                  background: url('~assets/imgs/banner-defult.svg') no-repeat;
                  background-size: 100% 100%;
                }
                &[lazy=loading]{
                  background: url('~assets/imgs/banner-defult.svg') no-repeat;
                  background-size: 100% 100%;
                }
              }
            }
            .info{
              position: relative;
              width: 100%;
              height: 80px;
              border-bottom-left-radius: 4px;
              padding: 10px 12px;
              text-align: center;
              .name{
                font-size:18px;
                color:rgba(0,0,0,1);
                line-height:22px;
              }
              .tagline{
                font-size:14px;
                color:rgba(0,0,0,0.7);
                line-height:17px;
              }
              .promoted{
                text-transform: uppercase;
                font-size: .7rem;
                display: inline-block;
                position: absolute;
                top: 0;
                right: 0;
                z-index: 5;
                padding: 3px 5px;
                font-weight: 600;
                background: #eee;
                border-bottom-left-radius: 4px;
              }
            }
          }
        }
      }
    }
</style>
