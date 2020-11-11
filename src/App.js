import {getAlphabet, getEmpoyees} from './Components/Functions/Functions'

function App() {
  return (
    <div className="App">
      <h1>{getAlphabet()}</h1>
      <h1>{getEmpoyees()}</h1>
    </div>
  );
}

export default App;
