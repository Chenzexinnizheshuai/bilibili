import Vue from 'vue'
import Vuex from 'vuex'
import homemodule from '@/store/homemodule'

Vue.use(Vuex)
export default new Vuex.Store({
  modules : {
    homemodule ,
  }
})
