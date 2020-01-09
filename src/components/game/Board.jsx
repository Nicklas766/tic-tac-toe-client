import React from 'react';
import PropTypes from 'prop-types';

const Board = ({ renderSquare }) => (
  <div>
    <div className="board-row">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
    </div>

    <div className="board-row">
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
    </div>

    <div className="board-row">
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
  </div>
);

Board.propTypes = {
  renderSquare: PropTypes.func.isRequired,
};

export default Board;
