import axios from "axios";

const key = 'live_9nf7MTAgVOl0iyYGaqkbYpt8VaLPrFN5BljxBnqCMBGpWtMBFsV3kKy9a7zR86Kf'
const api = axios.create({
    baseURL: 'https://api.thedogapi.com/'
});

export default api;