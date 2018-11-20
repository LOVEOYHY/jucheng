import axios from 'axios'
import { Indicator } from 'mint-ui';


const ajax = (options,all) => {
    let _react = options.react === undefined ? true : options.react

    if ( options.loading ) Indicator.open({
        text: '加载中...',
        spinnerType: 'triple-bounce'
      })

    return axios(options)
        .then(res => {
            if (res.data.code === 1) {
                if (_react) console.log('数据获取成功')
            } else {
                if (_react) console.log('数据获取失败')
            }
            if ( options.loading ) Indicator.close()
            return all ? res : (res.data.data ? res.data.data : res.data)          
        })
        .catch(err => {
            if ( options.loading ) Indicator.close()
            return err
            console.log('数据请求失败')
        })

}

export default ajax