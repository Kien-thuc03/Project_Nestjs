import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
  title: 'Đăng nhập',
  description: 'Đăng nhập vào hệ thống quản lý khóa luận',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
            Đăng nhập vào hệ thống
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Trường Đại học Công nghiệp TP. Hồ Chí Minh
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
} 