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
					<li v-for="item in newList">
						<a :href="item.url" target="_blacnk">{{ item.title }}</a>
					</li>
				</ul>
			</div>
		</div>
		<!-- right -->
		<div class="index-right">
			<div class="index-board">
				<div class="index-board-item "
				v-for="(item, index) in boardList">
					<div class="board-item-bg">
						<h1>{{ item.title }}</h1>
						<p>{{ item.description }}</p>
						<button>立即进入</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
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
					{
						title: '今天的新闻01',
						url: 'http://baidu.com'
					},
					{
						title: '今天的新闻02',
						url: 'http://baidu.com'
					},
					{
						title: '今天的新闻03',
						url: 'http://baidu.com'
					}
				],
				boardList: [
					{
					  title: '村民异世界',
					  description: '从零开始你的冒险',
					  id: 'zero'
					},
					{
					  title: '勇者异世界',
					  description: '以勇者的身份进行冒险',
					  id: 'hero'
					},
					{
					  title: '龙傲天异世界',
					  description: '人民币玩家的天堂',
					  id: 'god'
					},
					{
					  title: '随机异世界',
					  description: '帮你勇闯高峰，到达事业的顶峰',
					  id: 'random'
					}
				],
				slideList: [

				]
			}
		},
		created: function() {

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
						padding: 5px;
						a {
							text-decoration: none;
							color: gray;
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
						padding: 3px;
					}
				}
			}
		}
		.index-right {
			float: left;
			width: 900px;
			margin-top: 1rem;
			.index-board-item {
				float: left;
				width: 400px;
				padding: 1rem;
				background: white;
				margin: 0 5px 5px 0;
				.board-item-bg {
					padding-left: 7.5rem;
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
</style>