import React, { useState } from "react";

export const AuthContext = React.createContext();

export default function AuthContextProvider ({children}) {

    const [isAuth, setIsAuth] = useState(true)

    const toggleAuth = () => {
        setIsAuth(!isAuth)
    }

    return (
    <AuthContext.Provider value={{isAuth, toggleAuth}}>
        {children}
    </AuthContext.Provider>
    );
}
