<template>
  <div
    v-if="details.developer"
    class="Developer"
  >
    <h2>{{ $t('details.developer') }}</h2>
    <a href="#">
      {{ details.developer }}
    </a>
  </div>
</template>

<script>
    export default {
      name: "DeveloperArea",
      props: {
        details: {
          type: Object,
          default: () => []
        }
      }
    }
</script>

<style lang="less" scoped>
  .Developer{
    margin: 5px 0;
    h2{
      margin: 15px 0;
      font-size:22px;
      color:rgba(12,12,42,1);
      line-height:26px;
    }
    a{
      padding: 5px 8px;
      background:rgba(232,238,244,1);
      border-radius: 4px;
      font-size:14px;
      color:rgba(12,12,42,0.7);
      line-height:17px;
    }
  }
</style>
