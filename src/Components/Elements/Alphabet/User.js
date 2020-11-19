import React, { useState, useEffect, useRef } from 'react'


export default function User(props) {   
    
    const checked = useRef(null)

    useEffect(() => {
        if (checked.current.checked) {
            console.log(checked.current.id)
        }
    })

    return (
        <React.Fragment>
            <li key={props.id}>
                <div key={props.id}>
                    <label htmlFor={props.id}>
                        <p><strong>{props.lastName}</strong>&nbsp;{props.firstName}</p>
                    </label>
                    <input type='checkbox' ref={checked} id={props.id}/>
                </div>
            </li>
        </React.Fragment>
    )  
}