import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listCategories(orderBy = 'asc') {
    return this.httpClient.get(`/categories?orderBy=${orderBy}`);
  }
}

export default new CategoriesService();
