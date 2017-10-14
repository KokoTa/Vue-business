<template>
	<div class="detail-right">
		<div class="detail-select">
			<h1>为美好的世界献上祝福</h1>
			<p>电视动画《为美好的世界献上祝福！》改编自暁なつめ原作的同名轻小说。2015年5月25日，在原作官网上发表了TV动画化的决定。2015年12月23日，先行上映会《この华やかな宴に喝采を！》举办，由福岛润、雨宫天、高桥李依、茅野爱衣、Machico出演。电视动画于2016年1月14日起在TOKYOMX首播，全10话；另有OAD2话，分别随原作第9卷和第12卷限定版同捆推出。第2期《为美好的世界献上祝福！2》自2017年1月12日首播。</p>
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
			<p class="preWord">热爱游戏的家里蹲少年·佐藤和真的人生，因交通事故而轻易闭幕……本该是这样，但当他醒来之时，眼前有一位自称是女神的美少女。“喂，我有点好事要告诉你。要去异世界吗？只带一样你喜欢的东西没问题喔。”“那，我就带着你好了。”由此开始，在异世界转生的和真的魔王讨伐大冒险开始了……虽然是这么想的，但他却为了获得衣食住行而开始劳动。想要平稳度日的和真，却由于女神引起的各种问题，而终于被魔王军盯上了。</p>
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
				min: 5,
				max: 10,
				money: 1000,
				finalChoice: {
					product: '素晴',
					type: [],
					number: 0,
					place: '',
					allMoney: 0,
					date: (new Date().getFullYear()) + '-' + (new Date().getMonth() + 1) + '-' +(new Date().getDate())
				},
				typeList: [
					{
						name: '阿库娅版',
						value: 'typeA'
					},
					{
						name: '惠惠版',
						value: 'typeB'
					},
					{
						name: '达克尼斯版',
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