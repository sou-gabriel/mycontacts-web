import HttpClient from './utils/HttpClient';
import CategoryMapper from './mappers/CategoryMapper';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  async listCategories(orderBy = 'asc') {
    const categories = await this.httpClient.get(`/categories?orderBy=${orderBy}`);
    return categories.map(CategoryMapper.toDomain);
  }
}

export default new CategoriesService();
