import axios from 'axios';

/**
 * API İstemcisi
 * Tüm backend API çağrılarını yönetir
 */

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_URL,
  timeout: process.env.REACT_APP_API_TIMEOUT || 10000,
});

// Request interceptor - Token ekleme
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor - Error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token geçersiz - Giriş sayfasına yönlendir
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

/**
 * Threads API Fonksiyonları
 */
export const fetchThreads = (page = 1) =>
  api.get('/api/threads/', { params: { page } });

export const fetchThread = (threadId) =>
  api.get(`/api/threads/${threadId}/`);

export const createThread = (data) =>
  api.post('/api/threads/', data);

export const updateThread = (threadId, data) =>
  api.put(`/api/threads/${threadId}/`, data);

export const deleteThread = (threadId) =>
  api.delete(`/api/threads/${threadId}/`);

/**
 * Comments API Fonksiyonları
 */
export const fetchComments = (threadId) =>
  api.get('/api/comments/', { params: { thread: threadId } });

export const createComment = (data) =>
  api.post('/api/comments/', data);

export const updateComment = (commentId, data) =>
  api.put(`/api/comments/${commentId}/`, data);

export const deleteComment = (commentId) =>
  api.delete(`/api/comments/${commentId}/`);

/**
 * Users API Fonksiyonları
 */
export const registerUser = (data) =>
  api.post('/api/users/register/', data);

export const loginUser = (credentials) =>
  api.post('/api/users/login/', credentials);

export const fetchUserProfile = () =>
  api.get('/api/users/profile/');

export const updateUserProfile = (data) =>
  api.put('/api/users/profile/', data);

export default api;
