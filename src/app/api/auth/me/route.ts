import { NextRequest, NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

// JWT secret
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Mock database - trong dự án thực tế, cần dùng database thực
const users = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123',
    role: 'admin',
    name: 'Admin',
  },
  {
    id: 2,
    username: 'teacher',
    password: 'teacher123',
    role: 'teacher',
    name: 'Giảng viên',
  },
  {
    id: 3,
    username: 'student',
    password: 'student123',
    role: 'student',
    name: 'Sinh viên',
  },
];

export async function GET(request: NextRequest) {
  try {
    // Lấy token từ Authorization header
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { success: false, message: 'Token không hợp lệ' }, 
        { status: 401 }
      );
    }

    const token = authHeader.split(' ')[1];
    
    // Xác thực token
    const decoded = verify(token, JWT_SECRET) as { id: number };
    
    // Tìm user từ ID trong token
    const user = users.find(u => u.id === decoded.id);
    
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Người dùng không tồn tại' },
        { status: 404 }
      );
    }
    
    // Loại bỏ mật khẩu trước khi trả về
    const { password: _, ...userWithoutPassword } = user;
    
    return NextResponse.json({
      success: true,
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { success: false, message: 'Xác thực thất bại' },
      { status: 401 }
    );
  }
} 