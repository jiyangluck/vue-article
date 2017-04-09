<template>
	<div>
		<p>{{article}}</p>
		<span>{{count}}</span>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				article:''
			}
		},
		mounted(){
			this.$http.get('data/article.json').then(function(res){
				this.article = res.data;
			})
		},
		computed:{
			count(){
				return this.$store.state.count
			}
		}
	}
</script>