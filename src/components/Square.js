import React from 'react';

const Square = ({value, onClick}) => {
    return (
        <button
            className="square"
            onClick={onClick}
            disabled={value.disabled}>{value.value}
        </button>
    );
};

export default Square;