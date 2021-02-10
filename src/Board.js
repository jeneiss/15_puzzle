import React, { useEffect, useState } from 'react'
import './Board.css';

function Board({ initialConfig, onSolve }) {
  const [tileConfig, setTileConfig] = useState(initialConfig)

  const handleClick = (e) => {
    const num = e.target.innerText === '' ? 0 : parseInt(e.target.innerText)
    const grid = []

    for (let i = 0; i < tileConfig.length; i = i + 4) {
      grid.push(tileConfig.slice(i, i + 4))
    }

    const row = grid.findIndex(el => el.includes(num))
    const col = grid[row].findIndex(el => el === num)

    if (row - 1 >= 0 && grid[row - 1][col] === 0) {
        grid[row - 1][col] = grid[row][col]
        grid[row][col] = 0
    } else if (row + 1 <= 3 && grid[row + 1][col] === 0) {
        grid[row + 1][col] = grid[row][col]
        grid[row][col] = 0
    } else if (col + 1 <= 3 && grid[row][col + 1] === 0) {
        grid[row][col + 1] = grid[row][col]
        grid[row][col] = 0
    } else if (col - 1 >= 0 && grid[row][col - 1] === 0) {
        grid[row][col - 1] = grid[row][col]
        grid[row][col] = 0
    }

    setTileConfig(grid.flat())
  }

  useEffect(() => {
    let solution = tileConfig.slice().sort((a, b) => a - b)
    solution.push(solution.shift())

    for (let i = 0; i < tileConfig.length; i++) {
      if (solution[i] !== tileConfig[i]) return
    }

    onSolve()

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
