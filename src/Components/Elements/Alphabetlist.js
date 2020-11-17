import React, { useState, useEffect } from 'react'
import { getAlphabet } from '../Functions/Functions'
import Employees from '../Elements/Employee'

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
                    <div>
                        <h1>{item}</h1>
                        <ul>
                            <Employees
                                letter={item}
                            />
                        </ul>
                    </div>
                )          
        })}
    </div>
  );
}

