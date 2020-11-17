import React, { useState, useEffect } from 'react'
import User from './User'
import axios from 'axios'

export default function Employees(props) {
    const [dataState, setDataState] = useState([]);   
  
    useEffect(() => {
      async function fetchData() {
        let response = await axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users');
        let data = response.data;
        setDataState(data)
      }
      fetchData()
    }, []);
    
    return (
        <React.Fragment>
            {dataState?.map((user) => {
                    return (                            
                        user.lastName.split('')[0]=== props.letter
                            ? <User
                                lastName={user.lastName}
                                firstName={user.firstName}
                                id={user.id}
                            />
                            : null                        
                    )
                })            
            }
        </React.Fragment>
    )  
}