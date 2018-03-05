import Vue from 'vue'
import ElementUI from 'element-ui'
import router from "./router"
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(ElementUI)
const moduleA = {
	state: {
		qqq: "a"
	}
}

const moduleB = {
	state: {
		count: 'b'
	}
}
const store = new Vuex.Store({
			modules: {
				a: moduleA,
				b: moduleB
			},
			state: {
				newFileIsOpen: false,
				JBHZIsOpen:true,
				BZSXIsOpen:true,
				BZMB_TCKZIsOpen:false
			},
				mutations: {
					toggleOpenNewFile(state) {
						state.newFileIsOpen = !state.newFileIsOpen
					},
					openNewFile(state) {
						state.newFileIsOpen = true
					},
					toggleJBHZ(state){
						state.JBHZIsOpen = !state.JBHZIsOpen
					},
					toggleBZSX(state){
						state.BZSXIsOpen = !state.BZSXIsOpen
					},
					toggleBZMB_TCKZ(state){
						state.BZMB_TCKZIsOpen = !state.BZMB_TCKZIsOpen
					}
				}
			})

		new Vue({
			el: '#app',
			store,
			router,
			render: h => h(App)
		})