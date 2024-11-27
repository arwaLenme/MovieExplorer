import axios from 'axios';

const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3/';
const TMDB_API_KEY = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2VkMzkyYmY5NzBjY2Q5NWFmOThkM2ZmN2ZmNTA5NSIsIm5iZiI6MTczMjY0NjEyNC4wNjkwNzUzLCJzdWIiOiI2NjA1ZmEwOTI4M2VkOTAxN2MxN2QyY2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Yw5jNC5zlotzmdmaihDLhgnxdpucOPCIq6ssbHwc8vg`;

const apiClient = axios.create({
  baseURL: TMDB_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: TMDB_API_KEY,
  },
});

export const apiService = () => {
  return apiClient;
};

apiClient.interceptors.request.use(
  async config => {
    return config;
  },
  error => Promise.reject(error),
);

export function extractAPIErrorResponse(axiosInstance) {
  axiosInstance.interceptors.response.use(
    response => response,
    async function (error) {
      error.originalMessage = error.message;
      Object.defineProperty(error, 'message', {
        get: function () {
          return `${error.response?.data?.message || error.originalMessage}`;
        },
      });
      return Promise.reject(error);
    },
  );
}

extractAPIErrorResponse(apiClient);
