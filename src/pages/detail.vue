<template>
	<div class="detail-wrap">
		<div class="detail-left">
			<div class="detail-left-content">
				<img :src="getSrc">
				<ul>
					<router-link v-for="(item, index) in detailList" 
						tag="li"
						:to="{ path: item.path }" 
						:key="index"
						active-class="active">
						{{ item.title }}
					</router-link>
				</ul>
			</div>
		</div>
		<div class="detail-right">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'detail',
		data () {
			return {
				detailList: [
					{
						title: '萌萌侵略者',
						src: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=8b4dac2d5e6034a829e2bf87f3282e69/0b7b02087bf40ad170b1e2cf552c11dfa9ecce40.jpg',
						path: 'mmqlz'
					},
					{
						title: '刀剑神域',
						src: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=c29d5d76a918972ba33a07ccdef61cb4/9213b07eca8065381e5cc57195dda144ad348219.jpg',
						path: 'djsy'
					},
					{
						title: '罪恶王冠',
						src: 'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=7324ba616a224f4a5799741531ccf76f/c83d70cf3bc79f3d39032877bda1cd11738b2993.jpg',
						path: 'zewg'
					},
					{
						title: '素晴',
						src: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=c5e8d099b5b7d0a27bc9039bf3d41134/024f78f0f736afc311ed834eb419ebc4b7451233.jpg',
						path: 'sq'
					}
				]
			}
		},
		computed: {
			getSrc () {
				return this.detailList.find((item) => {
					return ('/detail/' + item.path) == this.$route.path
				}).src;
			}
		}
	}
</script>

<style lang="scss">
	.detail-wrap {
		width: 1200px;
		margin: 8rem auto 0;
		overflow: hidden;
		.detail-left {
			float: left;
			width: 300px;
			.detail-left-content {
				margin: 1rem;
				img {
					width: 100%;
					display: block;
				}
				ul {
					li {
						line-height: 2rem;
						padding: .5rem;
						cursor: pointer;
						border-bottom: 1px solid black;
					}
					li:hover, .active {
						background: black;
						color: white;
					}
				}
			}
		}
		.detail-right {
			float: left;
			width: 900px;
			margin-top: 1rem;
		}
	}
</style>