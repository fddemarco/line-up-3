import { PLAYERS } from "./constants"

function saveState(newBoard, newPlayer){
    window.localStorage.setItem("board", JSON.stringify(newBoard))
    window.localStorage.setItem("player", JSON.stringify(newPlayer))
}

function getBoard(){
    const boardFromStorage = window.localStorage.getItem("board")
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
}

function getPlayer(){
    const playerFromStorage = window.localStorage.getItem("player")
    if (playerFromStorage) return JSON.parse(playerFromStorage)
    return PLAYERS.X
}


export {saveState, getBoard, getPlayer}