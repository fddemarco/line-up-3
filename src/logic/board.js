function checkWinner(board){
    if (checkRows(board)) return checkRows(board)
    if (checkColumns(board)) return checkColumns(board)
    if (checkDiagonal(board)) return checkDiagonal(board)
    return checkSecondDiagonal(board)
  }
  
  function checkRows(board){
    for (let i = 0; i < 3; i++){
      const winner = board[i*3]
      let won = true
      for (let j = 1; j < 3; j++){
        won &&= winner == board[i*3 + j]
      }
      if (won && winner) return winner
    }
    return null
  }
  
  function checkColumns(board){
    for (let i = 0; i < 3; i++){
      const winner = board[i]
      let won = true
      for (let j = 1; j < 3; j++){
        won &&= winner == board[i + j*3]
      }
      if (won && winner) return winner
    }
    return null
  }
  
  function checkDiagonal(board){
    const winner = board[0]
    let won = true
    for (let i = 1; i < 3; i++){
      won &&= winner == board[i*3 + i]
    }
    if (won && winner) return winner
    return null
  }
  
  function checkSecondDiagonal(board){
    const winner = board[2]
    let won = true
    for (let i = 1; i < 3; i++){
      won &&= winner == board[(i+1)*3 - i - 1]
    }
    if (won && winner) return winner
    return null
  }

export {checkWinner, checkRows, checkColumns, checkDiagonal, checkSecondDiagonal}