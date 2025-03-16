import { Restart } from './Restart'

const Winner = ({ winner, restartGame }) => {
  return (
    <section className='winner'>
      <div className='text'>
        <h2>
          {`${winner} won!`}
        </h2>
        <footer>
          <Restart restartGame={restartGame} />
        </footer>
      </div>
    </section>
  )
}

export { Winner }
