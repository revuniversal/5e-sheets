import React from 'react'
import Abilities from './Abilities'

const HorizontalStatBlock = ({
  stats: {
    abilities
  }
}) => {
  return (
    <div>
      <Abilities abilities={abilities} />
    </div>
  )
}

export default HorizontalStatBlock