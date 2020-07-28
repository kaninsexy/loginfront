import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

// ก่อนที่จะส่ง request ต้องมาทำอันนี้ก่อน
axios.interceptors.request.use();

export default axios;
