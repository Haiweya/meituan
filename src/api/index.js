import axios from '@/http.js'

var api = {
    getGoods(){
        return axios.get('/api/meituan/index/resultsByKeywords.json')
    },
    
}


export default api