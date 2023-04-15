import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  .details {
    strong {
      font-size: 22px;
      margin-bottom: 8px;
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
    }
  }
`;
