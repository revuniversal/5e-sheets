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

const Saves = ({ character }) => (
  <Container>
    {character.stats.savingThrows.map(save => (
      <Row>
        <IndicatorCell columns={1}>
          {save.proficient ? <span>●</span> : <span>○</span>}
        </IndicatorCell>
        <ModifierCell columns={2}>
          {displayModifier(save.modifier)}
        </ModifierCell>
        <FlexCell columns={9}>
          {save.ability}
        </FlexCell>
      </Row>
    ))}
    <BoxFooter>Saving Throws</BoxFooter>
  </Container>
);

export default Saves;
