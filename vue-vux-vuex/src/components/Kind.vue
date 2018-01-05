<template>
<div class="content">
	<header>
		<p class="iconfont icon-back" @click="back()"></p>
		<p class="title">广场</p>
		<router-link to="/home" class="iconfont icon-toys" tag="p"></router-link>
	</header>
	<div id="content">
		<div style="text-align:center;">
			<popover placement="top" style="margin: 20px;" @on-show="onShow" @on-hide="onHide">
				<div slot="content" class="popover-demo-content">
					hello world
				</div>
				<button class="btn btn-default">{{ ('Popover on top') }}</button>
			</popover>

			<popover placement="bottom" style="margin: 20px;">
				<div slot="content" class="popover-demo-content">
					hello world
				</div>
				<button class="btn btn-default">{{ ('Popover on bottom') }}</button>
			</popover>

			<popover placement="left" style="margin: 20px;">
				<div slot="content" class="popover-demo-content">
					hello world
				</div>
				<button class="btn btn-default">{{ ('Popover on left') }}</button>
			</popover>

			<popover placement="right" style="margin: 20px;">
				<div slot="content" class="popover-demo-content">
					hello world
				</div>
				<button class="btn btn-default">{{ ('Popover on right') }}</button>
			</popover>
		</div>
	</div>
</div>
</template>

<script>
import footerToggle from "@/md/footerToggle.js";
import axios from 'axios'
import { mapGetters } from 'vuex'
import { Popover } from 'vux'
export default {
	data() {
		return {

		}
	},
	mounted() {

	},
	methods: {
		back() {
			window.history.go(-1)
		},
		onShow() {
			console.log('on show')
		},
		onHide() {
			console.log('on hide')
		}
	},
	components: {
		Popover
	}
}
</script>

<style scoped lang="scss">
	@import "~@/scss/main.scss";
	.router-link-active {
		@include textcolor(#f66)
	}
	
	#content {
		@include flexbox();
		@include flex-direction(column);
	}
	
	.popover-demo-content {
		padding: 5px 10px;
	}
	.btn-default{
		background: #f66;
		color: #fff;
		border: 0;
		padding: 10px;
		box-shadow: 5px 5px 10px #00BFFF;
	}
</style>