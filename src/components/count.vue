<template>
	<div>
		<button v-on:click="sub">踩</button>
		<button v-on:click="add">赞</button>
	</div>
</template>

<script>
	export default {
		methods:{
			add(){
				this.$store.commit('addCount')
			},
			sub(){
				this.$store.commit('subCount')
			}
		}
	}
</script>