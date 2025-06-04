import { Suspense } from 'react';
import JobsList from './components/JobsList';
import JobsListSkeleton from './components/JobsListSkeleton';
import { FaBriefcase, FaGraduationCap, FaUniversity } from 'react-icons/fa';

export const metadata = {
  title: 'Thực tập - Tuyển dụng | Khoa CNTT IUH',
  description: 'Thông tin về cơ hội thực tập và tuyển dụng dành cho sinh viên ngành CNTT',
};

export const revalidate = 3600; // Revalidate data every hour

export default function InternshipHomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">Thực tập - Tuyển dụng</h1>
      
      <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="flex flex-col items-center bg-blue-50 p-5 rounded-lg">
            <FaBriefcase className="text-4xl text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Cơ hội việc làm</h3>
            <p className="text-center text-gray-600">Kết nối sinh viên với các doanh nghiệp đang tuyển dụng</p>
          </div>
          
          <div className="flex flex-col items-center bg-indigo-50 p-5 rounded-lg">
            <FaGraduationCap className="text-4xl text-indigo-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Chương trình thực tập</h3>
            <p className="text-center text-gray-600">Các chương trình thực tập từ đối tác doanh nghiệp của khoa</p>
          </div>
          
          <div className="flex flex-col items-center bg-purple-50 p-5 rounded-lg">
            <FaUniversity className="text-4xl text-purple-600 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Phát triển sự nghiệp</h3>
            <p className="text-center text-gray-600">Định hướng nghề nghiệp và phát triển kỹ năng chuyên môn</p>
          </div>
        </div>
        
        <p className="mb-4">
          Khoa Công nghệ Thông tin - Trường Đại học Công nghiệp TP.HCM luôn kết nối chặt chẽ với các doanh nghiệp để 
          mang đến những cơ hội thực tập và việc làm chất lượng cho sinh viên.
        </p>
        
        <p className="mb-4">
          Dưới đây là danh sách các vị trí thực tập và tuyển dụng từ trang thông tin chính thức của Khoa CNTT. 
          Các thông tin sẽ được cập nhật thường xuyên để sinh viên có thể nắm bắt cơ hội mới nhất.
        </p>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm font-medium text-yellow-800">
                Lưu ý: Khi bấm vào "Xem chi tiết", bạn sẽ được chuyển hướng đến trang thông tin chính thức của Khoa CNTT IUH.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold mb-6 text-blue-800">Danh sách cơ hội thực tập và tuyển dụng</h2>
      
      <Suspense fallback={<JobsListSkeleton />}>
        <JobsList />
      </Suspense>
    </div>
  );
} 