<template>
  <div class="footer">
    <div class="foot">
      <div class="footer-logo">
        <a href="">
          <img
            src="~/assets/imgs/logo-top.png"
            alt=""
          >
        </a>
        <div class="footer-social">
          <a href="">
            <img
              src="~/assets/imgs/facebook-bottom.png"
              alt=""
            >
          </a>
          <a href="">
            <img
              src="~/assets/imgs/twitter-footer.png"
              alt=""
            >
          </a>
          <a href="">
            <img
              src="~/assets/imgs/in-bottom.png"
              alt=""
            >
          </a>
          <a href="">
            <img
              src="~/assets/imgs/goole-bottom.png"
              alt=""
            >
          </a>
        </div>
      </div>
      <div class="footer-content-link">
        <!--第一列-->
        <ul>
          <li class="title">
            <a href="mailto:327079626@qq.com?subject=test">
              {{ $t('footer.contentUs') }}
            </a>
          </li>
          <li>
            <a href="">
              {{ $t('footer.about') }}
            </a>
          </li>
          <li>
            <a href="">
              {{ $t('footer.newsLetter') }}
            </a>
          </li>
          <li>
            <a href="">
              {{ $t('footer.blog') }}
            </a>
          </li>
          <li>
            <a :href="`/${langCode}/terms`">
              {{ $t('footer.termsAndConditions') }}
            </a>
          </li>
          <li>
            <a :href="`/${langCode}/privacy`">
              {{ $t('footer.privacyPolicy') }}
            </a>
          </li>
        </ul>
        <!--第二列-->
        <ul>
          <li>
            <a href="">
              {{ $t('footer.submitDApp') }}
            </a>
          </li>
          <li>
            <a href="">
              {{ $t('footer.promoteDApp') }}
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-logo">
        <p>Copyright © 2018 - 2019  DAppShark</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "CommonFooter",
      data(){
          return{
            langCode: this.$store.state.locale,
          }
      }
    }
</script>

<style lang="less" scoped>
  .footer{
    font-size: 1rem;
    background: #252831;
    display: flex;
    justify-content: left;
    padding:61px 20px;
    width: 100%;
      .foot{
        display: flex;
        justify-content: space-between;
        width: 1200px;
        padding-right:180px;
        padding-left:10px;
        margin: 0 auto;
        .footer-content-link{
          display: flex;
          ul{
            margin-right: 85px;
            li{
              margin-bottom:14px;
              a{
                font-size: 14px;
                color:rgba(255,255,255,0.6);
              }
            }
          }

        }
        .footer-social{
          margin-top:-15px;
          margin-left:20px;
          a{
            img{
              width:20px;
              height:20px;
              margin-right:10px;
            }
          }

        }
      }
    .footer-logo{
      margin-left:-31px;
      a{
        img{
          width:167px;
          margin-top: -45px;
        }
      }
      p{
        font-size: 14px;
        color:rgba(255,255,255,0.6);
      }
    }
  }
</style>
