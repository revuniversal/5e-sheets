import React from 'react';
import styled from 'styled-components';
import { Box, TinyTitle, FlexRow, FlexCell } from '../common';

const Container = styled.div`
  text-align: center;
  margin-left: 1vw;
`;
const Row = styled(FlexRow)`
  margin-bottom: 1vh;
`;
const MiniBox = styled(Box)`
  height: 72px;
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: ${p => (p.solo ? '1vh 1vw' : '0')};
`;

const CombatStats = ({ stats }) => (
  <Container>
    <Row justify="space-between">
      <FlexCell columns={3}>
        <MiniBox>
          {stats.armorClass}
          <TinyTitle>ARMOR CLASS</TinyTitle>
        </MiniBox>
      </FlexCell>
      <FlexCell columns={3}>
        <MiniBox>
          {stats.initiative}
          <TinyTitle>INITIATIVE</TinyTitle>
        </MiniBox>
      </FlexCell>
      <FlexCell columns={3}>
        <MiniBox>
          {stats.speed}
          <TinyTitle>SPEED</TinyTitle>
        </MiniBox>
      </FlexCell>
    </Row>
    <Row>
      <FlexCell columns={12}>
        <MiniBox>
          {stats.hp}/{stats.maxHp}
          <TinyTitle>Hit Points</TinyTitle>
        </MiniBox>
      </FlexCell>
    </Row>
  </Container>
);

export default CombatStats;
