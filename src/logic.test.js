import {expect, jest, test} from '@jest/globals';
import {checkWinner, checkRows, checkColumns, checkDiagonal, checkSecondDiagonal} from "./logic.js"

test.each([
    [[null, null, null, null, null, null, null, null, null], null],
    [["X", "X", "X", null, null, null, null, null, null], "X"],
    [["O", null, null, "O", null, null, "O", null, null], "O"],
    [["X", null, null, null, "X", null, null, null, "X"], "X"],
    [["X", "O", "O", "O", "X", null, null, null, "X"], "X"],
  ])("checkWinner should return %s", (board, expected) => {
    expect(checkWinner(board)).toBe(expected)
  })

  test.each([
    [[null, null, null, null, null, null, null, null, null], null],
    [["X", "X", "X", null, null, null, null, null, null], null],
    [["O", null, null, "O", null, null, "O", null, null], null],
    [["X", null, null, null, "X", null, null, null, "X"], "X"],
    [["X", "O", "O", "O", "X", null, null, null, "X"], "X"],
  ])("checkWinner should return %s", (board, expected) => {
    expect(checkDiagonal(board)).toBe(expected)
  })

  test.each([
    [[null, null, null, null, null, null, null, null, null], null],
    [["X", "X", "X", null, null, null, null, null, null], null],
    [["O", null, null, "O", null, null, "O", null, null], null],
    [["X", null, null, null, "X", null, null, null, "X"], null],
    [["X", "O", "O", "O", "X", null, null, null, "X"], null],
    [["O", "O", "X", null, "X", null,"X", null, null], "X"],
  ])("checkSecondDiagonal should return %s", (board, expected) => {
    expect(checkSecondDiagonal(board)).toBe(expected)
  })