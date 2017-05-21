import React, {Component} from 'react'
import CharacterSheet from './character/sheet/CharacterSheet'
import './App.css'

class App extends Component {
  render() {
    const character = this.props.character
    return (
      <div className="container">
        <div className="App">
          <CharacterSheet character={character} />
        </div>
      </div>
    )
  }
}

export default App