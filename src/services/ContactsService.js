import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:3001');
  }

  listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  getContactById(id) {
    return this.httpClient.get(`/contacts/${id}`);
  }

  createContact(contact) {
    return this.httpClient.post('/contacts', {
      body: contact,
    });
  }

  updateContact(id, contact) {
    return this.httpClient.put(`/contacts/${id}`, {
      body: contact,
    });
  }

  deleteContact(id) {
    return this.httpClient.delete(`/contacts/${id}`);
  }
}

export default new ContactsService();

// serivce nao tem conhecimento de como a requisição sera feita

// tirar a responsabilidade do service de como os dados serão
// buscados, de qual client http será usado

// modularizar aplicação

// desaclopamento - pecinha por pecinha

// callstack // erro vai descer a callstack até encontrar o primeiro try catch
// codigo para quando um erro é lançado, e esse erro desce a nossa callstack até
// encontrar uma cláusula try/catch.
