<template>
  <div class="previous-next">
    <div
      class="previous-button"
      @click="previous"
    >
      {{ $t('Dapps.PREVIOUS') }}
    </div>
    <div
      class="previous-button"
      @click="next"
    >
      {{ $t('Dapps.NEXT') }}
    </div>
  </div>
</template>

<script>
    export default {
        name: "PreviousNext",
        methods:{
          next(){

          },
          previous(){

           }
        }
    }
</script>

<style lang="less" scoped>
  .previous-next{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .previous-button{
      padding:5px;
      background: rgba(51,51,51,.1);
      color: #7f828b;
    }
  }
</style>
