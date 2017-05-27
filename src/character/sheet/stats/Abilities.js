import React from 'react';
import styled from 'styled-components';
import AbilityScore from './AbilityScore';
import Skills from './Skills';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;
const AbilityGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0.5em;
`;

const Abilities = ({ abilities }) => (
  <Container>
    {abilities.map(ability => (
      <AbilityGroup key={ability.name}>
        <AbilityScore ability={ability} />
        <Skills {...ability} />
      </AbilityGroup>
    ))}
  </Container>
);

export default Abilities;
