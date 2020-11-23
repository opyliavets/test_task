import React from 'react'
import Alphabet from './Components/Elements/Alphabet/Alphabetlist'
import DateOfBirth from './Components/Elements/DateOfBirth/DateOfBirth'
import { DobProvider } from './Components/Elements/DobContext/DobContext';


export default function App() {

  return (
    <DobProvider>
      <div style={{display:'flex', flexFlow:'row nowrap', justifyContent:'space-between'}}>
        <Alphabet onClick={()=>{}}/>
        <DateOfBirth />
      </div>
    </DobProvider>
  );
}


