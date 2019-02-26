<template>
  <div class="connect-privacy-content">
    <div class="body-part">
      <div class="">
        <p>Unsubscription</p>
        <p>Unsubscribe</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Subscribe",
    head () {
      return {
        meta: [
          {  rel: 'nofollow' },
        ]
      }
    },
    methods:{

    },
  }
</script>

<style lang="less"  scoped>
  .connect-privacy-content{
    width: 1024px;
    background: #FFFFFF;
    border-radius: 3px;
    position: relative;
    margin: 20px 0;
    padding: 20px 0;
  }
  .body-part{
    margin: 0 30px;
    h2{
      font-family: Helvetica-Bold;
      font-size: 14px;
      color: #333333;
      letter-spacing: 0;
      text-align: left;
      margin-top: 30px;
    }
    h5{
      font-family: Helvetica;
      font-size: 12px;
      color: #999999;
      letter-spacing: 0;
      text-align: left;
      margin-top: 5px;
    }
    p{
      font-family: Helvetica;
      font-size: 14px;
      color: #666666;
      letter-spacing: 0;
      text-align: left;
      line-height: 20px;
      margin: 20px 0;
      span{
        display: block;
        color: #333333;
      }
    }
  }
</style>
