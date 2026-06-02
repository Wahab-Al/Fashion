import axios from "axios";


const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})


// Request interceptor, attach token from cookie to every request
axiosInstance.interceptors.request.use((config)=>{
  const token = document.cookie.split(';')
    .find(row => row.startsWith('token='))
    ?.split('=')[1]

    if(token){
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
})


// Response interceptor, handle 401 globally
axiosInstance.interceptors.response.use((response)=> response,
  (error)=>{
    if(error.response?.status === 401){
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/'
      window.location.href = '/login'
    }
    if(!error.response){
      console.error('Network error, no response from server')
      return Promise.reject(new Error('Network error, check your connection'))
    }
    return Promise.reject(error)
  }
)


export default axiosInstance