import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaFacebookSquare, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';



interface BaseLayoutProps {
    children: React.ReactNode;
  }
  
  const BaseLayout = ({ children }: BaseLayoutProps) => {
    return (
      <div className="flex flex-col min-h-screen">
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

  export default BaseLayout;