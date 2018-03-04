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
  	qqq:"a"
  }
}

const moduleB = {
  state: {
  	count:'b'
  }
}
const store = new Vuex.Store({
	modules:{
		a:moduleA,
		b:moduleB
	},
  state: {
    isOpen:false
  },
  getters:{
  	getNumber1:function(state){
  		return state.collection.filter(num=>num > 3)
  	},
  	getNumber1Length:function(state,getters){
  		return getters.getNumber1.length
  	},
  	getByID:function(state){
  		return function(_value){
  			return state.collection.find(function(e){
  			return e === _value
  		})
  		}
  	},
  	getByID2:(state)=>(id)=>{
  		return state.collection.find(item=>item === id)
  	}
  	
  },
  mutations: {
    toggleIsOpen (state) {
      state.isOpen = !state.isOpen
    }
  }
})


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})



