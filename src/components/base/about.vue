<template>
	<div class="about">
		<h1>关于</h1>
		<p>一个脑洞网站，包含常用网站导航、知乎日报文章导航、动漫CD购买模拟。</p>
		<p>此项目主要是学习组件化开发。</p>
		<p>PS：为了模拟后端，使用了Vuex（懒癌晚期？）</p>
	</div>
</template>

<script>
	export default {
		name: 'about'
	}
</script>

<style lang="scss" scoped>
	h1 {
		font-size: 1.5rem;
		font-weight: bolder;
		margin: .5rem;
	}
	p {
		margin: .5rem;
		line-height: 2rem;
	}
</style>