import React from 'react'
import Board from './Board'

function App() {
  const initialConfig = [1, 2, 0, 4, 5, 6, 3, 8, 9, 10, 7, 12, 13, 14, 11, 15]

  const onSolveCallback = () => {
    alert('Well done, you solved it!')
  }

  return (
    <div className='app'>
      <Board
        initialConfig={initialConfig}
        onSolve={onSolveCallback}
      />
    </div>
  )
}

export default App
