<template>
	<div class="index-wrap">
		<!-- left -->
		<div class="index-left">
			<div class="index-left-block">
				<h1>Cool sites</h1>
				<template v-for="site in siteList">
					<h3>{{ site.title }}</h3>
					<ul>
						<li v-for="item in site.list">
							<a :href="item.url" target="_blacnk">{{ item.name }}</a>
							<span v-if="item.hot" class="hot-logo">HOT</span>
						</li>
					</ul>
				</template>
			</div>
			<div class="index-left-block">
				<h1>Cool news</h1>
				<ul>
					<li v-for="(item, index) in newList" class="news-hidden">
						<a :href="'http://daily.zhihu.com/story/' + item.id" target="_blacnk">{{ index + 1}}. {{ item.title }}</a>
					</li>
				</ul>
			</div>
		</div>
		<!-- right -->
		<div class="index-right">
			<slider :slideList="slideList"></slider>
			<div class="index-board">
				<div class="index-board-item "
				v-for="(item, index) in boardList">
					<div class="board-item-bg">
						<h1>{{ item.title }}</h1>
						<p>{{ item.description }}</p>
						<router-link tag="button" :to="item.href">
							立即进入
						</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import slider from '@/components/slider'

	export default {
		components: {
			slider
		},
		name: 'index',
		data () {
			return {
				siteList: {
					partOne: {
						title: '第一部分',
						list: [
							{
								name: '最大同性交友',
								url: 'http://bilibili.com',
								hot: true
							},
							{
								name: '文艺青年装逼',
								url: 'http://douban.com'
							},
							{
								name: '守望屁股',
								url: 'http://overwatch.com'
							},
							{
								name: '现实中的你',
								url: 'https://cn.bing.com/images/search?q=doge&qpvt=doge'
							}
						]
					},
					partTwo: {
						title: '第二部分',
						list: [
							{
								name: '装逼圣地',
								url: 'http://zhihu.com'
							},
							{
								name: '剁手卖肾',
								url: 'http://taobao.com',
								hot: true
							},
							{
								name: '正经的视频',
								url: 'http://youku.com'
							},
							{
								name: '正经的黑商',
								url: 'http://baidu.com'
							}
						]
					}
				},
				newList: [

				],
				boardList: [
					{
					  title: '村民异世界',
					  description: '从零开始你的冒险',
					  id: 'zero',
					  href: '/detail/mmqlz'
					},
					{
					  title: '勇者异世界',
					  description: '以勇者的身份进行冒险',
					  id: 'hero',
					  href: '/detail/djsy'
					},
					{
					  title: '龙傲天异世界',
					  description: '人民币玩家的天堂',
					  id: 'god',
					  href: '/detail/zewg'
					},
					{
					  title: '随机异世界',
					  description: '相由天命',
					  id: 'random',
					  href: '/detail/sq'
					}
				],
				slideList: [
					{
						title: '01',
						src: require('@/assets/img/s1.jpg'),
						href: '/'
					},
					{
						title: '02',
						src: require('@/assets/img/s2.jpg'),
						href: '/'
					},
					{
						title: '03',
						src: require('@/assets/img/s3.jpg'),
						href: '/'
					},
					{
						title: '04',
						src: require('@/assets/img/s4.jpg'),
						href: '/'
					}
				]
			}
		},
		created: function() {
			this.axios.get('/news')
				.then(data => {
					this.newList = data.data.stories;
				})
				.catch(error => {
					console.log(error);
				})
		}
	}
</script>

<style lang="scss">
	.index-wrap {
		width: 1200px;
		margin: 8rem auto 0;
		overflow: hidden;
		.index-left {
			float: left;
			width: 300px;
			text-align: left;
			.index-left-block {
				margin: 1rem;
				background: #fff;
				box-shadow: 0 0 10px #ddd;
				h1 {
					background: black;
					font-size: 1.5rem;
				}
				h3 {
					background: #555;
					font-size: 1rem;
				}
				h1, h3 {
					padding: 5px;
					color: white;
					text-align: center;
				}
				ul {
					padding: 1rem;
					li {
						padding-bottom: .5rem;
						&:last-child {
							padding-bottom: 0;
						}
						a {
							text-decoration: none;
							color: gray;
							line-height: 1.2rem;
							font-size: .8rem;
						}
						a:hover {
							color: black;
						}
					}
					.hot-logo {
						font-size: .5rem;
						background: red;
						color: white;
						border-radius: 5px;
						padding: 0 2px;
					}
					.news-hidden {
						width: 100%;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
		}
		.index-right {
			float: left;
			width: 900px;
			margin-top: 1rem;
			.index-board {
				.index-board-item {
					display: inline-block;
					width: 400px;
					padding: 20px;
					background: white;
					margin: 0 20px 20px 0;
					&:nth-child(2n) {
						margin-right: 0;
					}
					.board-item-bg {
						padding-left: 120px;
						background: url(../assets/img/1.png) no-repeat;
						h1, p, button {
							margin-bottom: 1rem;
						}
						h1 {
							font-size: 1.5rem;
							font-weight: bolder;
						}
						p {
							font-size: .8rem;
							color: gray;
						}
						button {
							width: 8rem;
							height: 2rem;
							border: none;
							background: black;
							color: white;
							box-shadow: .2rem .2rem 1rem gray;
							cursor: pointer;
						}
						button:hover {
							background: gray;
						}
					}
				}
			}
		}
	}
</style>