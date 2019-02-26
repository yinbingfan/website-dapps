<template>
  <div class="detail-region">
    <div class="details-items">
      <details-content :details="dAppDetails" />
    </div>
    <common-newsletter-footer />
  </div>
</template>

<script>
  import detailsContent from '~/components/details/details-content.vue';
  import commonNewsletterFooter from '~/components/common/common-newsletter-footer';
  export default {
    components: {
      detailsContent,
      commonNewsletterFooter
    },
    head () {
      return {
        title: this.dAppDetails.name+'-'+this.dAppDetails.title,
        meta: [
          { hid: 'details', name: 'referrer',content: 'no-referrer' }
        ]
      }
    },
    data(){
      return{
        langCode: this.$store.state.locale,
        dAppDetails: {
          tags: []
        },
      }
    },
    async asyncData({store, params, redirect}) {
      let details = await store.dispatch('FETCH_DETAILS', {
        id: params.id,
        langCode:store.state.locale
      })
      if(!details.data) {
        return redirect(`/${store.state.locale}/404`)
      }
      if(details.data) {
        store.commit('SET_DEFAULT_LANG', store.state.locale)
        store.commit('SET_DETAILS_STATE', true)

      } else {
        store.commit('SET_DETAILS_STATE', false)
      }
      return {
        dAppDetails: details.data
      }

    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style lang="less">
  .detail-region{
    width: 100%;
    background:rgba(243,247,251,1);
  }
  .details-items{
    /*max-width: 1200px;*/
    margin: 40px auto;
  }
</style>
