import React, {useContext, useState} from 'react'

const UserContext = React.createContext()

export const useUser = () => {
    return useContext(UserContext)
}

export const UserProvider = ({children}) => {
    const [id, setId] = useState(null)   

    return (
        <UserContext.Provider value={{
            id: id,
            set: ()
        }}>
            {children}
        </UserContext.Provider>
    )
}
