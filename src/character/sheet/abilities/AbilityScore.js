import React from 'react';
import styled from 'styled-components';
import getModifier from '../get-modifier';

const Container = styled.div`
  align-self: center;
  background: ${p => p.theme.colors.background};
  border: 1px solid ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.primary};
  border-radius: 4px;
  width: 70px;
  text-align: center;
  z-index: 1;
  margin-top: -10px;
`;

const NameContainer = styled.div`
  border-bottom: 1px solid ${p => p.theme.colors.primary};
  padding: 4px;
`;

const ModifierContainer = styled.div`
  padding: 8px;
  font-size: 20px;
`;

const ScoreContainer = styled.div`
  background: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.primary};
  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: 50%;
  margin: 0 auto;
  width: 25px;
  height: 25px;
  line-height: 25px;
  margin-bottom: -12.5px;
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
