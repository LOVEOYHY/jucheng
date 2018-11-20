<template>
    <div class="app-cities-content">
        <mt-index-list>
            <mt-index-section 
                v-for = "(value) in cities"
                :key  = "value.id"
                :index="value.id"
            >
                <mt-cell
                    v-for = "city in value.lists"
                    :key  = "city.id"
                    :title= "city.name" 
                    @click.native = "changeCity(city)"
                ></mt-cell>
            </mt-index-section>
        </mt-index-list>
     </div>
</template>

<script>

import { IndexList, IndexSection, Cell } from 'mint-ui';
import { mapState } from 'vuex'
import { CHANGE_CITY } from '@/store/chunks/mutations-type'
export default {
    components: {
        [IndexList.name]: IndexList,
        [IndexSection.name]: IndexSection,
        [Cell.name]: Cell
    },
    computed: mapState(['chunks']),
    async created () {
        let result = await this.$http({
            url: '/jucheng/Index/getCityList',
            method: 'POST',
            
        })
        // this.mid_cities = Object.values(result.city_list)
        this.new_city = Object.values(result.city_list)
        // console.log(result)
        // console.log(typeof this.mid_cities)
        // console.log(this.cities)
        // console.log(result.city_list)
        // console.log(this.cities)
        // console.log(this.cities.map(item => item))
        // await this.hotcities(this.cities)
        let a = []
        this.new_city.forEach(value => {
            // console.log(value.lists)
            // a = a.push(value.lists)
            // console.log(a)
            a = a.concat(value.lists)
            // for (let value in a){
            //     // console.log(value)
            // }
        });
            // console.log(a)
        let b = a.filter(value => 
            value.is_city == 0
        )
        // console.log(b)
        // console.log(this.city[2])
        this.thecity[2].lists =  this.thecity[2].lists.concat(b)
        this.thecity[0].lists.push({id:this.$store.state.chunks.city.cityId , name: this.$store.state.chunks.city.cityName})
        // this.thecity[0].lists.push(this.obj)
        // console.log(this.city)
        // let obj = {id: 9, name: '你猜'}
        // this.thecity[0].lists.push(obj)
        // console.log(this.thecity[0].lists,obj)
        this.cities = this.thecity.concat(Object.values(result.city_list))
        // console.log(this.cities)


    },
    data () {
        return {
            thecity: [
                {id: '当前', lists: [  ] },
                {id: '定位', lists: [ {id: '' ,name: '定位完成'} ] },
                {id: '热门', lists: [  ] }
            ],
            cities: [],
            new_city: [],
            // obj: {id: id?id:0 , name: this.$store.state.chunks.city.cityName?this.$store.state.chunks.city.cityName:'全国'}
        }
    },
    // computed: mapState(['chunks']),

    methods: {
        changeCity ({id: cityId, name: cityName, is_city: is_City}) {
            this.$store.commit({type: 'chunks/' + CHANGE_CITY, city: {
                cityId, cityName, is_City
            }})
            this.$router.push({name: 'home'})
            // console.log(cityId, cityName)
        }
    }
}
</script>

<style lang="scss">
    .app-cities-content {

    }
    .mint-indexsection-index{
        height: .8rem;
        line-height: .8rem;
        background-color: #f5f5f5;
        font-size: .426667rem;
    }
    .mint-indexlist-navitem{
        font-size: .373333rem;
    }
    .mint-cell-wrapper{
        font-size: .4rem;
        line-height: 60px;
    }
    .mint-indexlist-indicator{
        height: 1.333333rem;
        width: 1.333333rem;
        color: #f60;
        line-height: 1.333333rem;
        font-size: .4rem;
        background-color: #ccc;
    }
    // span.mint-cell-title:first-of-type{
    //     color: #ff7919;
    // }
</style>