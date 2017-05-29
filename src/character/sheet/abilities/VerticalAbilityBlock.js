import React from 'react';
import styled from 'styled-components';
import AbilityScore from './AbilityScore';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1vw 0 0;
`;

const VerticalAbilityBlock = ({ character, className }) => (
  <Container className={className}>
    {character.stats.abilities.map(ability => (
      <AbilityScore ability={ability} />
    ))}
  </Container>
);

export default VerticalAbilityBlock;
