export interface User {
  id: string;
  institutional_id: string;
  full_name: string;
  // Vai trò: Quản trị viên, Sinh viên, Giảng viên, Trưởng khoa, Phó khoa, Phụ trách khoa
  role: 'ADMIN' | 'STUDENT' | 'LECTURER' | 'DEAN' | 'VICE_DEAN' | 'DEPARTMENT_HEAD';
}