import React, {useEffect, useRef } from 'react'
import { useDob } from '../DobContext/DobContext'

export default function User(props) {  
    
    const {toggle} = useDob()
    
    const checked = useRef(null)    

    useEffect(() => {
        if (checked.current.checked) {
            console.log(checked.current.id)
        }
    })

    return (
        <React.Fragment>      
            <li key={props.id}>
                <div key={props.id} onClick={props.addChecked}>
                    <label htmlFor={props.id}>
                        <p><strong>{props.lastName}</strong>&nbsp;{props.firstName}</p>
                    </label>
                    <input type='checkbox' ref={checked} id={props.id} onClick={toggle}/>
                </div>
            </li>       
        </React.Fragment>   
    )  
}