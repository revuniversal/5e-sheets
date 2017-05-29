import React from 'react';
import styled from 'styled-components';
import getModifier from '../get-modifier';
import { Box } from '../common';

const Container = styled(Box)`
  background: ${p => p.theme.bg};
  width: 100%;
  text-align: center;
  z-index: 1;
  margin-bottom: 17.5px;
`;
const NameContainer = styled.div`
  border-bottom: 1px solid ${p => p.theme.colors.primary};
  text-transform: uppercase;
  font-size: 6px;
  padding: 4px;
`;
const ModifierContainer = styled.div`
  padding: 8px;
  font-size: 20px;
`;
const ScoreContainer = styled.div`
  border: 1px solid ${p => p.theme.colors.primary};
  background: ${p => p.theme.bg};
  border-radius: 50%;
  margin: 0 auto;
  width: 25px;
  height: 25px;
  line-height: 25px;
  margin-bottom: -12.5px;
  font-size: 10px;
  text-align: center;
`;

const AbilityScore = ({ ability }) => (
  <Container>
    <NameContainer>{ability.name}</NameContainer>
    <ModifierContainer>{getModifier(ability.score)}</ModifierContainer>
    <ScoreContainer>
      <div>{ability.score}</div>
    </ScoreContainer>
  </Container>
);

export default AbilityScore;
