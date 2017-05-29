import React from 'react';
import styled from 'styled-components';
import { Values, Labels } from '../common';

const Container = styled.div`
  text-align: left;
  font-size: 1.6em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  align-content: center;
`;

const CharacterName = ({ character }) => (
  <Container>
    <div>
      <Values>
        {character.characterName}
      </Values>
      <Labels>
        Character Name
      </Labels>
    </div>
  </Container>
);

export default CharacterName;
