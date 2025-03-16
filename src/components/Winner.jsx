
const Winner = ({winner, restartGame}) => {
return (
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

export {Winner}