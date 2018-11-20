
import {
    CHANGE_CITY
}from './mutations-type'

// const mutations = {

// }


export default {
    [CHANGE_CITY]: (state,payload) => {
        state.city = payload.city
        // state.cities = payload.cities
    }
}