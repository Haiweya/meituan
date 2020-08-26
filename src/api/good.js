import axios from '@/http.js'

var api = {
    getGoodsList(){
        return axios.get('/api/meituan/list/goodsList.json')
    },
    getClassifyList(){
        return axios.get('/api/meituan/list/classify.json')
    },
    getAreaList(){
        return axios.get(' /api/meituan/list/areaList.json')//请求为空
    }
}


export default api