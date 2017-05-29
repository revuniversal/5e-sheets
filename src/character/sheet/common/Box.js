import styled from 'styled-components';

const Box = styled.div`
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: 4px;
  margin-top: 1vh;

  &:first-child {
    margin-top: 0;
  }
`;

export default Box;
