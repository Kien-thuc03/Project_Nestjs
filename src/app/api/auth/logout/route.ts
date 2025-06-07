import { NextResponse } from 'next/server';
import axios from 'axios';

// URL cơ sở cho API
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function POST(request: Request) {
  try {
    // Lấy token từ Authorization header nếu có
    const authHeader = request.headers.get('Authorization');
    const token = authHeader ? authHeader.split(' ')[1] : null;

    // Nếu có backend API để đăng xuất (invalidate token), có thể gọi ở đây
    if (token) {
      try {
        // API có thể không tồn tại nên xử lý try-catch riêng
        await axios.post(`${API_URL}/api/auth/logout`, {}, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      } catch (error) {
        // Nếu API không tồn tại, bỏ qua lỗi này vì phần lớn việc đăng xuất 
        // được thực hiện ở phía client
        console.log("Backend logout API không khả dụng:", error);
      }
    }

    // Trả về kết quả thành công
    return NextResponse.json({
      success: true,
      message: 'Đăng xuất thành công',
    });
  } catch (error) {
    console.error("Logout error:", error);
    // Vẫn trả về thành công vì việc xóa token sẽ được thực hiện ở client
    return NextResponse.json({
      success: true,
      message: 'Đăng xuất thành công',
    });
  }
} 