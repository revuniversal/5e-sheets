import React from 'react';
import CharacterSheet from './character/sheet/CharacterSheet';

const App = ({ character }) => (
  <div className="container">
    <div className="App">
      <CharacterSheet character={character} />
    </div>
  </div>
);

export default App;
