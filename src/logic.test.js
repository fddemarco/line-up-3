import {checkWinner, checkRows, checkColumns, checkDiagonal, checkSecondDiagonal} from "./logic.js"

test("Row winner", () => {
    const board = Array(9).fill(null)
    expect(checkRows(board)).toBe(null)
});

test("Column winner", () => {
    const board = Array(9).fill(null)
    expect(checkColumns(board)).toBe(null)
});

test("Diagonal winner", () => {
    const board = Array(9).fill(null)
    expect(checkDiagonal(board)).toBe(null)
});

test("Second Diagonal winner", () => {
    const board = Array(9).fill(null)
    expect(checkSecondDiagonal(board)).toBe(null)
}
);

test("winner", () => {
    const board = Array(9).fill("x")
    expect(checkWinner(board)).toBe("x")
}
);