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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CollapsibleCell = styled(Cell)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
        <CollapsibleCell columns={6}>
          Level {character.stats.level} {character.stats.class}
        </CollapsibleCell>
        <CollapsibleCell columns={6}>{character.playerName}</CollapsibleCell>
      </Values>
      <Labels>
        <CollapsibleCell columns={6}>Level and Class</CollapsibleCell>
        <CollapsibleCell columns={6}>Player Name</CollapsibleCell>
      </Labels>
      <Values>
        <CollapsibleCell columns={3}>
          {character.background.name}
        </CollapsibleCell>
        <CollapsibleCell columns={3}>{character.race}</CollapsibleCell>
        <CollapsibleCell columns={3}>
          {character.stats.experience}
        </CollapsibleCell>
        <CollapsibleCell columns={3}>
          {character.stats.nextLevel}
        </CollapsibleCell>
      </Values>
      <Labels>
        <CollapsibleCell columns={3}>Background</CollapsibleCell>
        <CollapsibleCell columns={3}>Race</CollapsibleCell>
        <CollapsibleCell columns={3}>Experience</CollapsibleCell>
        <CollapsibleCell columns={3}>Next Level</CollapsibleCell>
      </Labels>
    </InfoBlock>
  </Container>
);

export default PersonalInfo;
