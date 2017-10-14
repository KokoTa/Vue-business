<template>
	<div class="table-wrap">
		<table>
			<thead>
				<tr>
					<th v-for="(item, index) in titleList" @click="orderList(index)">
						{{ item }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-if="isObject()">
					<td v-for="item in dataList">
						{{ item.toString() }}
					</td>
				</tr>
				<tr v-else v-for="item in dataList">
					<td v-for="attr in item">
						{{ attr.toString() }}
					</td>
				</tr>
			</tbody>
		</table>
		<slot>
			<!-- 放按钮的位置 -->
		</slot>
	</div>
</template>

<script>
	export default  {
		name: 'myTable',
		props: {
			dataList: {
				type: [Object, Array],
				default: () => {}
			},
			titleList: {
				type: Array,
				default: () => []
			}
		},
		data () {
			return {
				sortFlag: 1
			}
		},
		methods: {
			isObject () {
				if(!Array.isArray(this.dataList)) {
					return true;
				}
				return false;
			},
			orderList (index) {
				this.sortFlag = this.sortFlag * -1;
				let that = this;
				if(Array.isArray(this.dataList)) {
					let order = this.dataList.sort(function(a, b) {
						return (a[Object.keys(a)[index]] - b[Object.keys(b)[index]]) * that.sortFlag;
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.table-wrap {
		padding: 1rem;
		table {
			width: 100%;
			th, td {
				border: 1px solid #eee;
				text-align: center;
				border-collapse: collapse;
				padding: .2rem 0 ;
			}
			th {
				font-weight: bold;
				background: #ccc;
				cursor: pointer;
			}
			th:hover {
				background: black;
				color: white;
			}
			td {
				font-size: .8rem;
			}
		}
		button {
			float: right;
			margin: 1rem .5rem 0 0;
		}
	}


</style>