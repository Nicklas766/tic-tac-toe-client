import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ onClick, value = '' }) => (
  <button aria-label="make game move" type="submit" onClick={onClick} className="square">
    {value}
  </button>
);

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Square.defaultProps = {
  value: '',
};

export default Square;
