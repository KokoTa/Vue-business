<template>
	<div class="detail-right">
		<div class="detail-select">
			<h1>罪恶王冠</h1>
			<p>《罪恶王冠》是ProductionI.G制作的一部以超能力战斗为题材的原创动画，在2011年7月号的《Newtype》月刊杂志上公布了原创动画的制作企划。动画于2011年10月13日起在富士电视台播出，全22话。</p>
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
			<p class="preWord">2029年，日本因突然爆发的”Apocalypse Virus（天启病毒）“的蔓延而陷入了混乱之中。处于无政府状态的日本，受到了由超国家之间所组织成的名为“GHQ”的组织的武力介入并接受其统治，东京的六本木更成为被封锁的地区。之后又以名为“lost christmas（失落的圣诞）”的事件为契机，日本失去了独立国家的实质权力，并被赋予了表面上的自治权，由此人们开始享受短暂的和平。</p>
			<p class="preWord">时光流逝，10年后的2039年。少年樱满集怀抱着抑郁的心境，并对世间冷眼相待。樱满集是在天王州第一高校就读的高中二年生，与同学们保持着一定距离的同时，度过着闲散而又平静的日子。</p>
			<p class="preWord">然而集安稳的日常在某一天突然宣告结束。那天放学后，在自己中意的老地方和一名少女不期而遇。少女名为楪祈。她正是集所憧憬，并在网上有着巨大影响力的歌手。而她也有不为人知的一面。祈正是由17岁青少年恙神涯所率领的“葬仪社”——一个在被封锁的城市中歌颂着从”GHQ“手中得到”日本的解放“而赌上性命不断孤独地战斗着的抵抗组织——的成员之一。</p>
			<p class="preWord">集在祈与涯引导之下，与葬仪社而发生了关联。尔后因为关系紧迫获被女主使用了虚空基因组，他的右手上出现了“王之刻印”。通过刻印，集可以自在地从人的身体里抽取出名为“void（虚空）”的物质，并以借此为武器得到战斗的力量。然而这也仅仅是，他所背负的“罪之王冠”的物语的开幕罢了……</p>
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
				min: 0,
				max: 20,
				money: 1000,
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