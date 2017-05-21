import React from 'react';
import styled from 'styled-components';

const SkillGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 14em;
  border: 1px solid #333;
  border-radius: 0.25em;
  font-size: 0.8em;
  min-height: 12em;
  padding: 0.5em;
  padding-left: 5.5em;
  margin-left: -4.5em;
  background: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.foreground};
`;
const SkillRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5em;
`;
const ShapeContainer = styled.div`
  font-size: 1.25em;
  line-height: 1.25em;
  width: 1.25em;
`;
// eslint-disable-next-line
const ProficiencyIndicator = ({ name, proficient }) => (
  <ShapeContainer>
    {proficient
      ? <span title={`Proficient in ${name}`}>●</span>
      : <span>&nbsp;</span>}
  </ShapeContainer>
);

const AdvantageIndicator = ({ name, advantage }) => (
  <ShapeContainer>
    {advantage
      ? <span title={`Advantage on ${name}`}>★</span>
      : <span>&nbsp;</span>}
  </ShapeContainer>
);

const SkillModifierContainer = styled.div`
  margin: 0 0.5em 0 0.75em;
  borderBottom: 0.1em solid ${p => p.theme.colors.foreground};
`;

const SkillModifier = ({ modifier }) => (
  <SkillModifierContainer>
    {modifier >= 0 ? <span>+{modifier}</span> : <span>{modifier}</span>}
  </SkillModifierContainer>
);

const SkillName = styled.div`
  margin-left: 0.5em;
`;
const Skills = ({ name, savingThrows, skills }) => (
  <SkillGroup>
    <SkillRow>
      <AdvantageIndicator
        name={name + ' saves'}
        advantage={savingThrows.advantage}
      />
      <ProficiencyIndicator
        name={name + ' saves'}
        proficient={savingThrows.proficient}
      />
      <SkillModifier modifier={savingThrows.modifier} />
      <SkillName>Saving Throw</SkillName>
    </SkillRow>

    {skills.map(skill => (
      <SkillRow key={skill.name}>
        <AdvantageIndicator
          name={skill.name + ' checks'}
          advantage={skill.advantage}
        />
        <ProficiencyIndicator
          name={skill.name + ' checks'}
          proficient={skill.proficient}
        />
        <SkillModifier modifier={skill.modifier} />
        <SkillName>{skill.name}</SkillName>
      </SkillRow>
    ))}
  </SkillGroup>
);

export default Skills;
