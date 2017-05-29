import React from 'react';
import styled from 'styled-components';
import { FlexRow, FlexCell, Values, Labels, Box } from '../common';

const Container = styled(Box)`
`;
const CollapsibleCell = styled(FlexCell)`
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

const InfoBlock = ({ character }) => (
  <Container>
    <FlexRow>
      <CollapsibleCell columns={6}>
        <Values>
          Level {character.stats.level} {character.stats.class}
        </Values>
      </CollapsibleCell>
      <CollapsibleCell columns={6}>
        <Values>
          {character.playerName}
        </Values>
      </CollapsibleCell>
    </FlexRow>
    <FlexRow>
      <CollapsibleCell columns={6}>
        <Labels>
          Level and Class
        </Labels>
      </CollapsibleCell>
      <CollapsibleCell columns={6}>
        <Labels>
          Player Name
        </Labels>
      </CollapsibleCell>
    </FlexRow>
    <FlexRow>
      <CollapsibleCell columns={4}>
        <Values>
          {character.background.name}
        </Values>
      </CollapsibleCell>
      <CollapsibleCell columns={4}>
        <Values>
          {character.race}
        </Values>
      </CollapsibleCell>
      <CollapsibleCell columns={2}>
        <Values>
          {character.stats.experience}
        </Values>
      </CollapsibleCell>
      <CollapsibleCell columns={2}>
        <Values>
          {character.stats.nextLevel}
        </Values>
      </CollapsibleCell>
    </FlexRow>
    <FlexRow>
      <CollapsibleCell columns={4}>
        <Labels>
          Background
        </Labels>
      </CollapsibleCell>
      <CollapsibleCell columns={4}>
        <Labels>
          Race
        </Labels>
      </CollapsibleCell>
      <CollapsibleCell columns={2}>
        <Labels>
          Experience
        </Labels>
      </CollapsibleCell>
      <CollapsibleCell columns={2}>
        <Labels>
          Next Level
        </Labels>
      </CollapsibleCell>
    </FlexRow>
  </Container>
);

export default InfoBlock;
