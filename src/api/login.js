import axios from '@/http.js'

var api = {
    login (params) {
        return axios.get('/api/meituan/login', params)
      },
}


export default api