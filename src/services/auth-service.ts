import { apiClient } from './api-client';
import { User } from '@/types/User';

export interface LoginRequest {
  institutional_id: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  user: User;
  token: string;
  message?: string;
}

export interface AuthResponse {
  success: boolean;
  user: User;
  message?: string;
}

export interface LogoutResponse {
  success: boolean;
  message: string;
}

/**
 * Service xử lý các chức năng xác thực
 */
export const authService = {
  /**
   * Đăng nhập người dùng
   * @param credentials Thông tin đăng nhập
   * @returns Kết quả đăng nhập và thông tin người dùng
   */
  login: (credentials: LoginRequest): Promise<LoginResponse> => {
    return apiClient.post<LoginRequest, LoginResponse>('/auth/login', credentials);
  },

  /**
   * Lấy thông tin người dùng hiện tại
   * @returns Thông tin người dùng
   */
  getCurrentUser: (): Promise<AuthResponse> => {
    return apiClient.get<AuthResponse>('/auth/me');
  },

  /**
   * Đăng xuất người dùng
   * @returns Kết quả đăng xuất
   */
  logout: (): Promise<LogoutResponse> => {
    return apiClient.post<undefined, LogoutResponse>('/auth/logout', undefined);
  },

  /**
   * Lưu thông tin đăng nhập
   * @param token Token xác thực
   * @param user Thông tin người dùng
   * @param rememberMe Ghi nhớ đăng nhập
   */
  saveAuth: (token: string, user: User, rememberMe: boolean): void => {
    if (typeof window === 'undefined') return;
    
    if (rememberMe) {
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      sessionStorage.setItem('authToken', token);
      sessionStorage.setItem('user', JSON.stringify(user));
    }
  },

  /**
   * Xóa thông tin đăng nhập
   */
  clearAuth: (): void => {
    if (typeof window === 'undefined') return;
    
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('user');
  },

  /**
   * Kiểm tra xem người dùng đã đăng nhập chưa
   * @returns Trạng thái đăng nhập
   */
  isAuthenticated: (): boolean => {
    if (typeof window === 'undefined') return false;
    
    return !!(sessionStorage.getItem('authToken') || localStorage.getItem('authToken'));
  },

  /**
   * Lấy thông tin người dùng từ localStorage hoặc sessionStorage
   * @returns Thông tin người dùng
   */
  getUser: (): User | null => {
    if (typeof window === 'undefined') return null;
    
    const userStr = sessionStorage.getItem('user') || localStorage.getItem('user');
    if (!userStr) return null;
    
    try {
      return JSON.parse(userStr) as User;
    } catch (error) {
      console.error('Lỗi khi phân tích thông tin người dùng:', error);
      return null;
    }
  },
}; 