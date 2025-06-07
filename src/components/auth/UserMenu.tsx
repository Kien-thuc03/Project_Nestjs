'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@/lib/fontawesome';
import { authService } from '@/services/auth-service';
import { User } from '@/types/User';

export default function UserMenu() {
  const [user, setUser] = useState<User | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Lấy thông tin người dùng từ localStorage/sessionStorage khi component mount
  useEffect(() => {
    const storedUser = authService.getUser();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Xử lý đăng xuất
  const handleLogout = async () => {
    try {
      // Gọi API đăng xuất thông qua service
      await authService.logout();
      
      // Xóa dữ liệu đăng nhập
      authService.clearAuth();
      
      // Chuyển về trang đăng nhập
      router.push('/login');
    } catch (error) {
      console.error('Lỗi khi đăng xuất:', error);
    }
  };

  // Toggle menu dropdown
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Chuyển đổi role từ tiếng Anh sang tiếng Việt
  const translateRole = (role: string): string => {
    switch (role) {
      case 'admin':
        return 'Quản trị viên';
      case 'teacher':
        return 'Giảng viên';
      case 'student':
        return 'Sinh viên';
      default:
        return role;
    }
  };

  // Nếu không có thông tin người dùng, hiển thị nút đăng nhập
  if (!user) {
    return (
      <button 
        onClick={() => router.push('/login')} 
        className="bg-[#0c50b5] rounded-sm shadow px-4 py-1.5 inline-flex items-center gap-2 hover:bg-[#08387f]/80 transition-colors duration-300 cursor-pointer"
      >
        <div className="text-white text-[10px] font-medium font-roboto uppercase">
          <FontAwesomeIcon icon={faUser} className="mr-1 w-3.5 h-3.5" />
          Đăng nhập
        </div>
      </button>
    );
  }

  // Hiển thị menu người dùng đã đăng nhập
  return (
    <div className="relative">
      <button 
        onClick={toggleMenu}
        className="bg-[#0c50b5] rounded-sm shadow px-4 py-1.5 inline-flex items-center gap-2 hover:bg-[#08387f]/80 transition-colors duration-300 cursor-pointer"
      >
        <div className="text-white text-[10px] font-medium font-roboto uppercase">
          <FontAwesomeIcon icon={faUser} className="mr-1 w-3.5 h-3.5" />
          {user.full_name}
        </div>
      </button>
      
      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-4 py-2 text-xs text-gray-500">
            <div className="font-medium text-gray-900">{user.full_name}</div>
            <div>{translateRole(user.role)}</div>
          </div>
          <hr className="my-1" />
          <button
            onClick={() => router.push('/profile')}
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            Thông tin tài khoản
          </button>
          <button
            onClick={() => router.push('/change-password')}
            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
          >
            Đổi mật khẩu
          </button>
          <hr className="my-1" />
          <button
            onClick={handleLogout}
            className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
          >
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
} 