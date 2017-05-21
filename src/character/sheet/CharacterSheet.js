import React from 'react'
import HorizontalStatBlock from './stats/HorizontalStatBlock'

const CharacterSheet = ({character}) => (
  <div>
    <HorizontalStatBlock stats={character.stats}/>
  </div>
)

export default CharacterSheet