import axios from '@/http.js'

var api = {
    register (params) {
        return axios.get('/api/meituan/register', params)
      }
}


export default api