import React, { useState, createContext } from "react";

let UserContext = createContext()

export default UserContext;

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState([])
    console.log(userData)
    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}