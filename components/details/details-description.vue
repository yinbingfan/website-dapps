<template>
  <div class="details-top">
    <div class="details-logo">
      <img
        v-lazy="details.logoUrl"
        alt=""
      >
      <div class="ecosystem">
        <div class="pantheon">
          {{ details.name }}
        </div>
        <div
          v-if="details.category"
          class="ecosystem-tag"
          :style="{'background':`rgba(${setColor(details.categoryId)})`,'color':setFontColor(details.categoryId)}"
        >
          {{ details.category }}
        </div>
      </div>
    </div>
    <p class="details-des">
      {{ details.description }}
    </p>
  </div>
</template>

<script>
  export default {
    name: "DetailsDescription",
    props: {
      details: {
        type: Object,
        default: () => []
      }
    }
  }
</script>

<style lang="less" scoped>
  .details-top{
    .details-logo{
      display: flex;
      img{
        width: 100px;
        height: 100px;
        border-radius: 2px;
        margin-right: 40px;
        &[lazy=error]{
          background: url('~assets/imgs/recently-defult.png') no-repeat;
          background-size: 100% 100%;
        }
        &[lazy=loading]{
          background: url('~assets/imgs/recently-defult.png') no-repeat;
          background-size: 100% 100%;
        }
      }
      .ecosystem{
        color: #524375;
        .pantheon{
          letter-spacing: .25px;
          font-size:20px;
          font-family:Helvetica-Bold;
          font-weight:bold;
          color:rgba(12,12,42,1);
          line-height:24px;
          margin-bottom: 10px;
        }
        .ecosystem-tag{
          width: max-content;
          /*background: #ffc8aa;*/
          text-decoration: none;
          display: block;
          padding: 5px 12px;
          border-radius: 4px;
          text-align: center;
          font-size: 12px;
        }
      }
    }
    .details-des{
      text-align: left;
      padding: 20px 10px;
      margin-top: 0;
      font-size:14px;
      font-family:Helvetica;
      color:rgba(0,0,0,0.7);
      line-height:21px;
      word-break: break-word;
    }
  }
</style>
