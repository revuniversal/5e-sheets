import React from 'react';
import styled from 'styled-components';
import { Box, FlexCell, FlexRow } from '../common';

const Container = styled(Box)`
  height: 20px;
  line-height: 20px;
`;

const Title = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 7px;
  font-weight: bold;
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
        <Title>Inspiration</Title>
      </FlexCell>
    </FlexRow>
  </Container>
);

export default Inspiration;
