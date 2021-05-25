import Vue from 'vue'
import App from './App'

import basics from './pages/basics/home.vue'
Vue.component('basics',basics)

import components from './pages/component/home.vue'
Vue.component('components',components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)

// 首页信息页
import sy from './pages/static/ho/ho.vue'
Vue.component('sy',sy)

// 我的信息页
import me from './pages/static/me/me.vue'
Vue.component('me',me)

// 分类信息页
import sort from './pages/static/sort/sort.vue'
Vue.component('sort',sort)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



