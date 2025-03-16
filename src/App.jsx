import { useState } from "react"
import confetti from "canvas-confetti"
import { checkWinner } from "./logic/board"
import { Square } from "./components/Square"
import { Board } from "./components/Board"
import { Winner } from "./components/Winner"

const PLAYERS = {
  X: "❌",
  O: "🔵"
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
    if (newWinner){
      confetti()
      setWinner(newWinner)
    }
  }

  const restartGame = () => {
    setWinner(null)
    setBoard(Array(9).fill(null))
    setPlayer(PLAYERS.X)
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <Board board={board} callback={updateBoard}></Board>
      <section>
        <section className="turn">
          <Square isSelected={player === PLAYERS.X}>{PLAYERS.X}</Square>
          <Square isSelected={player === PLAYERS.O}>{PLAYERS.O}</Square>
        </section>
        <button onClick={restartGame}>Restart</button>
      </section>
      <section>
        {
          winner && (
            <Winner winner={winner} restartGame={restartGame}></Winner>
           
          )
        }
      </section>
    </main>
)
}
  

export default App
