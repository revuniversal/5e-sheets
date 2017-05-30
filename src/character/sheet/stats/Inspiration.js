import React from 'react';
import styled from 'styled-components';
import { Box, FlexCell, FlexRow, TinyTitle } from '../common';

const Container = styled(Box)`
  height: 20px;
  line-height: 20px;
`;
const Large = styled.div`
  text-align: center;
  font-size: 16px;
`;

const Inspiration = ({ inspiration }) => (
  <Container>
    <FlexRow>
      <FlexCell columns={3}>
        <Large>{inspiration}</Large>
      </FlexCell>
      <FlexCell columns={9}>
        <TinyTitle>Inspiration</TinyTitle>
      </FlexCell>
    </FlexRow>
  </Container>
);

export default Inspiration;
