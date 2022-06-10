import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import Qualities from "../../ui/qualities";
import { Link } from "react-router-dom";

const UserPage = ({ id }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        api.users.getById(id).then((data) => setUser(data));
    }, []);
    if (user) {
        return (
            <div>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <Qualities qualities={user.qualities} />
                <p>Встретился {user.completedMeetings} раз</p>
                <h2>Оценка: {user.rate}/5</h2>
                <Link to={`/users/${user._id}/edit`} role="button">
                    Изменить
                </Link>
            </div>
        );
    } else {
        return <h1>Loading</h1>;
    }
};

UserPage.propTypes = {
    id: PropTypes.string.isRequired
};

export default UserPage;
