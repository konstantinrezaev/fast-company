import React, { useState } from 'react';
import api from '../api';

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers((prevState) => prevState.filter((user) => user !== userId));
    };
    const renderPhrase = () => {
        const count = users.length;
        if (count === 0) {
            return 'Никто с тобой не тусанёт';
        } else if (count === 2 || count === 3 || count === 4) {
            return `${count} человека тусанут с тобой сегодня`;
        } else {
            return `${count} человек тусанёт с тобой сегодня`;
        }
    };

    return (
        <>
            <h2>
                <span
                    className={
                        users.length === 0
                            ? 'badge bg-danger'
                            : 'badge bg-primary'
                    }
                >
                    {renderPhrase()}
                </span>
            </h2>
            {users.length > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>
                                    {user.qualities.map((qualitie) => (
                                        <span
                                            key={qualitie._id}
                                            className={
                                                'badge m-1 bg-' + qualitie.color
                                            }
                                        >
                                            {qualitie.name}
                                        </span>
                                    ))}
                                </td>
                                <td>{user.profession.name}</td>
                                <td>{user.completedMeetings}</td>
                                <td>{user.rate + '/5'}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(user)}
                                    >
                                        delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default Users;
