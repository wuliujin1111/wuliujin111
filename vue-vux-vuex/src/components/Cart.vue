<template>
	<div class="content">
		<header>
			<p class="iconfont icon-back" @click="back()"></p>
			<p class="title">货源</p>
			<router-link to="/home" class="iconfont icon-toys" tag="p"></router-link>
		</header>
		<div id="content">
			<div>
    <img class="previewer-demo-img" v-for="(item, index) in list" :src="item.src" width="100" @click="show(index)">
    <div v-transfer-dom>
      <previewer :list="list" ref="previewer" :options="options"></previewer>
    </div>
  </div>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	import footerToggle from "@/md/footerToggle.js"
	import { Previewer, TransferDom } from 'vux'
	export default {
		data() {
			return {
				 list: [{
        src: 'https://ooo.0o0.ooo/2017/05/17/591c271ab71b1.jpg',
        w: 800,
        h: 400
      },
      {
        src: 'https://ooo.0o0.ooo/2017/05/17/591c271acea7c.jpg'
      }, {
        src: 'https://ooo.0o0.ooo/2017/06/15/59425a592b949.jpeg'
      }],
      options: {
        getThumbBoundsFn (index) {
          // find thumbnail element
          let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
          // get window scroll Y
          let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect()
          // w = width
          return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        }
      }
			}
		},
		mounted() {

		},

		methods: {
			back() {
				window.history.go(-1)
			},
			 show (index) {
	      this.$refs.previewer.show(index)
	    }

		},
		components: {
			Previewer
		},
		directives: {
		    TransferDom
		  },
	}
</script>

<style scoped lang="scss">
	@import "~@/scss/main.scss";
</style>