
import { CHANGE_CITY } from '@/store/chunks/mutation-type'

const saveCityInStorage = (store) => {
    // 给store订阅一个函数，这个函数会在每一次commit的时候执行
    store.subscribe((mutation, state) => {
        // 如果这次提交是要更改city，就将更改后的city保存在存储中
        if ( mutation.type === 'chunks/' + CHANGE_CITY ) {

            localStorage.city = JSON.stringify(mutation.payload.city)
        }
    })
}

export { saveCityInStorage }