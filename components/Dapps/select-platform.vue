<template>
  <div class="drop-down">
    <h2>{{ $t('Dapps.platform') }}</h2>
    <el-select
      v-model="value6"
      class="select-platform"
      @change="handleChange"
    >
      <el-option
        v-for="item in items"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
        <span style="float: left">
          {{ item.label }}
        </span>
      </el-option>
    </el-select>
  </div>
</template>

<script>
  export default {
    props: {
      platformName: {
        type: String,
        default: 'All'
      }

    },
    data() {
      return {
        langCode: this.$store.state.locale,
        items: [
          {
            value: 'ETH',
            label: 'ETH'
          },
          {
            value: 'EOS',
            label: 'EOS'
          },
          {
            value: 'All',
            label: 'All'
          }
        ],
        value6: this.platformName
      }
    },
    watch: {
      '$route' (to) {
        this.value6= to.query.platform
      },
    },
    methods:{
      handleChange(key){
        this.$router.push(`/${this.langCode}/dapps?platform=${key}&&category=`)
      }
    }
  }
</script>
<style lang="less" scoped>
  .drop-down{
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    flex-flow: column;
    h2{
      font-size:22px;
      font-family:PingFangSC-Semibold;
      font-weight:600;
      color:rgba(12,12,42,1);
      line-height:30px;
      margin:30px 0;
    }
    .select-platform{
      width: 390px;
      height: 40px;
    }
  }



</style>
