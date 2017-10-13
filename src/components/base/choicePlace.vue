<template>
	<div class="c-place">
		<select required @change="changePlace">
			<option v-for="item in dataList"
			:value="item">{{ item }}</option>
		</select>
	</div>
</template>

<script>
	export default {
		name: 'choicePalce',
		props: {
			dataList: {
				type: Array,
				default: () => []
			}
		},
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