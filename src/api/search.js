 import axios from '@/http.js'

 var api = {
     getSearchHotwords(){
         return axios.get('/api/meituan/header/searchHotWords.json')
     },
     getSearchList(){
         return axios.get('/api/meituan/header/search.json')
     }
 }


 export default api