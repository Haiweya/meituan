import axios from '@/http.js'

var api = {
    getCurPosition () {
        return axios.get('/api/meituan/city/getPosition.json')
      },
}


export default api