'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEye, faEyeSlash } from '@/lib/fontawesome';
import { authService } from '@/services/auth-service';
import axios, { AxiosError } from 'axios';

export default function LoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    institutional_id: '',
    password: '',
    rememberMe: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Gọi API đăng nhập thông qua service
      const data = await authService.login({
        institutional_id: formData.institutional_id,
        password: formData.password,
      });

      // Lưu thông tin đăng nhập
      authService.saveAuth(data.token, data.user, formData.rememberMe);

      // Chuyển hướng dựa vào role
      switch (data.user.role) {
        case 'ADMIN':
          router.push('/admin/dashboard');
          break;
        case 'LECTURER':
          router.push('/teacher/dashboard');
          break;
        case 'STUDENT':
          router.push('/student/dashboard');
          break;
        case 'DEAN':
          router.push('/dean/dashboard');
          break;
        case 'VICE_DEAN':
          router.push('/vice-dean/dashboard');
          break;
        default:
          router.push('/');
      }
    } catch (err) {
      let errorMessage = 'Có lỗi xảy ra khi đăng nhập';
      
      // Xử lý thông báo lỗi từ API
      if (err instanceof Error) {
        errorMessage = err.message;
      } else if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError;
        if (axiosError.response?.data && typeof axiosError.response.data === 'object') {
          const responseData = axiosError.response.data as Record<string, unknown>;
          if (typeof responseData.message === 'string') {
            errorMessage = responseData.message;
          }
        }
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/40 backdrop-blur-sm rounded-lg shadow-lg p-8 w-full max-w-md mx-auto">
      <div className="flex flex-col items-center mb-6">
        <div className="relative h-16 w-32 mb-4">
          <Image 
            src="/images/logo-IUH-ngang-trang-300x131-1.webp" 
            alt="IUH Logo" 
            fill
            style={{ objectFit: 'contain' }}
            className="mb-4"
          />
        </div>
        <h1 className="text-2xl font-bold text-center text-gray-800 tracking-wide">
          ĐĂNG NHẬP HỆ THỐNG
        </h1>
        <div className="w-32 h-1 bg-blue-600 mt-2"></div>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        <div>
          <label htmlFor="institutional_id" className="block text-sm font-medium text-gray-700 mb-1">
            Tên đăng nhập
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faUser} className="text-gray-500" />
            </div>
            <input
              id="institutional_id"
              name="institutional_id"
              type="text"
              required
              value={formData.institutional_id}
              onChange={handleChange}
              className="appearance-none rounded-md relative block w-full pl-10 pr-3 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Nhập mã số cá nhân"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Mật khẩu
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faLock} className="text-gray-500" />
            </div>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              value={formData.password}
              onChange={handleChange}
              className="appearance-none rounded-md relative block w-full pl-10 pr-10 py-2.5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
              placeholder="Nhập mật khẩu"
            />
            <div 
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-500 hover:text-gray-700"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-gray-500" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="rememberMe"
              type="checkbox"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Ghi nhớ đăng nhập
            </label>
          </div>

          <div className="text-sm">
            <Link
              href="/forgot-password"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Quên mật khẩu?
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className={`group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-md text-white transition-colors ${
              loading 
                ? 'bg-blue-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            }`}
          >
            {loading ? 'Đang xử lý...' : 'Đăng nhập'}
          </button>
        </div>
      </form>
    </div>
  );
} 