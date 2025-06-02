import { NextResponse } from 'next/server';
import { User } from '@/types/User';

const API_URL = process.env.API_URL;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Fetch users from external API
    const response = await fetch(API_URL + '/users');
    
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    
    const users = await response.json();

    // Kiểm tra email có tồn tại không
    const user = users.find((u: User) => u.email === email);

    if (!user) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Không tìm thấy tài khoản với email này' 
        },
        { status: 404 }
      );
    }

    // Trong ứng dụng thực tế:
    // 1. Tạo token reset password
    // 2. Lưu token vào database với thời hạn
    // 3. Gửi email với link reset password
    
    // Mock response để demo
    return NextResponse.json({
      success: true,
      message: `Một email đã được gửi đến ${email} với hướng dẫn đặt lại mật khẩu`,
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json(
      { success: false, message: 'Có lỗi xảy ra khi xử lý yêu cầu' },
      { status: 500 }
    );
  }
} 