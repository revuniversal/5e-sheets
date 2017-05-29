import React from 'react';
import styled from 'styled-components';
import HorizontalStatBlock from './stats/VerticalStatBlock';
import BasicInfo from './basic/BasicInfo';
import { FlexRow, FlexCell } from './common';

const Container = styled.div`
  padding: 1vh 1vw;
`;

const Row = styled(FlexRow)`
  padding-top: 1vh;
  &:first-child {
    padding-top: 0;
  }
`;

const CharacterSheet = ({ character }) => (
  <Container>
    <Row>
      <FlexCell columns={12}>
        <BasicInfo character={character} />
      </FlexCell>
    </Row>
    <Row>
      <FlexCell columns={3}>
        <HorizontalStatBlock stats={character.stats} />
      </FlexCell>
    </Row>
  </Container>
);

export default CharacterSheet;
