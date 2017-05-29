import React from 'react';
import { FlexRow, FlexCell } from '../common';
import CharacterName from './CharacterName';
import InfoBlock from './InfoBlock';

const PersonalInfo = ({ character }) => (
  <FlexRow>
    <FlexCell columns={3}>
      <CharacterName character={character} />
    </FlexCell>
    <FlexCell columns={9}>
      <InfoBlock character={character} />
    </FlexCell>
  </FlexRow>
);

export default PersonalInfo;
