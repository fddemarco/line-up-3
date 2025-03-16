import {expect, test} from '@jest/globals';
import {checkWinner, checkDiagonal, checkSecondDiagonal, checkRows} from "../logic/board"

test.each([
    [[null, null, null, null, null, null, null, null, null], null],
    [["X", "X", "X", null, null, null, null, null, null], "X"],
    [["O", null, null, "O", null, null, "O", null, null], "O"],
    [["X", null, null, null, "X", null, null, null, "X"], "X"],
    [["X", "O", "O", "O", "X", null, null, null, "X"], "X"],
    [["O", "O", "X", null, "X", null,"X", null, null], "X"],
    [[null, null, null, "X", "X", "X", null, null, null], "X"],
    [[null, null, null, null, null, null, "X", "X", "X"], "X"],
  ])("checkWinner should return %s", (board, expected) => {
    expect(checkWinner(board)).toBe(expected)
  })