import React, { useState, useEffect } from 'react'


export default function User(props) {
    const [checked, setChecked] = useState(false);

    return (
        <React.Fragment>
            <li>
                <div>
                    <label for={props.id}>
                        <h3>{props.lastName}</h3>
                        <p>{props.firstName}</p>
                    </label>
                    <input type='checkbox' id={props.id}/>
                </div>
            </li>
        </React.Fragment>
    )  
}