<template>
	<div class="c-number">
		<span class="c-change" @click="add(-1)">-</span>
		<input type="text" class="c-input" v-model="number" @input="changeNum"/>
		<span class="c-change" @click="add(1)">+</span>
	</div>
</template>

<script>
	export default {
		name: 'choiceNumber',
		props: {
			min: {
				type: Number,
				default: 0
			},
			max: {
				type: Number,
				default: 99
			}
		},
		data () {
			return {
				number: this.min
			}
		},
		methods: {
			changeNum (e) {
				var value = e.target.value;
				value = Number(value.replace(/\D/g, ''));
				if(value < this.min || value > this.max) return this.number = this.min;
				return this.number = value;
			},
			add (v) {
				this.number += v;
				if(this.number < this.min) return this.number = this.min;
				if(this.number > this.max) return this.number = this.max;
			}
		},
		watch: {
			number (v) {
				this.$emit('getNumber', v);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.c-number {
		overflow: hidden;
		span, input {
			border: none;
			outline: none;
			float: left;
			width: 28px;
			height: 28px;
			line-height: 28px;
			text-align: center;
		}
		input {
			padding: 0;
			font-size: 1.5rem;
		}
		span {
			cursor: pointer;
		}
	}
</style>