<template>
  <div class="container">
    <common-header />
    <div class="wrap">
      <nuxt ref="page" />
    </div>
    <common-footer />
  </div>
</template>
<script>
  import commonHeader from '~/components/common/common-header';
  import commonFooter from '~/components/common/common-footer'
  export default {
    components: {
      commonHeader,
      commonFooter
    },
    methods: {

    }
  }
</script>

<style lang="less">
  @import '~assets/css/common.less';
  .header-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
  }

  .wrap {
    display: flex;
    justify-content: center;
    min-height: 500px;
  }
</style>
