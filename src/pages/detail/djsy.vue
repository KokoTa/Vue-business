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
				<dd><choice-place :dataList="placeList" @getPlace="getData('place', $event)"></choice-place></dd>
				<dt>总价：</dt>
				<dd><span class="money">{{ allMoney }}</span></dd>
			</dl>
			<button class="btn-submit" @click="checkData">购买</button>
		</div>
		<div class="detail-content">
			<h1>内容简介</h1>
			<p class="preWord">主角桐谷和人是使用世界首款完全潜行游戏“刀剑神域（Sword Art Online）”的玩家。曾经很幸运的参与过封闭测试，并买下正式版的和人，正准备体验游戏的第一次正式营运。但在登入后不久，和人发现“登出”指令竟然消失，而与此同时自称是SAO游戏设计者“茅场晶彦”的人说：“无法完成攻略就无法离开游戏，只有打倒位于“艾恩葛朗特”顶楼，第100层的头目－达成“完全攻略”才是离开这个世界唯一的方法。并且，在游戏内GAMEOVER或是尝试脱下NERvGear，玩家会立刻被NERvGear发出的高频率微波破坏脑部而死亡。”唯有接受这个矛盾事实的人，才能够存活下去。</p>
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
				max: 10,
				money: 1000,
				finalChoice: {
					product: '刀剑神域',
					type: [],
					number: 0,
					place: '',
					allMoney: 0,
					date: (new Date().getFullYear()) + '-' + (new Date().getMonth() + 1) + '-' +(new Date().getDate())
				},
				typeList: [
					{
						name: '普通版',
						value: 'typeC'
					},
					{
						name: '豪华版',
						value: 'typeB'
					},
					{
						name: '典藏版',
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