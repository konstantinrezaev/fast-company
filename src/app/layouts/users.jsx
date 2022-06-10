import React from "react";
import { useParams } from "react-router-dom";
import EditUserPage from "../components/page/editUserPage";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";

const Users = () => {
    const params = useParams();
    const { userId, edit } = params;

    const displayingUsers = () => {
        if (userId) {
            if (edit) {
                return <EditUserPage />;
            }
            return <UserPage id={userId} />;
        }
        return <UsersListPage />;
    };
    return <div>{displayingUsers()}</div>;
};

export default Users;
