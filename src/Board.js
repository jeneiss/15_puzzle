import React, { useEffect, useState } from 'react'
import './Board.css';

function Board({ initialConfiguration, onSolveCallback }) {
  const [tileConfig, setTileConfig] = useState(initialConfiguration)

  const handleClick = (e) => {
    const num = e.target.innerText === '' ? 0 : parseInt(e.target.innerText)
    const numIndex = tileConfig.findIndex(el => el === num)

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

  useEffect(() => {
    let solution = tileConfig.slice().sort((a, b) => a - b)
    solution.push(solution.shift())

    for (let i = 0; i < tileConfig.length; i++) {
      if (solution[i] !== tileConfig[i]) return
    }

    onSolveCallback()

  }, [tileConfig])


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
