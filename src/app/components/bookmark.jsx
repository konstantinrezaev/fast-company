import React, { useState } from 'react';

const BookMark = ({ status, ...rest }) => {
    if (status === false) return <i class="bi bi-bookmark"></i>;
    else return <i class="bi bi-bookmark-star-fill"></i>;
};

export default BookMark;
