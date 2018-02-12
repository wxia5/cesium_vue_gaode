import Vue from 'vue'
import Router from 'vue-router'
import tableComponent from '../components/utilComponent/tableComponent'
import dataTimePicker from '../components/utilComponent/dateTimePicker'
import Home from '../components/Home'
import formComponent from '../components/utilComponent/formComponent'
import gaodeMap from '../components/gaodeMap'
import olMap from '../components/olMap'
import bdMap from '../components/baiduMap'
import leafletMap from '../components/leafletMap'
import cesiumMap from '../components/cesiumMap'
Vue.use(Router)
const routes = [
//{
//		{ path: "form", component: formComponent, name: "form" },
//		{ path: "datePick", component: dataTimePicker, name: "dateTimePicker" },
		{ path: "", component: Home, name: "home",children:[
		{ path: "/map3d", component: cesiumMap, name: "map3d" },
		{ path: "/map2d", component: gaodeMap, name: "map2d" },
		{ path: "/olMap", component: olMap, name: "ol_map" },
		{ path: "/bdMap", component: bdMap, name: "bdMap" },
		{ path: "/leafletMap", component: leafletMap, name: "leafletMap" }
		]}
	]
//}
//]
const router = new Router({
	routes // （缩写）相当于 routes: routes
})

export default router
//export default new Router({
//routes: [
//  {
//    path: '/',
//    name: 'HelloWorld',
//    component: HelloWorld
//  }
//]
//})