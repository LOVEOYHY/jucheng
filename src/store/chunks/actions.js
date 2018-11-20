
import http from '@util/axios'

import {
    CHANGE_CITY
}from './mutations-type'

// const actions = {

// }

export default {
    async getCurrentPosition (context) {
        let cityId = 0
        let cityName =  '全国'
        let is_City = 0
        
        // 先去获取城市信息
        let thecities = await http({
            url: '/jucheng/Index/getCityList',
            method: 'POST'
        })
        let new_cities = Object.values(thecities.city_list)
        let citys = []
        new_cities.forEach(value => {
            citys = citys.concat(value.lists)
        })
        // console.log(citys)
        // 定位当前城市
        let result = await http({
            url: '/bd/location/ip',
            params: {
                ak: 'EajH3hpCLeGgNMbnPqbVl1Bm9PWGD0HO'
            }
        }, true)

        // console.log(result)

        if ( result ) { // 如果定位成功
            cityName =  result.data.content.address.replace('市', '')
            for (let i = 0; i < citys.length; i++) {
                if ( citys[i].name === cityName ) {
                    cityId = citys[i].id
                    is_City = citys[i].is_city
                    // console.log(citys[i].name,cityName)
                    // console.log(citys[i].id,cityId)
                    break;
                }
            }
        } 
        context.commit({
            type: CHANGE_CITY,
            city: { cityId, cityName, is_City },
            // cities: citys.cities
        })
        // console.log(cityId,cityName)
    }
}