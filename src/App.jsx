import { useState } from "react"

const PLAYERS = {
  X: "x",
  O: "o"
}

const Square = ({children, isSelected}) => {  
  const className = `square ${isSelected ? "is-selected" : ""}`
  return (
    <div className={className}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(""))
  const [player, setPlayer] = useState(PLAYERS.X)
  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {
          board.map((e, index) => {
            return (
              <Square key={index}>
                {e}
              </Square>
            )
          }
        )
        }
      </section>
      <section className="turn">
        <Square isSelected={player === PLAYERS.X}>{PLAYERS.X}</Square>
        <Square isSelected={player === PLAYERS.Y}>{PLAYERS.O}</Square>
      </section>
    </main>
)
}

export default App
