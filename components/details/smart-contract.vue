<template>
  <div
    v-if="details.smartContract"
    class="smart-contract"
  >
    <h2>{{ $t('details.smartContract') }}</h2>
    <div
      v-for="(item, index) in details.smartContract"
      :key="index"
      class="contract-lists"
    >
      <div class="contract-addresses">
        <a href="">
          {{ item }}
        </a>
        <button
          v-clipboard:copy="item"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
          type="button"
          class="copy"
          :class="[isActive == index?'is-active':'copy']"
        >
          <span @click="copy(index)">
            {{ $t('details.copy') }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "SmartContract",
      props: {
        details: {
          type: Object,
          default: () => []
        }
      },
      data(){
        return{
          isActive:-1
        }
      },
      methods:{
        onCopy: function () {

        },
        onError: function () {

        },
        copy(index){
          this.isActive=index
        }
      }
    }
</script>

<style lang="less" scoped>
  .smart-contract{
    h2{
      color: #000000;
      font-weight: bold;
      margin: 10px 0;
    }
    .contract-lists{
        .contract-addresses{
          padding: 5px 0;
          a{
            color:rgba(12,12,42,0.7);
            font-size: 14px;
            font-family: Overpass Mono,Noto Sans SC,monospace;
          }
          .copy{
            margin-left: 8px;
            font-size: .7rem;
            color: #fafafa;
            background:rgba(42,89,217,1);
            padding: 5px 5px;
            text-transform: uppercase;
            font-weight: 600;
            position: relative;
            top: -1px;
            cursor: pointer;
            span{
              padding: 5px 13px;
            }
          }
          .is-active{
            background-color: #e6e6e6;
            color: #333333;
          }

        }
    }
  }
</style>
