<template>
  <a
    v-if="details.websiteUrl"
    :href="details.websiteUrl"
    target="_blank"
    class="details-button"
  >
    <div class="launch">
      {{ $t('details.launch') }}
    </div>
  </a>
</template>

<script>
    export default {
      name: "LinkButton",
      props: {
        details: {
          type: Object,
          default: () => []
        }
      }
    }
</script>

<style lang="less" scoped>
.details-button{
  /*width: 100%;*/
  /*background: #f6f6f6;*/
  /*height: 60px;*/
  margin: 20px 0;
  display: flex;
  align-items:center;
  justify-content: center;
  /*width:720px;*/
  height:50px;
  background:rgba(35,46,189,1);
  box-shadow:0px 0px 12px 2px rgba(165,175,197,0.36);
  border-radius:2px;
  .launch{
    font-size:16px;
    font-family:Helvetica-Bold;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:19px;
  }
}
</style>
