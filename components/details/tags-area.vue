<template>
  <div
    v-if="details.tags.length>0"
    class="wrapper"
  >
    <h4 class="subtitle">
      {{ $t('details.tags') }}
    </h4>
    <ul class="tag-list">
      <li
        v-for="(item, index) in details.tags"
        :key="index"
        class="tag-item"
      >
        <a class="tag-link">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "TagsArea",
      props: {
        details: {
          type: Object,
          default: () => []
        }
      },
      data(){
        return{
        }
      }
    }
</script>

<style lang="less" scoped>
 .wrapper {
    /*margin: 0 10px 24px;*/
   .subtitle {
     font-weight: 400;
     margin-bottom: .75rem;
     text-align: left;
     font-size:22px;
     color:rgba(12,12,42,1);
     line-height:26px;
   }
   .tag-list {
     display: flex;
     flex-wrap: wrap;
     margin: -4px;
     justify-content: flex-start;

     .tag-link {
       text-decoration: none;
       display: block;
       padding: 5px 8px;
       margin: 4px;
       background:rgba(232,238,244,1);
       border-radius: 4px;
       /*cursor: pointer;*/
       font-size:14px;
       color:rgba(12,12,42,0.7);
       line-height:17px;
     }
   }
  }
</style>
