import React from 'react';

const SearchStatus = ({ length }) => {
    const renderPhrase = () => {
        const count = length;
        if (count === 0) {
            return 'Никто с тобой не тусанёт';
        } else if (count === 2 || count === 3 || count === 4) {
            return `${count} человека тусанут с тобой сегодня`;
        } else {
            return `${count} человек тусанёт с тобой сегодня`;
        }
    };
    return (
        <h2>
            <span
                className={
                    length === 0 ? 'badge bg-danger' : 'badge bg-primary'
                }
            >
                {renderPhrase()}
            </span>
        </h2>
    );
};

export default SearchStatus;
