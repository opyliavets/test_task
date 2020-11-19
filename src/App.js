import React, { useState } from 'react'
import Alphabet from './Components/Elements/Alphabet/Alphabetlist'

const dobContext = React.createContext()

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <dobContext.Provider value={checked}>
      <div className="App">
        <Alphabet/>
      </div>
    </dobContext.Provider>
  );
}

export default App;

// Додати функціональний компонент - блок справа Date of birth + його структуру, ... 
// передати в нього useContext(dobContext) та реалізувати відображення дати ...
// народження кожного user'a при зміні state - checked.!!!