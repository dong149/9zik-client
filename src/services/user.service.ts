import client from './api';

class UserService {
  login() {
    return client.get('/user');
  }
  getUser() {
    return client.get('/user/info');
  }
}

export default new UserService();
