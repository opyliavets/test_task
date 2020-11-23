import React, {useContext, useState} from 'react'

const dobContext = React.createContext()

export const useDob = () => {
    return useContext(dobContext)
}

export const DobProvider = ({children}) => {
    const [checked, setChecked] = useState(false)

    const toggle = () => setChecked(prev => !prev)    

    return (
        <dobContext.Provider value={{
            show: checked,
            toggle,
        }}>
            {children}
        </dobContext.Provider>
    )
}
