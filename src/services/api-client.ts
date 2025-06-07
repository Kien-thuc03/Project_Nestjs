import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// URL cơ sở cho API
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Tạo instance Axios với cấu hình mặc định
const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // timeout 10 giây
});

// Interceptor xử lý request
axiosInstance.interceptors.request.use(
  (config) => {
    // Lấy token từ localStorage hoặc sessionStorage (ưu tiên sessionStorage)
    const token = typeof window !== 'undefined' 
      ? sessionStorage.getItem('authToken') || localStorage.getItem('authToken')
      : null;
      
    // Thêm token vào header nếu có
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor xử lý response
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Xử lý lỗi
    if (error.response) {
      // Lỗi từ phía server với status code
      const { status } = error.response;

      // Xử lý lỗi 401 - Unauthorized
      if (status === 401) {
        // Xóa token và thông tin người dùng
        if (typeof window !== 'undefined') {
          localStorage.removeItem('authToken');
          localStorage.removeItem('user');
          sessionStorage.removeItem('authToken');
          sessionStorage.removeItem('user');
          
          // Chuyển hướng đến trang đăng nhập
          window.location.href = '/login';
        }
      }
    }
    
    return Promise.reject(error);
  }
);

// Định nghĩa các hàm tiện ích
export const apiClient = {
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => 
    axiosInstance.get(url, config).then((res: AxiosResponse) => res.data),
    
  post: <T, R>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> => 
    axiosInstance.post(url, data, config).then((res: AxiosResponse) => res.data),
    
  put: <T, R>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> => 
    axiosInstance.put(url, data, config).then((res: AxiosResponse) => res.data),
    
  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => 
    axiosInstance.delete(url, config).then((res: AxiosResponse) => res.data),
};

export default axiosInstance; 