import React, { useState, useEffect } from 'react'
import User from './User'
import axios from 'axios'
import { UserProvider, useUser } from '../UserContext/UserContext'

export default function Employees(props) {
    const [dataState, setDataState] = useState([]);
    
    const { setId } = useUser();


    useEffect(() => {
      async function fetchData() {
        let response = await axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users');
        let data = response.data;
        setDataState(data)
      }
      fetchData()
    }, []);
    
    return (
        <UserProvider>
            {dataState?.map((user) => {
                    return (                            
                        user.lastName.split('')[0]=== props.letter
                            ? <User
                                key={user.id}
                                lastName={user.lastName}
                                firstName={user.firstName}
                                id={user.id}
                                addChecked={setId(user.id)}
                            />
                            : null                        
                    )                
                })            
            }
        </UserProvider>
    )  
}