import React from 'react';
import styled from 'styled-components';
import Cell from '../common/Cell';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-size: 1em;
`;

const CharacterName = styled.div`
  text-align: left;
  font-size: 1.6em;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: stretch;
  align-content: center;
`;

const InfoBlock = styled.div`
  width: 70%;
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: 0.5em;
  font-size: 1.2em;
`;

const Values = styled.div`
  text-align: left;
  padding: 0.5em 12px 0.1em;
  height: 1.4em;
  line-height: 1.8em;
  font-size: 1.4em;
`;
const Labels = styled.div`
  text-align: left;
  padding: 2px 12px 0.5em;
  margin: 0 0 1px;
  height: 0.8em;
  line-height: 0.8em;
  font-size: 8px;
  border-top: 1px solid ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.primary};
`;

const PersonalInfo = ({ character }) => (
  <Container>
    <CharacterName>
      <div>
        <Values>
          {character.characterName}
        </Values>
        <Labels>
          Character Name
        </Labels>
      </div>
    </CharacterName>
    <InfoBlock>
      <Values>
        <Cell columns={6}>
          Level {character.stats.level} {character.stats.class}
        </Cell>
        <Cell columns={6}>{character.playerName}</Cell>
      </Values>
      <Labels>
        <Cell columns={6}>Level and Class</Cell>
        <Cell columns={6}>Player Name</Cell>
      </Labels>
      <Values>
        <Cell columns={3}>{character.background.name}</Cell>
        <Cell columns={3}>{character.race}</Cell>
        <Cell columns={3}>{character.stats.experience}</Cell>
        <Cell columns={3}>{character.stats.nextLevel}</Cell>
      </Values>
      <Labels>
        <Cell columns={3}>Background</Cell>
        <Cell columns={3}>Race</Cell>
        <Cell columns={3}>Experience</Cell>
        <Cell columns={3}>Next Level</Cell>
      </Labels>
    </InfoBlock>
  </Container>
);

export default PersonalInfo;
