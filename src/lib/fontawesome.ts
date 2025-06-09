// Cấu hình FontAwesome
import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faUser, faLock, faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// Ngăn FontAwesome tự động thêm CSS vào <head> vì Next.js đã xử lý điều này
config.autoAddCss = false;

// Thêm các icon vào thư viện để sử dụng toàn cục
library.add(faUser, faLock, faEnvelope, faEye, faEyeSlash);

export { faUser, faLock, faEnvelope, faEye, faEyeSlash }; 