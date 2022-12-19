import React from "react";
import UsersList from "../compomemts/UsersList";
const Users = () => {
    const USERS = [
        {
        id: 'u1', 
        name: 'David Tzur', 
        image: 'https://images.unsplash.com/photo-1670979313223-59d7225b3c1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 
        places: 3
        }
    ];
    return (
        <UsersList items={USERS}/>

    )
}

export default Users;