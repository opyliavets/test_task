export function getAlphabet(){
    const alphString = [];
    for(let i = 0; i < 26; i++){
      alphString[i] = String.fromCodePoint(65 + i)
    }
    return alphString;
    
  }

export function getEmployees(employeesArray){
      {employeesArray?.map((item) => {
        return (
          <div key={item.id}>
            <div style={{ color: 'red' }}><p>{item.firstName + ' ' + item.lastName}</p></div>
          </div>
        )
      })}
  }
 
  
