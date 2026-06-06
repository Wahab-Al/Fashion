import axiosInstance from '../axiosInstance'

export const userRegister = (userData) => axiosInstance.post('/users/register', userData)
export const userLogin = (userData) => axiosInstance.post('/users/login', userData)
export const userlogout = (userData) => axiosInstance.post('/users/logout', userData)
export const userLogoutAll = (userData) => axiosInstance.post('/users/logoutAll', userData)