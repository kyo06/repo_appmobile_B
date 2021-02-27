import React from 'react';

const defaultUser = {
    id: 0,
    name: "John Doe",
    password: "123"
}

const UserContext = React.createContext(defaultUser);
export default UserContext;

export const UserProvider = ({children}) => {
    return (
        <UserContext.Provider value={defaultUser}>
            {children}
        </UserContext.Provider>
    )
}