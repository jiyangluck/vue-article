import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state:{
		count:0,
		comments:[
			"第一条测试评论"
		]
	},
	mutations:{
		addComment(state,str){
			state.comments.push(str);
		},
		addCount(state){
			state.count++;
		},
		subCount(state){
			state.count--;
		}
	}
})