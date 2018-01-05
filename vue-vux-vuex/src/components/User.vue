<template>
	<div class="content">
		<header>
			<p class="iconfont icon-back" @click="back()"></p>
			<p class="title">我的</p>
			<router-link to="/home" class="iconfont icon-toys" tag="p"></router-link>
		</header>
		<div id="content">
			新物金我的--User
		</div>
	</div>
</template>

<script>
	import footerToggle from "@/md/footerToggle.js"
	export default {
		data() {
			return {

			}
		},
		mounted() {
			footerToggle.show();
		},
		methods: {

		},
		components: {

		}
	}
</script>

<style>

</style>