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
				<dd><choice-place :dataList="placeList" @getPlace="getData('place', $event)"></choice-place></dd>
				<dt>总价：</dt>
				<dd><span class="money">{{ allMoney }}</span></dd>
			</dl>
			<button class="btn-submit" @click="checkData">购买</button>
		</div>
		<div class="detail-content">
			<h1>内容简介</h1>
			<p class="preWord">集在祈与涯引导之下，与葬仪社而发生了关联。尔后因为关系紧迫获被女主使用了虚空基因组，他的右手上出现了“王之刻印”。通过刻印，集可以自在地从人的身体里抽取出名为“void（虚空）”的物质，并以借此为武器得到战斗的力量。然而这也仅仅是，他所背负的“罪之王冠”的物语的开幕罢了…</p>
		</div>
		<my-dialog :show-dialog="showDialog"  @close-dialog="changeDialog">
			<my-table :dataList="finalChoice" :titleList="choiceTitle" @close-dialog="changeDialog">
				<button class="btn-submit" @click="changeDialog">取消</button>
				<router-link tag="button" to="/result" @click.native="sendData" class="btn-submit">确定</router-link>
			</my-table>
		</my-dialog>
	</div>
</template>

<script>
	import choiceType from '@/components/base/choiceType';
	import choiceNumber from '@/components/base/choiceNumber';
	import choicePlace from '@/components/base/choicePlace';
	import myDialog from '@/components/myDialog'; // 这里组件复用了哟！
	import myTable from '@/components/base/myTable';

	import { mapMutations } from 'vuex'
	import { mapState } from "vuex";

	export default {
		components: {
			choiceType,
			choiceNumber,
			choicePlace,
			myDialog,
			myTable
		},
		data () {
			return {
				showDialog: false,
				min: 0,
				max: 3,
				money: 20000,
				finalChoice: {
					product: '罪恶王冠',
					type: [],
					number: 0,
					place: '',
					allMoney: 0,
					date: (new Date().getFullYear()) + '-' + (new Date().getMonth() + 1) + '-' +(new Date().getDate())
				},
				typeList: [
					{
						name: '左手版',
						value: 'typeA'
					},
					{
						name: '右手版',
						value: 'typeB'
					},
					{
						name: '王之力版',
						value: 'typeC'
					}
				]
			}
		},
		methods: {
			...mapMutations([
				'storeData'
			]),
			getData (attr, value) {
				this.finalChoice[attr] = value;
			},
			changeDialog () {
				this.showDialog = !this.showDialog;
			},
			checkData () {
				var data = this.finalChoice;
				if(!(data.type.length && data.number && data.place && data.allMoney)) {
					alert('请完善购物信息');
					return false;
				} else {
					this.changeDialog();
				}
			},
			sendData () {
				this.changeDialog();
				this.storeData(JSON.parse(JSON.stringify(this.finalChoice)));
			}
		},
		computed: {
			...mapState(['choiceTitle', 'placeList']),
			allMoney () {
				var all = 0;

				if(!this.finalChoice.number) {
					all = this.money * this.min;
					this.finalChoice.allMoney = all;
					return all;
				}

				all = this.money * this.finalChoice.number;
				this.finalChoice.allMoney = all;
				return all;
			}
		},
		created () {
			this.finalChoice.number = this.min;
			this.finalChoice.place = '北京';
			this.finalChoice.allMoney = this.allMoney;
		}
	}
</script>

<style lang="scss">
	
</style>