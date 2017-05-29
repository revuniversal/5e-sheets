import React from 'react';
import BasicSheet from './character/sheet/BasicSheet';

const App = ({ character }) => (
  <div className="container">
    <div className="App">
      <BasicSheet character={character} />
    </div>
  </div>
);

export default App;
