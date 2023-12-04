import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 500000,
});

// 요청 전에 실행되는 인터셉터
axiosInstance.interceptors.request.use(
  config => {
    // 요청을 보내기 전에 수행할 작업 추가
    return config;
  },
  error => {
    // 요청 에러 처리
    return Promise.reject(error);
  },
);
// 응답을 받기 전에 실행되는 인터셉터
axiosInstance.interceptors.response.use(
  response => {
    // 응답 데이터를 가공하여 반환
    return response.data;
  },
  error => {
    // 응답 에러 처리
    return Promise.reject(error);
  },
);
