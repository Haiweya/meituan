import axios from '@/http.js'

var api = {
    getCityList(){
        return axios.get('/api/meituan/city/cityList.json')
    },
    getHotCityList(){
        return axios.get('/api/meituan/city/hot.json')
    },
    getProvinceList(){
        return axios.get('/api/meituan/city/province.json')
    },
    getRecenteList(){
        return axios.get('/api/meituan/city/recents.json')
    }
}


export default api