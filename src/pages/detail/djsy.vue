<template>
	<div class="detail-right">
		<div class="detail-select">
			<h1>刀剑神域</h1>
			<p>《刀剑神域》是轻小说家川原砾著作，插画家abec负责插画，电击文库所属的轻小说。本作繁体中文版由台湾角川发行，简体中文版由天闻角川发行。</p>
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
			<p class="preWord">“这虽然是游戏，但可不是闹着玩的。”——“刀剑神域（Sword Art Online）”设计者茅场晶彦。</p>
			<p class="preWord">主角桐谷和人是使用世界首款完全潜行游戏“刀剑神域（Sword Art Online）”的玩家。曾经很幸运的参与过封闭测试，并买下正式版的和人，正准备体验游戏的第一次正式营运。但在登入后不久，和人发现“登出”指令竟然消失，而与此同时自称是SAO游戏设计者“茅场晶彦”的人说：“无法完成攻略就无法离开游戏，只有打倒位于“艾恩葛朗特”顶楼，第100层的头目－达成“完全攻略”才是离开这个世界唯一的方法。并且，在游戏内GAMEOVER或是尝试脱下NERvGear，玩家会立刻被NERvGear发出的高频率微波破坏脑部而死亡。”唯有接受这个矛盾事实的人，才能够存活下去。</p>
			<p class="preWord">自己也被卷入其中的桐人，在游戏的舞台——巨大浮游城堡“艾恩葛朗特”里，以不与人组队的独行剑士身份，逐渐崭露头角，并获得“黑色剑士”的称号。桐人以完全攻略的条件——到达城堡最上层为目标，持续进行严酷且漫长的冒险，在这期间他邂逅了女性细剑使——“闪光”亚丝娜，以及公会“血盟骑士团团长”希兹克利夫，他的命运也一步步产生了巨大的变化。桐人能否从游戏里全身而退……</p>
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
				min: 5,
				max: 10,
				money: 200,
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