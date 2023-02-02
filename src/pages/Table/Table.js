import React, { useState } from "react";
import "./Table.css";

const Table = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    const newBoard = [...board];
    if (newBoard[index] === null) {
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");

      if (checkWinner(newBoard)) {
        console.log("Is winner");
        console.log("currentPlayer: ", currentPlayer);
        setWinner(currentPlayer === "X" ? "O" : "X");
      }
    }
  };

  const checkWinner = (board) => {
    console.log("checkWinner: ", board);
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (board[a] === board[b] && board[b] === board[c]) {
        return true;
      }
    }
    return false;
  };

  const reset = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  };

  const renderSquare = (index) => {
    return (
      <div className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </div>
    );
  };

  return (
    <div className="page-background">
      <div className="board">
        <div className="header">Tic Tac Toe</div>
        <div className="row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        {winner ? <div className="winner">Winner: {winner}</div> : null}
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Table;
