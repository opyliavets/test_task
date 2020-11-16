import React, { useState, useEffect } from 'react'
import { getAlphabet } from './Components/Functions/Functions'
import axios from 'axios'

function App() {
  const [alphabet, setAlphabet] = useState([])
  const [letter, setLetter] = useState('C')
  const [dataState, setDataState] = useState([])
  const [users, setUsers] = useState([])
  const [value, setValue] = useState('value')
  

  useEffect(() => {
    async function fetchData() {
      let response = await axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users');
      let data = response.data;
      setDataState(data)
    }
    fetchData()
  }, []);

  useEffect(() => {
    let filteredUsers = dataState?.filter((user) => {
      return user.lastName.split(' ')[0].split('')[0] === letter;
    });
    setUsers(filteredUsers);    
  }, [])

  useEffect(() => {
    let letters = getAlphabet();
    setAlphabet(letters);
  }, [])

  const mouseClick = event => {    
    console.log(event.target);
  }

  useEffect(() => {
    window.addEventListener('click', mouseClick)
  })

  return (
    <div className="App">
      <h1>{alphabet}</h1>
      <h1>Value is: { value }</h1>
      <div>
        {users?.map((item) => {          
          return (
            <div key={item.id}>
              <div>
                  <p>{
                  item.lastName + ' ' + item.firstName
                }</p>                
              </div>
            </div>
        )
      })}        
      </div>
    </div>
  );
}

export default App;
