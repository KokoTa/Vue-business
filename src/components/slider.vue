<template>
	<div class="slide-show" @mouseover="clearIntv" @mouseout="intv">
		<div class="slide-img">
			<a :href="slideList[nowIndex].href">
				<!-- 过渡需要配合v-if/v-show或路由 -->
				<transition name="trans">
					<img v-if="show" :src="slideList[nowIndex].src">
				</transition>
				<transition name="trans">
					<img v-if="!show" :src="slideList[nowIndex].src">
				</transition>
			</a>
		</div>
		<dir class="slide-footer">
			<h2>{{ slideList[nowIndex].title }}</h2>
			<ul class="slide-pages">
				<li @click="goto(prevIndex)">&lt;</li>
				<li v-for="(item, index) in slideList" @click="goto(index)">
					<a href="#" :class="{on: index === nowIndex }">{{ index + 1}}</a>
				</li>
				<li @click="goto(nextIndex)">&gt;</li>
			</ul>
		</dir>
	</div>
</template>

<script>
	export default {
		name: 'slider',
		props: {
			slideList: {
				type: Array,
				default: []
			},
			intTime: {
				type: Number,
				default: 3000
			}
		},
		data () {
			return {
				nowIndex: 0,
				timer: null,
				show: true
			}
		},
		computed: {
			prevIndex () {
				if(this.nowIndex === 0) {
					return this.slideList.length - 1;
				} else {
					return this.nowIndex - 1;
				}
			},
			nextIndex () {
				if(this.nowIndex === this.slideList.length - 1) {
					return 0;
				} else {
					return this.nowIndex + 1;
				}
			}
		},
		methods: {
			goto (index) {
				// 状态发生变化 -> 执行过渡移出 -> 索引发生变化 -> 执行过渡移入
				this.show = !this.show; 
				this.nowIndex = index;
			},
			intv () {
				this.timer = setInterval(() => {
					this.goto(this.nextIndex);
				}, this.intTime);
			},
			clearIntv () {
				clearInterval(this.timer);
			}
		},
		mounted () {
			this.intv();
		}
	}
</script>

<style lang='scss'>
	.slide-show {
		width: 900px;
		height: 500px;
		width: 100%;
		position: relative;
		margin-bottom: .5rem;
		overflow: hidden;
		.slide-img {
			width: inherit;
			img {
				position: absolute;
				height: 100%;
				width: 100%;
			}
		}
		.slide-footer {
			margin: 0;
			padding: 0;
			position: absolute;
			bottom: 0;
			width: 100%;
			background: rgba(0, 0, 0, .5);
			font-size: 1.2rem;
			h2 {
				display: inline-block;
				color: white;
				padding: .5rem;
			}
			ul {
				float: right;
				padding: .5rem;
				cursor: pointer;
				li {
					float: left;
					color: white;
					padding: 0 .5rem;
					a {
						text-decoration: none;
						color: white;
					}
					.on {
						text-decoration: underline;
					}
				}
			}
		}
	}

	.trans-enter-active, .trans-leave-active {
		transition: all .5s ease;
	}
	.trans-enter {
		transform: translateX(100%);
	}
	.trans-leave-to {
		transform: translateX(-100%);
	}
</style>