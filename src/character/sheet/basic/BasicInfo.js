import React from 'react';
import styled from 'styled-components';
import CharacterName from './CharacterName';
import InfoBlock from './InfoBlock';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-size: 1em;
`;

const PersonalInfo = ({ character }) => (
  <Container>
    <CharacterName character={character} />
    <InfoBlock character={character} />
  </Container>
);

export default PersonalInfo;
