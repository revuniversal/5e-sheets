import React from 'react';
import styled from 'styled-components';
import { FlexRow, FlexCell } from './common';
import BasicInfo from './basic/BasicInfo';
import VerticalAbilityBlock from './abilities/VerticalAbilityBlock';
import Inspiration from './stats/Inspiration';
import Profiency from './stats/Proficiency';
import CombatStats from './stats/CombatStats';
import Saves from './stats/Saves';
import SkillBlock from './skills/SkillBlock';

const Container = styled.div`
  padding: 1vh 1vw;
`;

const Row = styled(FlexRow)`
  padding-top: 1vh;
  &:first-child {
    padding-top: 0;
  }
`;

const BasicSheet = ({ character }) => (
  <Container>
    <Row>
      <FlexCell columns={12}>
        <BasicInfo character={character} />
      </FlexCell>
    </Row>
    <Row>
      <FlexCell columns={1}>
        <VerticalAbilityBlock character={character} />
      </FlexCell>
      <FlexCell columns={2}>
        <Inspiration inspiration={character.inspiration} />
        <Profiency proficiency={character.stats.proficiency} />
        <Saves character={character} />
        <SkillBlock character={character} />
      </FlexCell>
      <FlexCell columns={4}>
        <CombatStats stats={character.stats} />
      </FlexCell>
    </Row>
  </Container>
);

export default BasicSheet;
