import Vue from 'vue';
import router from './router/index.js';
import store from './store/index.js';

import VueResource from 'vue-resource';
Vue.use(VueResource);

import App from './components/app.vue';

new Vue({
	el:'#app',
	components:{App},
	store,
	router
})