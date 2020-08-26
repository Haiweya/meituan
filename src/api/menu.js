import axios from '@/http.js'

var api = {
    getMenuList (){
        return axios.get('/api/meituan/index/nav.json')
    }
}


export default api