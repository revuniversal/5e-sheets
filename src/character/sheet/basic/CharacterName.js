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

const InnerContainer = styled.div`
  padding: 14px 0;
`;

const CharacterName = ({ character }) => (
  <Container>
    <InnerContainer>
      <Values>
        {character.characterName}
      </Values>
      <Labels>
        Character Name
      </Labels>
    </InnerContainer>
  </Container>
);

export default CharacterName;
