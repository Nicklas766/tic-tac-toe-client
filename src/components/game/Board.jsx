import React from 'react';
import PropTypes from 'prop-types';

const Board = ({ renderSquare }) => (
  <div>
    <div className="board-row">
      {[0, 1, 2].map((index) => renderSquare(index))}
    </div>

    <div className="board-row">
      {[3, 4, 5].map((index) => renderSquare(index))}
    </div>

    <div className="board-row">
      {[6, 7, 8].map((index) => renderSquare(index))}
    </div>
  </div>
);

Board.propTypes = {
  renderSquare: PropTypes.func.isRequired,
};

export default Board;
