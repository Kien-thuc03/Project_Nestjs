import { NextResponse } from 'next/server';
import axios from 'axios';

// URL cơ sở cho API
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Forward the request to the backend API using axios
    const response = await axios.post(`${API_URL}/api/auth/login`, {
      institutional_id: body.institutional_id,
      password: body.password,
    });
    
    // Return the successful response with token and user data
    return NextResponse.json({
      success: true,
      user: response.data.user,
      token: response.data.token,
    });
  } catch (error) {
    // Xử lý lỗi từ axios
    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status || 500;
      const errorMessage = error.response?.data?.message || 'Tên đăng nhập hoặc mật khẩu không chính xác';
      
      return NextResponse.json(
        { success: false, message: errorMessage },
        { status: statusCode }
      );
    }
    
    // Xử lý lỗi khác
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Có lỗi xảy ra khi xử lý yêu cầu' },
      { status: 500 }
    );
  }
} 