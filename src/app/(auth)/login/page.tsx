import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
  title: 'Đăng nhập',
  description: 'Đăng nhập vào hệ thống quản lý Thực tập doanh nghiệp',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" 
        style={{ 
          backgroundImage: `url('/images/image-1_Campus-IUH_bgLogin.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div className="relative z-10 w-full max-w-md px-4">
        <LoginForm />
        
        <div className="mt-6 text-center text-sm text-white">
          <p>Trang quản lý Thực tập doanh nghiệp</p>
          <p className="mt-1">Trường Đại học Công nghiệp TP. Hồ Chí Minh</p>
        </div>
      </div>
    </div>
  );
} 