<template>
	<div class="dialog-wrap">
		<div class="dialog-mask" v-show="showDialog" @click="close"></div>
		<transition name="drop">
			<div class="dialog-content" v-show="showDialog">
				<div class="dialog-close" @click="close">X</div>
				<slot>
					<h1>Hello</h1>
				</slot>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'myDialog',
		props: {
			showDialog: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			close () {
				this.$emit('close-dialog');
			}
		},
		data () {
			return {

			}
		}
	}	
</script>

<style lang="scss" scoped>
	.dialog-wrap {
		.dialog-mask {
			position: fixed;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background: rgba(0, 0, 0, .5);
		}
		.dialog-content {
			box-sizing: border-box;
			position: fixed;
			width: 50%;
			background: white;
			left: 50%;
			margin-left: -25%;
			top: 10%;
			padding: 2rem 1rem 1rem;
			line-height: 1.5rem;
			border: 5px solid black;
			.dialog-close {
				display: inline-block;
				position: absolute;
      	top: .6rem;
      	right: .6rem;
      	cursor: pointer;
      	border: 3px solid black;
      	padding: 0 6px;
      	border-radius: 50%;
			}
			.dialog-close:hover {
				color: white;
				background: black;
			}
		}
	}

	.drop-enter-active, .drop-leave-active {
		transition: all .5s ease;
	}
	.drop-enter, .drop-leave-active {
		transform: translateY(-500px);
	}
</style>