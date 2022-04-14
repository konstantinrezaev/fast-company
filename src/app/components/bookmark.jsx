import React, { useState } from 'react';

const BookMark = ({ status, ...rest }) => {
    return (
        <button>
            <i
                className={'bi bi-bookmark' + (status ? '-heart-fill' : '')}
                {...rest}
            ></i>
        </button>
    );
};

export default BookMark;
