import React from 'react';
import Link from "next/link";
import { Carousel } from 'antd';
import Image from 'next/image';
import MainLayout from '@/components/layouts/MainLayout';

const contentStyle: React.CSSProperties = {
  height: '600px',
  width: '100%',
  position: 'relative',
  objectFit: 'cover',
};

export default function Home() {
  return (
    <MainLayout>
    <div className="flex flex-col min-h-screen">
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
    </MainLayout>
  );
}
