import PropTypes from 'prop-types';

import Spinner from '../Spinner';

import { Container } from './styles';

export default function FormGroup({ error, children, isLoading }) {
  return (
    <Container>
      <div className="form-item">
        {children}
        {isLoading && (
          <div className="loader">
            <Spinner size={16} />
          </div>
        )}
      </div>
      {error && <small>{error}</small>}
    </Container>
  );
}

FormGroup.propTypes = {
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
};

FormGroup.defaultProps = {
  error: null,
  isLoading: false,
};
