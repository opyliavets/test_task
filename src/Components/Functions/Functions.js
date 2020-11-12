import axios from '../../Utils/Axios-Test-task'

export function getAlphabet(){
    const alphString = [];
    for(let i = 0; i < 26; i++){
      alphString[i] = String.fromCodePoint(65 + i)
    }
    return alphString;
    
  }

export async function getEmpoyees(employeesArray){
    const response = await axios.get(employeesArray);
    const employeesResp = response.data;
    const employeesList = [];
    employeesResp.map((employee, i) => (
        employeesList[i] = {
            id: employee.id,
            lastFName: employee.lastName,
            firstName: employee.firstName,
            dob: employee.dob
        }
    ))

    console.log(employeesList); 
  }
 
  
