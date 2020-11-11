import axios from 'axios'

export function getAlphabet(){
    const alphString = [];
    for(let i = 0; i < 26; i++){
      alphString[i] = String.fromCodePoint(65 + i)
    }
    return alphString;
    
  }

export function getEmpoyees(){
    let data = axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users');
    let employees = Response.data
    console.log(employees);
  }
 
  
