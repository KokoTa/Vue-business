<template>
	<div class="result-wrap">
		<div class="result-line">
			<div class="result-order">
				选择产品：
				<choice-place :dataList="detailTypes()"></choice-place>
			</div>
			<div class="result-order">
				日期查询：
				<my-datepicker :date="date" :option="option" :limit="limit"></my-datepicker>
			</div>
			<div class="result-order">
				搜索关键词：
				<input type="text">
			</div>
		</div>
		<div class="result-line">
			<my-table :dataList="shoppingData()" :titleList="choiceTitle()"></my-table>
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
		data () {
			return {
				...mapState(['shoppingData', 'detailTypes', 'choiceTitle']),
				date: {
				  time: '' // string
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
					from: '2017-10-14',
					to: '2017-12-12'
				}]
			}
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