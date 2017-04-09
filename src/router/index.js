import Vue from 'vue';
import VueRouter from 'vue-router';

import commentform from '../components/commentform.vue';
import count from '../components/count.vue';

Vue.use(VueRouter);

export default new VueRouter({
	routes:[
		{path:'/comment',component:commentform},
		{path:'/count',component:count}
	]
})