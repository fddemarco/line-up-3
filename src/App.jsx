import confetti from "canvas-confetti"
import { useState } from "react"
import { checkWinner } from "./logic/board"
import { Board } from "./components/Board"
import { Winner } from "./components/Winner"
import { Turn } from "./components/Turn"
import { Restart } from "./components/Restart"
import { PLAYERS } from "./logic/constants"
import {saveState, getBoard, getPlayer, resetState} from "./logic/storage"


function App() {
  const [board, setBoard] = useState(getBoard)
  const [player, setPlayer] = useState(getPlayer)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = structuredClone(board)
    newBoard[index] = player
    setBoard(newBoard)

    let newPlayer = player === PLAYERS.X ? PLAYERS.O : PLAYERS.X
    setPlayer(newPlayer)

    saveState(newBoard, newPlayer)
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
    resetState()
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <Board board={board} callback={updateBoard}></Board>
      <section>
        <Turn player={player}></Turn>
        <Restart restartGame={restartGame}></Restart>
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
