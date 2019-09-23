import Vue from 'vue'
import App from './App.vue'
import bugs from './components/bugs'
import add from "@/components/add";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import VueRouter from "vue-router";
Vue.config.productionTip = false
Vue.use(VueRouter)
const router=new VueRouter({
    mode:"history",
    base:__dirname,
    routes:[
        {
            path:"/",component:bugs
        },
        {
            path: '/bug/add',component: add
        }
    ]
})
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
