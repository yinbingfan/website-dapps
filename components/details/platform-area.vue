<template>
  <div
    v-if="details.platform"
    class="platform"
  >
    <h2>{{ $t('details.platform') }}</h2>
    <a>
      {{ details.platform }}
    </a>
  </div>
</template>

<script>
    export default {
      name: "PlatformArea",
      props: {
        details: {
          type: Object,
          default: () => []
        }
      }
    }
</script>

<style lang="less" scoped>
  .platform{
    /*display: flex;*/
    /*align-items: center;*/
    /*margin: 5px 0;*/

    h2{
      margin: 10px 0 20px;
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
