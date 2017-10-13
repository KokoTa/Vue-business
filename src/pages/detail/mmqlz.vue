<template>
	<div class="detail-right">
		<div class="detail-select">
			<h1>萌萌侵略者</h1>
			<p>《萌萌侵略者OUTBREAK COMPANY》是由日本小说家榊一郎原作、Yuugen（ゆーげん）插画的轻小说。主要讲述了血统纯正的御宅族啊，用“萌”改革战乱的异世界吧！</p>
			<dl>
				<dt>购买类型：</dt>
				<dd><choice-type :typeList="typeList" @getType="getData('type', $event)"></choice-type></dd>
				<dt>购买数量：</dt>
				<dd><choice-number :min="min" :max="max" @getNumber="getData('number', $event)"></choice-number></dd>
				<dt>购买地区：</dt>
				<dd><choice-place @getPlace="getData('place', $event)"></choice-place></dd>
				<dt>总价：</dt>
				<dd><span class="money">{{ allMoney }}</span></dd>
			</dl>
			<button class="btn-submit">购买</button>
		</div>
		<div class="detail-content">
			<h1>内容简介</h1>
			<p class="preWord">那一天，人们在富士树海深处发现了一个洞，而那个洞与一个名叫“艾尔丹特帝国”的异世界相连。高中辍学生加纳慎一是一个拥有轻小说作家的父亲和H-Game原画师的母亲，血统纯正的御宅族。他并没有什么特殊的才能，有的只是对“萌”的知识、见识与直觉。而他却必须去跟真正的异世界进行交易？在连续答对200道题以后，被应征去面试，成功后由家里蹲变成安缪特克的负责人，从而开始在异世界传教宅文化。没错，慎一被赋予的任务，就是“萌的传教”！和女仆，兽耳娘生活在一起哦 。于是，还搞不太清楚状况的他，由本性有点腐的女性自卫官护卫，还跟半精灵女仆与傲娇的幼女皇帝变得越来越熟。而就在一切渐入佳境的时候，却遇到恐怖分子！？</p>
		</div>
	</div>
</template>

<script>
	import choiceType from '@/components/base/choiceType';
	import choiceNumber from '@/components/base/choiceNumber';
	import choicePlace from '@/components/base/choicePlace';

	export default {
		components: {
			choiceType,
			choiceNumber,
			choicePlace
		},
		data () {
			return {
				min: 10,
				max: 20,
				money: 500,
				finalChoice: {
					type: [],
					number: 0,
					place: '',
					date: ''
				},
				typeList: [
					{
						name: '类型A',
						value: 'typeA'
					},
					{
						name: '类型B',
						value: 'typeB'
					},
					{
						name: '类型C',
						value: 'typeC'
					}
				]
			}
		},
		methods: {
			getData (attr, value) {
				this.finalChoice[attr] = value;
			}
		},
		computed: {
			allMoney () {
				if(!this.finalChoice.number) return this.money * this.min;
				return this.money * this.finalChoice.number;
			}
		}
	}
</script>

<style lang="scss">
	
</style>