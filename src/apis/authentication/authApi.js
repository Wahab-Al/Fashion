import axiosInstance from '../axiosInstance'

export const userRegister = (userData) => axiosInstance.post('/auth/register', userData)
export const userLogin = (userData) => axiosInstance.post('/auth/login', userData)
export const userLogout = () => axiosInstance.post('/auth/logout')
export const userLogoutAll = () => axiosInstance.post('/auth/logoutAll')