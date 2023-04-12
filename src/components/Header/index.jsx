import logo from '../../assets/images/icons/logo.svg';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" width={201} />
    </Container>
  );
}
