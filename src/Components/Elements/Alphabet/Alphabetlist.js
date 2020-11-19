import React, { useState, useEffect } from 'react'
import { getAlphabet } from '../../Functions/Functions'
import Employees from './Employee'

export default function Alphabet() {
    const [alphabet, setAlphabet] = useState([])


    useEffect(() => {
        let letters = getAlphabet();
        setAlphabet(letters);        
      }, [])
   
  return (
    <div className="Alphabet">
          {alphabet?.map((item) => {              
                return (
                    <div key={item.id}>
                        <h1>{item}</h1>
                        <ul>
                            <Employees
                                letter={item}
                                key={item.id}
                            />
                        </ul>
                    </div>
                )          
        })}
    </div>
  );
}

