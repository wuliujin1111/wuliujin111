<template>
	<div class="content">
		<header>
			<p class="title iconfont icon-viewgallery"></p>
			<p>新物金</p>
			<router-link class="title iconfont icon-gerenzhongxin" to="/register" tag="p"></router-link>

		</header>

		<div id="content">
			<!--<button id="btn" @click="getData()">加载更多...</button>
	    	<div id="title" v-for='(item,index) of articleLists' :key='item.length'>
	            <span>{{index+1}}--{{item.title}}</span>
	        </div>
	    <br><br /><br /><br /><br /><br /><br />-->
			<div>
				<swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
			</div>
		</div>
	</div>
</template>

<script>
	import footerToggle from "@/md/footerToggle.js"
	import { mapGetters, mapActions } from 'vuex'
	import Vue from 'vue'
	import { Swiper, GroupTitle, SwiperItem, } from 'vux'
	const baseList = [{
		url: 'javascript:',
		img: 'https://static.vux.li/demo/1.jpg',
	}, {
		url: 'javascript:',
		img: 'https://static.vux.li/demo/2.jpg',
	}, {
		url: 'javascript:',
		img: 'https://static.vux.li/demo/3.jpg',
	}]

	const urlList = baseList.map((item, index) => ({
		img: item.img
	}))
	export default {
		data() {
			return {
				msg: "who i am?",
				demo06_list: urlList,
				demo06_index: 0,
			}
		},
		computed: {
			articleLists() {
				//				return this.$store.state.articleLists;
			},
		},
		mounted() {
			//			this.$store.dispatch('getArticleLists'); //获取数据
		},
		methods: {
			//			getData() {
			//				this.$store.dispatch('getArticleLists')
			//			},
			onSwiperItemIndexChange(index) {
				console.log('demo item change', index)
			},
			demo06_onIndexChange(index) {
				this.demo06_index = index
			},
		},
		components: {
			Swiper,
			SwiperItem,
			GroupTitle,
		}
	}
</script>

<style scoped lang="scss">
	@import "~@/scss/main.scss";
	#btn {
		width: 3rem;
		height: 0.3rem;
		background: 0;
		text-align: center;
		background: #f66;
		color: #00BFFF;
		border: 0;
		margin: 0.3rem 0.2rem;
	}
	
	#title {
		height: 0.5rem;
		padding: 0.2rem;
		@include ellipsis();
	}
	
	.copyright {
		font-size: 12px;
		color: #ccc;
		text-align: center;
	}
	
	.text-scroll {
		border: 1px solid #ddd;
		border-left: none;
		border-right: none;
	}
	
	.text-scroll p {
		font-size: 12px;
		text-align: center;
		line-height: 30px;
	}
	
	.black {
		background-color: #000;
	}
	
	.title {
		line-height: 0.5rem;
		text-align: center;
		color: #fff;
	}
	
	.animated {
		animation-duration: 1s;
		animation-fill-mode: both;
	}
	
	.vux-indicator.custom-bottom {
		bottom: 30px;
	}
	
	@-webkit-keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translate3d(0, 100%, 0);
		}
		100% {
			opacity: 1;
			transform: none;
		}
	}
	
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translate3d(0, 100%, 0);
		}
		100% {
			opacity: 1;
			transform: none;
		}
	}
	
	.fadeInUp {
		animation-name: fadeInUp;
	}
	
	.swiper-demo-img img {
		width: 100%;
	}
</style>