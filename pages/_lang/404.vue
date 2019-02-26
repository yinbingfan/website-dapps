<template>
  <div class="no-find">
    <img
      src="~/assets/imgs/404.png"
      alt=""
    >
    <p>404</p>
  </div>
</template>

<script>
export default {
    name: 'NoFind'
}
</script>

<style lang="less">
  .no-find{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    img{

    }
    p{
      line-height: 50px;
      font-size: 28px;
      color: #232EBD;
    }
  }
</style>
