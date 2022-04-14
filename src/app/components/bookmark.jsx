import React, { useState } from 'react';

const BookMark = ({ status, ...rest }) => {
    // console.log('status', status);
    // console.log('rest', rest);
    // const [clicked, setClicked] = useState(false);
    // console.log('clicked', clicked);
    if (status === false) return <i class="bi bi-bookmark"></i>;
    else return <i class="bi bi-bookmark-star-fill"></i>;
};

// 5 строк <i class="bi bi-bookmark-star-fill"></i>
{
    /* <i
    className={`bi bi-bookmark ${
        status === true ? '' : '-star-fill'
    }`}
></i> */
}

export default BookMark;
