import React, { useState } from 'react'
import './Board.css';

function Board({ initialConfiguration, onSolveCallback }) {
  const [tileConfig, setTileConfig] = useState(initialConfiguration)

  const handleClick = (e) => {
    const num = e.target.innerText === '' ? 0 : parseInt(e.target.innerText)
    const numIndex = tileConfig.findIndex(el => el === num)

    //Have index, need to check if indexes around in tileConfig contain 0.
    const newTileConfig = [...tileConfig]
    if (tileConfig[numIndex + 1] === 0) {
      newTileConfig[numIndex + 1] = num
      newTileConfig[numIndex] = 0
    } else if (tileConfig[numIndex - 1] === 0) {
      newTileConfig[numIndex - 1] = num
      newTileConfig[numIndex] = 0
    } else if (tileConfig[numIndex + 4] === 0) {
      newTileConfig[numIndex + 4] = num
      newTileConfig[numIndex] = 0
    } else if (tileConfig[numIndex - 4] === 0) {
      newTileConfig[numIndex - 4] = num
      newTileConfig[numIndex] = 0
    }

    setTileConfig(newTileConfig)
  }

  return (
    <div className='board'>
      {tileConfig.map((tile) => {
        return (
          <div
            className={tile === 0 ? 'empty' : 'tile'}
            key={tile}
            onClick={tile === 0 ? null : handleClick}
          >
            {tile === 0 ? null : tile}
          </div>
        )
      })}
    </div>
  )
}

export default Board
