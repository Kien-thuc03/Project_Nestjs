import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaFacebookSquare, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-[#003366] text-white shadow-md">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center py-2">
            <Image src="/images/logo-IUH-ngang-trang-300x131-1.webp" alt="IUH Logo" width={150} height={65} className="h-16 w-auto" />
            <div className="ml-4 flex flex-col items-center">
              <div className="text-sm font-medium">THÀNH PHỐ HỒ CHÍ MINH</div>
              <div className="font-bold text-lg tracking-wide">TRƯỜNG ĐẠI HỌC CÔNG NGHIỆP</div>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-1">
            <Link href="/internship" className="py-6 px-3 font-medium hover:text-blue-200 text-sm border-b-4 border-transparent hover:border-white transition">THỰC TẬP - TUYỂN DỤNG</Link>
            <Link href="#" className="py-6 px-3 font-medium hover:text-blue-200 text-sm border-b-4 border-transparent hover:border-white transition">LỊCH KHÓA LUẬN</Link>
            <Link href="#" className="py-6 px-3 font-medium hover:text-blue-200 text-sm border-b-4 border-transparent hover:border-white transition">ĐĂNG KÝ KHÓA LUẬN</Link>
            <Link href="#" className="py-6 px-3 font-medium hover:text-blue-200 text-sm border-b-4 border-transparent hover:border-white transition">THÔNG TIN</Link>
          </div>
          
          <div className="hidden md:block">
            <Link href="/login" className="py-2 px-4 bg-blue-700 rounded-md font-medium hover:bg-blue-600 flex items-center transition text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
              ĐĂNG NHẬP
            </Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#0a1e45] to-[#132e65] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Address */}
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-4">
                <Image 
                  src="/images/logo-IUH-ngang-trang-300x131-1.webp" 
                  alt="IUH Logo" 
                  width={180} 
                  height={78} 
                  className="h-auto w-auto" 
                />
              </div>
              <div className="text-gray-300 text-center md:text-left">
                <p className="flex items-center mb-2">
                  <FaMapMarkerAlt className="mr-2" />
                  12 Nguyễn Văn Bảo, Phường 4, Gò Vấp, Hồ Chí Minh
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-bold mb-6 text-white border-b border-blue-400 pb-2 inline-block">
                THÔNG TIN LIÊN HỆ
              </h2>
              <address className="not-italic text-gray-300 flex flex-col space-y-4">
                <p className="flex items-center">
                  <span className="bg-white rounded-full p-2 mr-3 flex-shrink-0">
                    <FaMapMarkerAlt className="text-[#132e65] w-5 h-5" />
                  </span>
                  <span>Khoa Công nghệ Thông tin - Lầu 1 - Nhà H</span>
                </p>
                <p className="flex items-center">
                  <span className="bg-white rounded-full p-2 mr-3 flex-shrink-0">
                    <FaPhone className="text-[#132e65] w-5 h-5" />
                  </span>
                  <span>Điện thoại: 028. 389.40390 - 167</span>
                </p>
                <p className="flex items-center">
                  <span className="bg-white rounded-full p-2 mr-3 flex-shrink-0">
                    <FaEnvelope className="text-[#132e65] w-5 h-5" />
                  </span>
                  <span>Email: daotao.fit@iuh.edu.vn</span>
                </p>
                <p className="flex items-center">
                  <span className="bg-white rounded-full p-2 mr-3 flex-shrink-0">
                    <FaGlobe className="text-[#132e65] w-5 h-5" />
                  </span>
                  <span>Website Khoa CNTT: 
                    <a href="https://fit.iuh.edu.vn" className="text-blue-300 hover:text-blue-100 ml-1 hover:underline transition">
                      fit.iuh.edu.vn
                    </a>
                  </span>
                </p>
              </address>
            </div>

            {/* Links and Social */}
            <div>
              <h2 className="text-xl font-bold mb-6 text-white border-b border-blue-400 pb-2 inline-block">
                KẾT NỐI VỚI CHÚNG TÔI
              </h2>
              <div className="flex space-x-4 mb-6">
                <a href="https://www.facebook.com/sviuh" aria-label="Facebook" className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all transform hover:scale-110">
                  <FaFacebookSquare className="w-6 h-6" />
                </a>
                <a href="#" aria-label="Youtube" className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-all transform hover:scale-110">
                  <FaYoutube className="w-6 h-6" />
                </a>
                <a href="#" aria-label="Twitter" className="bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-full transition-all transform hover:scale-110">
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a href="#" aria-label="LinkedIn" className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-full transition-all transform hover:scale-110">
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
              <div className="text-gray-300">
                <h3 className="font-semibold mb-3">LIÊN KẾT NHANH</h3>
                <ul className="space-y-2">
                  <li><a href="https://iuh.edu.vn" className="hover:text-blue-300 hover:underline transition">Trang chủ IUH</a></li>
                  <li><a href="https://sv.iuh.edu.vn" className="hover:text-blue-300 hover:underline transition">Cổng thông tin sinh viên</a></li>
                  <li><a href="https://lms.iuh.edu.vn" className="hover:text-blue-300 hover:underline transition">Hệ thống học tập trực tuyến</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p className="text-sm">&copy; 2017 Khoa Công nghệ thông tin - Đại học Công nghiệp Thành phố Hồ Chí Minh</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout; 