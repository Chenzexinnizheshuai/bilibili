import Vue from 'vue'
import Router from 'vue-router'
import AppDetail from "./components/detail/detail.vue"
import AppAll from "./components/all/all.vue"
import AppShop from "./components/shop/shop.vue"
import AppCar from "./components/shop/car.vue"
Vue.use(Router)
const routes = [
  {
    path : "/",
    name : "appall",
    component : AppAll,
  },
  {
    path : "/detail",
    name : "detail",
    component : AppDetail
  },
  {
    path : "/shop" ,
    name : "shop" , 
    component : AppShop
  },
  {
    path : "/car" , 
    name : "car" ,
    component : AppCar
  }
]
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
