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
  font-size: 2.2em;
  width: 30%;
`;

const InfoBlock = styled.div`
  width: 70%;
  border: 1px solid black;
  border-radius: 0.5em;
`;

const ValueRow = styled.div`
  text-align: left;
  padding: 0.5em 12px 0.1em;
  height: 1.4em;
  line-height: 1.8em;
  font-size: 1.4em;
`;
const LabelRow = styled.div`
  text-align: left;
  padding: 0em 12px 0.5em;
  margin-bottom: 0.2em;
  height: 0.8em;
  line-height: 0.5em;
  font-size: 0.8em;
  border-top: 1px solid black;
`;

const PersonalInfo = ({ character }) => (
  <Container>
    <CharacterName>{character.characterName}</CharacterName>
    <InfoBlock>
      <ValueRow>
        <Cell columns={6}>
          Level {character.stats.level} {character.stats.class}
        </Cell>
        <Cell columns={6}>{character.playerName}</Cell>
      </ValueRow>
      <LabelRow>
        <Cell columns={6}>Level and Class</Cell>
        <Cell columns={6}>Player Name</Cell>
      </LabelRow>
      <ValueRow>
        <Cell columns={3}>{character.background.name}</Cell>
        <Cell columns={3}>{character.race}</Cell>
        <Cell columns={3}>{character.stats.experience}</Cell>
        <Cell columns={3}>{character.stats.nextLevel}</Cell>
      </ValueRow>
      <LabelRow>
        <Cell columns={3}>Background</Cell>
        <Cell columns={3}>Race</Cell>
        <Cell columns={3}>Experience</Cell>
        <Cell columns={3}>Next Level</Cell>
      </LabelRow>
    </InfoBlock>
  </Container>
);

export default PersonalInfo;
