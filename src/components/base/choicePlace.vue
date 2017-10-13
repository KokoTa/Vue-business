<template>
	<div class="c-place">
		<select required @change="changePlace">
			<option value="北京">北京</option>
			<option value="上海">上海</option>
			<option value="广州">广州</option>
			<option value="杭州">杭州</option>
			<option value="厦门">厦门</option>
		</select>
	</div>
</template>

<script>
	export default {
		name: 'choicePalce',
		data () {
			return {
				place: ''
			}
		},
		methods: {
			changePlace (e) {
				var value = e.target.value;
				this.place = value;
				this.$emit('getPlace', this.place);
			}
		}
	}
</script>

<style lang="scss">
	.c-place {
		select {
			width: 100px;
			height: 28px;
			line-height: 28px;
			outline: none;
			border: none;
			font-size: 16px;
		}
	}
</style>