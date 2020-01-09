import React, { useState } from 'react';
import {
  xIsNext, setSquare, squareCanBeSet, getWinner, allSquaresSet,
} from 'tic-tac-toe-stateless-engine';
import Board from './Board';
import Square from './Square';
import './Game.css';

const getGameStatus = (squares) => {
  const winner = getWinner(squares);

  if (winner || allSquaresSet(squares)) {
    return winner ? `${winner} won!` : 'It\'s a draw!';
  }

  return `Next player: ${xIsNext(squares) ? 'X' : 'O'}`;
};

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currIndex, setCurrIndex] = useState(0);
  const squares = history[currIndex];

  const handleSquareClick = (index) => {
    if (squareCanBeSet(squares, index)) {
      const newSquares = setSquare(squares, index);

      setHistory([...history.slice(0, currIndex + 1), newSquares]);
      setCurrIndex(currIndex + 1);
    }
  };

  const renderSquare = (index) => (
    <Square key={index} onClick={() => handleSquareClick(index)} value={squares[index]} />
  );

  const moves = history.map((square, index) => {
    const btnText = index ? `Go to move ${index}` : 'Go to game start';

    return (
      <li key={square}>
        <button type="submit" onClick={() => setCurrIndex(index)}>{btnText}</button>
      </li>
    );
  });


  return (
    <div className="game">
      <div className="game-board">
        <Board renderSquare={renderSquare} />
      </div>

      <div className="game-info">
        <div>{getGameStatus(squares)}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
