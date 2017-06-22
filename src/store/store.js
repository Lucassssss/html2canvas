import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    msg: 'Hello',
    appName: '快手截图'
}
const mutations = {

}

export default new Vuex.Store({
    state,
    mutations
});