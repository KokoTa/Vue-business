<template>
	<div class="c-type">
		<label v-for="item in typeList">
			{{ item.name }}<input type="checkbox" :value="item.value" v-model="types" @click="getType">
		</label>
	</div>
</template>

<script>
	export default {
		name: 'choiceType',
		props: {
			typeList: {
				type: Array,
				default: () => []
			}
		},
		data () {
			return {
				types: []
			}
		},
		methods: {
			getType (e) {
				var element = e.target.parentNode;
				element.classList.toggle('type-active');
				// 如果是change事件，传递的是未改变时的数组（坑）
				this.$emit('getType', this.types); 
			}
		}
	}
</script>

<style lang="scss" scoped>
	label {
		background: #eee;
		font-size: .8rem;
		display: inline-block;
		line-height: 100%;
		padding: .5rem;
		margin-right: .5rem;
		cursor: pointer;
		input {
			display: none;
		}
	}
	.type-active {
		background: black;
		color: white;
	}
</style>