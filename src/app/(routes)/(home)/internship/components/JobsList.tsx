import Image from 'next/image';

interface Job {
  title: string;
  description: string;
  date: string;
  url: string;
  image: string;
}

const jobs: Job[] = [
  {
    title: 'Trường ĐH Công nghiệp TPHCM thông báo tuyển dụng viên chức năm 2025 – Lần 1',
    description: 'Trường ĐH Công nghiệp TPHCM thông báo tuyển dụng viên chức năm 2025 – Lần 1',
    date: '28-05-2025',
    url: 'https://fit.iuh.edu.vn/news.html@detail@104@3418@Truong-DH-Cong-nghiep-TPHCM-thong-bao-tuyen-dung-vien-chuc-nam-2025-%E2%80%93-Lan-1',
    image: '',
  },
  {
    title:' [DXC VietNam]: TUYỂN FRESHER/ INTERN TẠI DXC VIỆT NAM',
    description:'NỘI DUNG CHƯƠNG TRÌNH FRESHER/ INTERN TẠI DXC VIỆT NAM Thời gian thực tập: 3-6 tháng Programming skills training: SERVICENOW DEVELOPER (JAVASCRIPT CODING) Phụ cấp thực tập: 5 triệu đồng hàng...',
    date: '25-10-2024',
    url: 'https://fit.iuh.edu.vn/news.html@detail@104@3335@[DXC-VietNam]-TUYEN-FRESHER--INTERN-TAI-DXC-VIET-NAM',
    image: 'https://fit.iuh.edu.vn/upload/01220022/files/DXC%20Logo_Purple%2BBlack%20RGB.png',
  },
  {
    title: '[DigiTech Solutions]: Tuyển thực tập sinh',
    description: 'DigiTech Solutions cần tuyển các thực tập sinh ở các lĩnh vực. Để xem chi tiết công việc và yêu cầu thì vào các đường link sau: + Thực tập...',
    date: '02-10-2024',
    url: 'https://fit.iuh.edu.vn/news.html@detail@104@3335@[DXC-VietNam]-TUYEN-FRESHER--INTERN-TAI-DXC-VIET-NAM',
    image: 'https://fit.iuh.edu.vn/upload/01220022/files/t%E1%BA%A3i%20xu%E1%BB%91ng.png',
  }
]


export default function JobsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div className="p-1 h-48 bg-gray-100">
            <Image src={job.image || '/images/img_default.png'}  alt={job.title} width={100} height={100} />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-bold">{job.title}</h3>
            <p className="text-gray-600">{job.description}</p>
            <p className="text-gray-600">{job.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}