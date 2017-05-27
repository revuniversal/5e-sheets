import React from 'react';
import styled from 'styled-components';
import HorizontalStatBlock from './stats/HorizontalStatBlock';
import PersonalInfo from './personal/PersonalInfo';
import Cell from './common/Cell';

const Container = styled.div`
  padding: 1vh 1vw;
`;

const CharacterSheet = ({ character }) => (
  <Container>
    <PersonalInfo character={character} />
    <div>
      <Cell columns={2}>
        <HorizontalStatBlock stats={character.stats} />
      </Cell>
    </div>
  </Container>
);

export default CharacterSheet;
