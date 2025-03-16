import { Square } from './Square'
import { PLAYERS } from '../logic/constants'

const Turn = ({ player }) => {
  return (
    <section className='turn'>
      <Square isSelected={player === PLAYERS.X}>{PLAYERS.X}</Square>
      <Square isSelected={player === PLAYERS.O}>{PLAYERS.O}</Square>
    </section>
  )
}

export { Turn }
