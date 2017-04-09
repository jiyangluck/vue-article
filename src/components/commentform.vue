<template>
	<div>
		<input type="text" v-model="txt">
		<button v-on:click="add">添加评论</button>
	</div>
</template>

<script>
	export default {
		methods:{
			add(){
				this.$store.commit('addComment',this.txt)
			}
		}
	}
</script>