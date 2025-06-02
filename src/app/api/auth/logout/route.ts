import { NextResponse } from 'next/server';

export async function POST() {
  // Đăng xuất chỉ cần xóa token ở phía client
  // API này chủ yếu để tuân thủ RESTful và có thể bổ sung việc đánh dấu token là invalid trong tương lai
  
  return NextResponse.json({
    success: true,
    message: 'Đăng xuất thành công',
  });
} 