import { Container } from './styles';

import useHome from './useHome';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import InputSearch from './components/InputSearch';
import Header from './components/Header';
import ErrorStatus from './components/ErrorStatus';
import EmptyList from './components/EmptyList';
import SearchNotFound from './components/SearchNotFound';
import ContactsList from './components/ContactsList';

export default function Home() {
  const {
    isLoading,
    isLoadingDelete,
    isDeleteModalVisible,
    contactBeingDeleted,
    handleCloseDeleteModal,
    handleConfirmDeleteContact,
    contacts,
    searchTerm,
    handleChangeSearchTerm,
    hasError,
    handleTryAgain,
    filteredContacts,
    orderBy,
    handleToggleOrderBy,
    handleDeleteContact,
  } = useHome();

  const hasContacts = contacts.length > 0;
  const isListEmpty = !hasError && (!isLoading && !hasContacts);
  const isSearchEmpty = !hasError && (hasContacts && filteredContacts.length < 1);

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && (
        <InputSearch
          value={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      )}

      <Header
        hasError={hasError}
        quantityOfContacts={contacts.length}
        quantityOfFilteredContacts={filteredContacts.length}
      />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}
      {isListEmpty && <EmptyList />}
      {isSearchEmpty && <SearchNotFound />}

      {hasContacts && (
        <>
          <ContactsList
            filteredContacts={filteredContacts}
            orderBy={orderBy}
            onToggleOrderBy={handleToggleOrderBy}
            onDeleteContact={handleDeleteContact}
          />

          <Modal
            visible={isDeleteModalVisible}
            isLoading={isLoadingDelete}
            title={`Tem certeza que desja remover o contato "${contactBeingDeleted?.name}"`}
            danger
            confirmLabel="Deletar"
            cancelLabel="Cancelar"
            onCancel={handleCloseDeleteModal}
            onConfirm={handleConfirmDeleteContact}
          >
            <p>Esta ação não poderá ser desfeita!</p>
          </Modal>
        </>
      )}
    </Container>
  );
}

// 2 principais benefícios dos services
// 1 tira a responsabilidade do componente de ter que buscar os dados da API
// 2 nos permite alterar facilmente o client http

// fetch('http://localhost:3001/contacts', {
//   method: 'DELETE',
//   headers: new Headers({
//     'X-App-ID': '123',
//   }),
// })
//   .then((response) => {
//     console.log('response', response);
//   })
//   .catch((error) => console.log('error', error));

// SOP -> Same Origin Policy -> Política de mesma origem
// CORS -> Cross-Origin Resource Sharing -> Compartilhando de recursos entre
// origens cruzadas (diferentes)

// Requisições feitas dentro do navegador e na linguagem JavaScript
// Origem: protocolo://domínio:porta

// Saída: http://localhost:3000
// Destino: http://localhost:3000

// CORS é um mecanismo que serve para flexibilidade a SOP
// CORS não é um mecanismo de segurança
