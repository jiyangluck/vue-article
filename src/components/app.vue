<template>
	<div>
		<articles></articles>
		<comment></comment>
		<menus></menus>
		<router-view></router-view>
	</div>
</template>

<script>
	import articles from './articles.vue';
	import comment from './comment.vue';
	import menus from './menus.vue';
	export default {
		components:{articles,comment,menus}
	}
</script>