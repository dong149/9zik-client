import client from './api';

class UserService {
  login() {
    return client.get('/user/login');
  }
  logout() {
    return client.get('/user/logout');
  }
  getUser() {
    return client.get('/user/info');
  }
}

export default new UserService();
