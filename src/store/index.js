

import Vue from 'vue'
import Vuex from 'vuex'

import chunks from './chunks'

// import { saveCityInStorage } from './plugins'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        chunks
    },
    // plugins: [saveCityInStorage]
})

export default store