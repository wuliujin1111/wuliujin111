<template>
  <ul>
  	<router-link :to = "item.path" v-for = "(item, index) in list" :key = "index" tag="li">
  	  <p class="iconfont" :class="item.icon"></p>
  	  <p>{{item.name}}</p>
  	</router-link>
  </ul>
</template>

<script>
  export default {
    data(){
      return {
        list:[
           {
            icon:"icon-toys",
            name:"首页",
            path:"/home"
          },
          {
            icon:"icon-all",
            name:"广场",
             path:"/kind"
          },
          {
            icon:"icon-cart",
            name:"货源",
             path:"/cart"
          },
          {
            icon:"icon-account",
            name:"我的",
             path:"/user"
          }
        ]
      }
    },
    mounted(){
      
    },
    methods:{
      
    },
    components:{
      
    }
  }
</script>

<style scoped lang="scss">
@import "~@/scss/main.scss";

ul{
  @include rect(100%, 100%);
  @include flexbox();
  li{
    @include flex(1);
    @include align-items();
    @include justify-content();
     @include flexbox();
     @include flex-direction(column);
    p{
      
      &:nth-child(1){
         @include fontsize(0.22rem)
      }
      &:nth-child(2){
        @include fontsize()
      }
    }
    
    &.router-link-active{
      @include textcolor(yellow);
    }
  }
}
</style>