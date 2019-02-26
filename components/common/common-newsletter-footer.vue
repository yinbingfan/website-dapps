<template>
  <div class="newsletter-footer">
    <div class="footer-wrapper">
      <div class="foot-content">
        <div class="newsletter-left">
          <h1>{{ $t('home.StayUpdated') }}</h1>
          <h2>{{ $t('home.SubscribeTo') }}</h2>
        </div>
        <div class="newsletter-right">
          <div clss="input-info">
            <div class="enter_email">
              <input
                id="component-SecondaryCtaMailingList-input"
                v-model="email_txt"
                type="text"
                :placeholder="placeholder"
                :class="input_class"
                @focus="txtfocus()"
                @blur="txtblur()"
                @input="check()"
                @porpertychange="check()"
              >
            </div>
            <div class="enter_btn">
              <button
                v-if="is_btn == false"
                class="subScribe"
              >
                <p v-if="loading == false">
                  {{ $t('home.Subscribe') }}
                </p>
                <p v-else>
                  {{ $t('home.submitting') }}
                </p>
              </button>
              <button
                v-else
                id="subScribe_submit"
                class="subScribe"
                @click="submit"
              >
                {{ $t('home.Subscribe') }}
              </button>
            </div>
          </div>
          <div
            v-if="btn_show == true"
            class="btn-info"
          >
            <p>
              {{ $t('home.thanks') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "CommonNewsletterFooter",
      data(){
          return{
            is_btn:false,
            input_class:"on",
            email_txt:"",
            placeholder:this.$t('home.Enter'),
            btn_show:false,
            loading:false
          }
      },
      methods:{
        check () {
          let reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
          let str = this.email_txt;
          if (reg.test(str)) {
            this.is_btn = true;
          } else {
            this.is_btn = false;
          }
        },
        txtfocus () {
          this.input_class = "off"
        },
        txtblur () {
          this.input_class = "on"
        },
        submit(){
          this.sendEmail()
          this.is_btn = false
          this.loading = true
        },
        async sendEmail() {
          await this.$store.dispatch('FETCH_SUBSCRIBE', {
            email:this.email_txt,
            langCode:this.$store.state.locale
          });
          this.email_txt=''
          this.btn_show = true
          setTimeout( () =>{
            this.loading = false
            // this.is_btn = false
            this.btn_show = false
          },1500)
        },
      }
    }
</script>

<style lang="less" scoped>
  .newsletter-footer{
    width: 100%;
    height: 320px;
    color:black;
    background-image: url("~assets/imgs/newsletter-banner.png");
    background-repeat: no-repeat;
    background-size:100% 100%;
    .footer-wrapper{
      margin: 0 auto;
      .foot-content{
        display: flex;
        justify-content: space-between;
        .newsletter-left{
          flex: 1;
          h1{
            height:53px;
            font-size:44px;
            font-weight:bold;
            color:rgba(0,0,0,1);
            line-height:53px;
          }
          h2{
            width:70%;
            height:50px;
            font-size:18px;
            color:rgba(0,0,0,0.4);
            line-height:25px;
            margin-top:20px
          }
        }
        .newsletter-right{
          height:100%;
          align-items: center;
          margin-top: 33px;
          .enter_btn{
            display: inline-block;
          }
          .enter_email{
            min-width: 300px;
            display: inline-block;
            input{
              padding-left: 20px;
              width:100%;
              height:60px;
              line-height: 60px;
              background:rgba(255,255,255,1);
              box-shadow:0px 2px 14px 10px rgba(200,202,220,0.13);
              border-radius:2px 0px;
              color: black;
              font-size: 12px;
            }
            .on::-webkit-input-placeholder{
              opacity: 1;
              font-size:14px;
            }
            .off::-webkit-input-placeholder{
              color:black;
              opacity: 0.4;
              font-size:14px;
            }
          }
          .subScribe{
            min-width:100px;
            display: inline-block;
            border: 1px solid #fff;
            position: relative;
            transition: all .2s ease;
            cursor: default;
            color: #fff;
            height:60px;
            background:linear-gradient(53deg,rgba(50,61,193,1) 0%,rgba(44,95,220,1) 100%);
            border-radius:0px 3px;
            padding: 0 10px;
          }
          #subScribe_submit{
            opacity: 1;
            cursor: pointer;
          }
          .btn-info{
            margin-left:15px;
            text-align: center;
            margin-top: 30px;
            height:20px;
            font-size:14px;
            color:rgba(49,189,140,1);
            line-height:17px;
          }
        }
      }


    }

  }
</style>
