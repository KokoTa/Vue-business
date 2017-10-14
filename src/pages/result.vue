<template>
	<div class="result-wrap">
		<div class="result-line">
			<div class="result-order">
				选择产品：
				<choice-place :dataList="detailTypes" @getPlace="filterData('product', $event)"></choice-place>
			</div>
			<div class="result-order">
				日期查询：
				<my-datepicker :date="date" :option="option" :limit="limit" @change="filterData('date', $event)"></my-datepicker>
			</div>
			<div class="result-order">
				搜索地区：
				<input type="text" @input="filterData('place', $event.target.value)" placeholder="搜索全部请输入空字符">
			</div>
		</div>
		<div class="result-line">
			<my-table :dataList="dataInfo" :titleList="choiceTitle"></my-table>
		</div>
	</div>
</template>

<script>
	import choicePlace from '@/components/base/choicePlace' // 复用来作为动漫选择
	import { mapState } from 'vuex'
	import myDatepicker from '@/components/base/datepicker'
	import myTable from '@/components/base/myTable'

	export default {
		name: 'result',
		components: {
			choicePlace,
			myDatepicker,
			myTable
		},
		computed: {
			...mapState(['shoppingData', 'detailTypes', 'choiceTitle'])
		},
		data () {
			return {
				dataInfo: [],
				date: {
				  time: ''
				},
				option: {
					type: 'day',
					week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
					month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
					format: 'YYYY-MM-DD',
					placeholder: '请选择日期',
					inputStyle: {
						'text-align': 'center'
		      }
				},
				limit: [{
					type: 'fromto',
					from: '2016-01-01',
					to: '2018-12-31'
				}]
			}
		},
		methods: {
			filterData (attr, value) {
				let data = this.shoppingData.filter((item) => {
					if(attr == 'place') {
						return item[attr].indexOf(value) > -1; // 输入值为''时，返回0，因此当没有输入时获得所有数据
					}
					return item[attr] == value;
				})
				this.dataInfo = data;
			}
		},
		created () {
			this.dataInfo = this.shoppingData;
		}
	}
</script>

<style lang="scss" scoped>
	.result-wrap {
		width: 1200px;
		margin: 9rem auto 0;
		background: white;
		.result-line {
			padding: 1rem;
			.c-place {
				display: inline;
			}
			.result-order {
				float: left;
				line-height: 28px;
				margin-right: 40px;
			}
		}
	}
</style>