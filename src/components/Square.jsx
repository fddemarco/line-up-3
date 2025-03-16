
const Square = ({ children, isSelected, callback, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`
  const extCallback = () => { callback(index) }
  return (
    <div className={className} onClick={extCallback}>
      {children}
    </div>
  )
}

export {Square}