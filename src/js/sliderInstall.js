import Vue from 'vue'
import timeSlider from '../components/UI/timeSlider'
let mySlider = Vue.extend(timeSlider);
let instance;
var Slider= function () {
    instance = new mySlider({
    });
    instance.$mount();
    document.getElementsByClassName("cesium-viewer")[0].appendChild(instance.$el);
    // return instance;  //不需要return了  你都声明全局变量了
};

const install = function(Vue) {  //必须要使用这个方法挂载到vue上
    Vue.prototype.$mySlider = Slider;
}
export default install
// export default Alert;