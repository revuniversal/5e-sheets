import styled from 'styled-components';

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${p => (p.justify == null ? 'flex-start' : p.justify)};
`;

export default FlexRow;
