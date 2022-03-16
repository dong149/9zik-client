import axios from 'axios';
import TokenService from './token.service';

const client = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});
client.interceptors.request.use(
  (config: any) => {
    const token = TokenService.getLocalAccessToken();
    if (token !== '') {
      config.headers['X-AUTH-TOKEN'] = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
client.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== '/auth/signin' && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig.retry) {
        originalConfig.retry = true;
        try {
          const rs = await client.post('/auth/refreshtoken', {
            refreshToken: TokenService.getLocalRefreshToken(),
          });
          const { accessToken } = rs.data;
          TokenService.updateLocalAccessToken(accessToken);
          return client(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  },
);
export default client;
