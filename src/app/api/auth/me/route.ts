import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

// URL cơ sở cho API
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET(request: NextRequest) {
  try {
    // Get token from Authorization header
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { success: false, message: 'Token không hợp lệ' }, 
        { status: 401 }
      );
    }

    const token = authHeader.split(' ')[1];
    
    // Forward the request to the backend API using axios
    const response = await axios.get(`${API_URL}/api/auth/me`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    });
    
    // Return the successful response with user data
    return NextResponse.json({
      success: true,
      user: response.data.user,
    });
  } catch (error) {
    // Xử lý lỗi từ axios
    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status || 401;
      const errorMessage = error.response?.data?.message || 'Xác thực thất bại';
      
      return NextResponse.json(
        { success: false, message: errorMessage },
        { status: statusCode }
      );
    }
    
    // Xử lý lỗi khác
    console.error('Auth error:', error);
    return NextResponse.json(
      { success: false, message: 'Xác thực thất bại' },
      { status: 401 }
    );
  }
} 