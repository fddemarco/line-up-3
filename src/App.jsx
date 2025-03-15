import { useState } from "react"

const PLAYERS = {
  X: "x",
  O: "o"
}

const Square = ({children, isSelected, callback, index}) => {  
  const className = `square ${isSelected ? "is-selected" : ""}`
  const extCallback = () =>{callback(index)}
  return (
    <div className={className} onClick={extCallback}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState(PLAYERS.X)

  const updateBoard = (index) => {
    const newBoard = [...board]
    newBoard[index] = player
    setBoard(newBoard)

    let selectedPlayer = player === PLAYERS.X ? PLAYERS.O : PLAYERS.X
    setPlayer(selectedPlayer)
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
            return (
              <Square key={index} callback={updateBoard} index={index}>
                {board[index]}
              </Square>
            )
          }
        )
        }
      </section>
      <section className="turn">
        <Square isSelected={player === PLAYERS.X}>{PLAYERS.X}</Square>
        <Square isSelected={player === PLAYERS.O}>{PLAYERS.O}</Square>
      </section>
    </main>
)
}

export default App
