<template>
  <div class="details-content">
    <div class="details-content-left">
      <details-description :details="details" />
      <banner-area :details="details" />
      <link-button :details="details" />
      <default-bottom />
      <smart-contract :details="details" />
    </div>
    <div class="details-content-right">
      <share-area :details="details" />
      <default-bottom v-if="details.weibo || details.wechat ||details.facebook || details.twitter ||details.telegram ||details.reddit ||details.medium ||details.github ||details.discord || details.qq" />
      <statistics-area :details="details" />
      <default-bottom />
      <platform-area :details="details" />
      <default-bottom v-if="details.platform" />
      <tags-area :details="details" />
      <default-bottom v-if="details.tags.length>0" />
      <developer-area :details="details" />
      <default-bottom v-if="details.developer" />
      <share-icon :details="details" />
    </div>
  </div>
</template>

<script>
  import bannerArea from '~/components/details/banner-area.vue';
  import detailsDescription from '~/components/details/details-description.vue';
  import developerArea from '~/components/details/developer-area.vue';
  import platformArea from '~/components/details/platform-area.vue';
  import shareArea from '~/components/details/share-area.vue';
  import smartContract from '~/components/details/smart-contract.vue';
  import shareIcon from '~/components/details/share-icon.vue';
  import statisticsArea from '~/components/details/statistics-area.vue';
  import tagsArea from '~/components/details/tags-area.vue';
  import linkButton from '~/components/details/link-button.vue';
  import defaultBottom from '~/components/details/default-bottom.vue';

  export default {
    components: {
      detailsDescription,
      bannerArea,
      developerArea,
      platformArea,
      shareArea,
      smartContract,
      shareIcon,
      statisticsArea,
      tagsArea,
      linkButton,
      defaultBottom
    },
    props: {
      details: {
        type: Object,
        default: () => []
      }
    },

    data(){
      return{
        locale: this.$store.state.locale,
      }
    },
    mounted() {
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
  .details-content{
    display: flex;
    justify-content: center;
    background: #ffffff;
    padding:38px 50px 65px;
      .details-content-left{
        /*flex: 1;*/
        margin-right:60px;
        /*width: 720px;*/
      }
      .details-content-right{
        display: flex;
        flex-flow: column;
        width: 320px;
      }
  }
</style>
