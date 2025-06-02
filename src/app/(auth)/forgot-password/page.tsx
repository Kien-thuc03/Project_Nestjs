import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';

export const metadata = {
  title: 'Quên mật khẩu',
  description: 'Yêu cầu đặt lại mật khẩu cho tài khoản của bạn',
};

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
            Quên mật khẩu
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Nhập email đăng ký để nhận hướng dẫn đặt lại mật khẩu
          </p>
        </div>
        <ForgotPasswordForm />
      </div>
    </div>
  );
} 