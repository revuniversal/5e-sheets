import React from 'react';
import styled from 'styled-components';
import { Box, BoxFooter, displayModifier, FlexCell, FlexRow } from '../common';

const Container = styled(Box)`
  font-size: 9px;
  padding: 4px;
`;

const Row = styled(FlexRow)`
  margin-top: 2px;
  height: 16px;
`;

const ModifierCell = styled(FlexCell)`
  text-align: center;
`;

const IndicatorCell = styled(FlexCell)`
  text-align: left;
  font-size: 16px;
  line-height: 11px;
`;

const SkillBlock = ({ character }) => (
  <Container>
    {character.stats.skills.map(skill => (
      <Row>
        <IndicatorCell columns={1}>
          {skill.proficient ? <span>●</span> : <span>○</span>}
        </IndicatorCell>
        <ModifierCell columns={2}>
          {displayModifier(skill.modifier)}
        </ModifierCell>
        <FlexCell columns={9}>
          {skill.name}
        </FlexCell>
      </Row>
    ))}
    <BoxFooter>Skills</BoxFooter>
  </Container>
);

export default SkillBlock;
