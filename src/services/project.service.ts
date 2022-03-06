import http from '../http-common';

class ProjectService {
  getAll(page: any, size: any) {
    return http.get('/project', {
      params: {
        page: page,
        size: size,
      },
    });
  }
}

export default new ProjectService();
