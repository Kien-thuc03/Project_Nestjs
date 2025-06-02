import { NextResponse } from 'next/server';
import { sign } from 'jsonwebtoken';
import { User } from '@/types/User';

// JWT secret
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const API_URL = process.env.API_URL;

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // Fetch users from external API
    const response = await fetch(API_URL + '/users');
    
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    
    const users = await response.json();

    // Tìm người dùng
    const user = users.find(
      (u: User) => u.username === username && u.password === password
    );

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Tên đăng nhập hoặc mật khẩu không chính xác' },
        { status: 401 }
      );
    }

    // Tạo JWT token
    const token = sign(
      {
        id: user.id,
        username: user.username,
        role: user.role,
      },
      JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Loại bỏ mật khẩu trước khi trả về
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({
      success: true,
      token,
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Có lỗi xảy ra khi xử lý yêu cầu' },
      { status: 500 }
    );
  }
} 