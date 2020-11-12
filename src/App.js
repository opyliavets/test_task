import React, {useState} from 'react'
import { getAlphabet, getEmpoyees } from './Components/Functions/Functions'

function App() {

  const [emp, setEmp] = useState(null)

   return (
    <div className="App">
      <h1>{getAlphabet()}</h1>
      <h1>{emp}</h1>
      <button onClick={()=>{setEmp(getEmpoyees())}}>добавить</button>
    </div>
  );
}

export default App;
