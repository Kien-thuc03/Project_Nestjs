import Link from 'next/link';
import Image from 'next/image';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#08387f] shadow">
        <div className="container mx-auto relative h-[70px] flex items-center">
          <div className="flex items-center">
            <Image 
              src="/images/logo-IUH-ngang-trang-300x131-1.webp" 
              alt="logo" 
              width={120} 
              height={52}
              className="ml-6"
            />
            <div className="ml-4 flex flex-col">
              <div className="text-white text-[13px] font-normal font-roboto uppercase">Thành phố Hồ Chí Minh</div>
              <div className="text-white text-[13px] font-bold font-roboto uppercase">Trường đại học công nghiệp</div>
            </div>
          </div>
          
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex space-x-8">
              <li>
                <Link href="/thesis" className="text-white text-sm font-medium font-roboto uppercase">
                  Khóa luận tốt nghiệp
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-white text-sm font-medium font-roboto uppercase">
                  Lịch khóa luận
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-white text-sm font-medium font-roboto uppercase">
                  Đăng ký khóa luận
                </Link>
              </li>
              <li>
                <Link href="/info" className="text-white text-sm font-medium font-roboto uppercase">
                  Thông tin
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-600">
                We are a company dedicated to providing the best services to our customers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-blue-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-blue-600">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <address className="not-italic text-gray-600">
                <p>123 Street Name</p>
                <p>City, Country</p>
                <p className="mt-2">Email: info@example.com</p>
                <p>Phone: +1 (123) 456-7890</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout; 