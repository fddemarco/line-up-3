
import { Square } from "./Square"

const Board = ({board, callback}) => {
    return <section className="game">
      {board.map((_, index) => {
        return (
          <Square key={index} callback={callback} index={index}>
            {board[index]}
          </Square>
        )
      }
      )}
    </section>
  }

export {Board}