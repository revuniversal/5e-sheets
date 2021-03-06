import React from 'react';
import styled from 'styled-components';

const SkillGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 140px;
  border: 1px solid #333;
  border-radius: 4px;
  font-size: 8px;
  min-height: 120px;
  padding: 5px;
  padding-left: 55px;
  margin-left: -45px;
  background: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.foreground};
`;
const SkillRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
`;
const ShapeContainer = styled.div`
  line-height: 12.5px;
  height: 12.5px;
  width: 12.5px;
  font-size: 7.5px;
  text-align: center;
  font-weight: bolder;
  margin: 0 2px;

  &:empty {
    visibility: hidden;
  }
`;

// eslint-disable-next-line
const ProficiencyIndicator = ({ name, proficient }) => (
  <ShapeContainer>
    {proficient ? <span title={`Proficient in ${name}`}>P</span> : ''}
  </ShapeContainer>
);

const AdvantageIndicator = ({ name, advantage }) => (
  <ShapeContainer>
    {advantage ? <span title={`Advantage on ${name}`}>A</span> : ''}
  </ShapeContainer>
);

const SkillModifierContainer = styled.div`
  margin: 0 5px 0 7.5px;
  border-bottom: 1px solid ${p => p.theme.colors.foreground};
`;

const SkillModifier = ({ modifier }) => (
  <SkillModifierContainer>
    {modifier >= 0 ? <span>+{modifier}</span> : <span>{modifier}</span>}
  </SkillModifierContainer>
);

const SkillName = styled.div`
  margin-left: 5px;
`;

const SavingThrow = ({ name, savingThrows }) => (
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
);

const Skill = ({ skill }) => (
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
);

const Skills = ({ name, savingThrows, skills }) => (
  <SkillGroup>
    <SavingThrow name={name} savingThrows={savingThrows} />
    {skills.map(skill => (
      <Skill skill={skill} />
    ))}
  </SkillGroup>
);

export default Skills;
