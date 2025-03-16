import { useState } from "react"
import { checkWinner } from "./logic"

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
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = structuredClone(board)
    newBoard[index] = player
    setBoard(newBoard)

    let selectedPlayer = player === PLAYERS.X ? PLAYERS.O : PLAYERS.X
    setPlayer(selectedPlayer)

    const newWinner = checkWinner(newBoard)
    console.log(newWinner)
    setWinner(newWinner)
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
