import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	shoppingData: [],
	detailTypes: ['萌萌侵略者', '刀剑神域', '罪恶王冠', '素晴'],
	choiceTitle: ['选择类型', '购买数量', '送货地区', '总价格', '购买日期'],
	placeList: ['北京', '上海', '广州', '杭州', '厦门']
}

const mutations = {
	storeData (state, value) {
		state.shoppingData.push(value);
	}
}

export default new Vuex.Store({
	state,
	mutations
})