import React from 'react';
import Link from "next/link";
import { Carousel } from 'antd';
import Image from 'next/image';

const contentStyle: React.CSSProperties = {
  height: '600px',
  width: '100%',
  position: 'relative',
  objectFit: 'cover',
};

export default function Home() {
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

      {/* Main Content */}
      <main className="flex-1">
        {/* Carousel */}
        <div className="w-full">
          <Carousel 
            autoplay={{ dotDuration: true }} 
            autoplaySpeed={5000} 
            effect="fade" 
            dots={true}
            className="carousel-custom"
          >
            <div>
              <div style={contentStyle} className="relative">
                <Image src="/images/sl01.webp" alt="Toàn cảnh khuôn viên Đại học Công nghiệp TP.HCM" fill style={{ objectFit: 'cover' }} priority />
                <div className="absolute bottom-8 left-8 bg-black bg-opacity-60 text-white p-4 max-w-md rounded-sm">
                  <h3 className="text-xl font-bold">Toàn cảnh khuôn viên Đại học Công nghiệp TP.HCM</h3>
                </div>
              </div>
            </div>
            <div>
              <div style={contentStyle} className="relative">
                <Image src="/images/sl02.webp" alt="Slide 2" fill style={{ objectFit: 'cover' }} />
                <div className="absolute bottom-8 left-8 bg-black bg-opacity-60 text-white p-4 max-w-md rounded-sm">
                  <h3 className="text-xl font-bold">Cơ sở vật chất hiện đại</h3>
                </div>
              </div>
            </div>
            <div>
              <div style={contentStyle} className="relative">
                <Image src="/images/sl03.webp" alt="Slide 3" fill style={{ objectFit: 'cover' }} />
                <div className="absolute bottom-8 left-8 bg-black bg-opacity-60 text-white p-4 max-w-md rounded-sm">
                  <h3 className="text-xl font-bold">Môi trường học tập chuyên nghiệp</h3>
                </div>
              </div>
            </div>
            <div>
              <div style={contentStyle} className="relative">
                <Image src="/images/sl04.webp" alt="Slide 4" fill style={{ objectFit: 'cover' }} />
                <div className="absolute bottom-8 left-8 bg-black bg-opacity-60 text-white p-4 max-w-md rounded-sm">
                  <h3 className="text-xl font-bold">Hoạt động nghiên cứu và thực hành</h3>
                </div>
              </div>
            </div>
            <div>
              <div style={contentStyle} className="relative">
                <Image src="/images/sl05.webp" alt="Slide 5" fill style={{ objectFit: 'cover' }} />
                <div className="absolute bottom-8 left-8 bg-black bg-opacity-60 text-white p-4 max-w-md rounded-sm">
                  <h3 className="text-xl font-bold">Trang thiết bị dạy học hiện đại</h3>
                </div>
              </div>
            </div>
            <div>
              <div style={contentStyle} className="relative">
                <Image src="/images/sl06.webp" alt="Slide 6" fill style={{ objectFit: 'cover' }} />
                <div className="absolute bottom-8 left-8 bg-black bg-opacity-60 text-white p-4 max-w-md rounded-sm">
                  <h3 className="text-xl font-bold">Thư viện và không gian học tập</h3>
                </div>
              </div>
            </div>
          </Carousel>
        </div>

        {/* Info Strips */}
        <div className="bg-[#b92025] text-white overflow-hidden">
          <div className="container mx-auto relative">
            <div className="flex py-3 whitespace-nowrap">
              <div className="animate-marquee inline-block">
                <span className="mx-4 font-medium">TRANG SINH VIÊN: THÔNG BÁO MỚI NHẤT VỀ ĐĂNG KÍ KHÓA LUẬN TỐT NGHIỆP</span>
                <span className="mx-4 font-medium">•</span>
                <span className="mx-4 font-medium">THỜI GIAN MỞ ĐĂNG KÝ NHÓM SINH VIÊN</span>
                <span className="mx-4 font-medium">•</span>
                <span className="mx-4 font-medium">TRANG QUẢN LÝ KHÓA LUẬN TỐT NGHIỆP KHOA CÔNG NGHỆ THÔNG TIN</span>
                <span className="mx-4 font-medium">•</span>
              </div>
              <div className="animate-marquee inline-block absolute left-0">
                <span className="mx-4 font-medium">TRANG SINH VIÊN: THÔNG BÁO MỚI NHẤT VỀ ĐĂNG KÍ KHÓA LUẬN TỐT NGHIỆP</span>
                <span className="mx-4 font-medium">•</span>
                <span className="mx-4 font-medium">THỜI GIAN MỞ ĐĂNG KÝ NHÓM SINH VIÊN</span>
                <span className="mx-4 font-medium">•</span>
                <span className="mx-4 font-medium">TRANG QUẢN LÝ KHÓA LUẬN TỐT NGHIỆP KHOA CÔNG NGHỆ THÔNG TIN</span>
                <span className="mx-4 font-medium">•</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
