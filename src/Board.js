import React, { useState } from 'react'
import './Board.css';

function Board({ initialConfiguration, onSolveCallback }) {
  const [tileConfig, setTileConfig] = useState(initialConfiguration)

  return (
    <div className='board'>
      {tileConfig.map((tile, index) => {
        return (
          <div
            className={tile === 0 ? 'empty' : 'tile'}
            key={index}
          >
            {tile === 0 ? null : tile}
          </div>
        )
      })}
    </div>
  )
}

export default Board
