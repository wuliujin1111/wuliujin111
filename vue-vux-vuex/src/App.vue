<template>
<div id="container">
    <div class="mainContent"  >
          <router-view name="content"></router-view>
    </div>
    <footer id="footer" >
          <router-view name ="footer"></router-view>
    </footer>
</div>
</template>

<script>
  import Home from "@/components/Home.vue"
  
  export default {
    data(){
      return {
        
      }
    },
    mounted(){
      
    },
    methods:{
      
    },
    components:{
      "v-main": Home
    }
  }
</script>

<style>
</style>