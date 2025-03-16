import { useState } from "react"
import confetti from "canvas-confetti"
import { checkWinner } from "./logic"
import { Square } from "./components/Square"

const PLAYERS = {
  X: "x",
  O: "o"
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
            <section className="winner">
              <div className="text">
                <h2>
                  {`${winner} won!`}
                </h2>
                <footer>
                  <button onClick={restartGame}>Restart</button>
                </footer>
              </div>
            </section>
           
          )
        }
      </section>
    </main>
)
}

export default App
