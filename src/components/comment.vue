<template>
	<ul>
		<li v-for="comment in comments">{{comment}}</li>
	</ul>
</template>

<script>
	export default {
		computed:{
			comments(){
				return this.$store.state.comments;
			}
		}
	}
</script>