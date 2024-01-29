
import React from "react"
import List from "./Components/UniqueList/List"

const users=[
  {
    fullName: "Adib MAhmud",
    Age: 23,
    phones:[
      {home:"018344"},
      {Office: "0182312"},
    ]
  },
  {
    fullName: " MAhmud",
    Age: 13,
    phones:[
      {home:"01944"},
      {Office: "01800912"},
    ]
  }
]


function App() {
  return (
    <div className="App">
        <h1>Nested List</h1>
        {
          users.map((user,index)=>
              <article key={index}>
                <h3>{user.fullName}</h3>
                <p>{user.Age}</p>
                {
                  user.phones.map((phone,index)=>
                    <div key={index}>
                      <p>{phone.home}</p>
                      <p>{phone.Office}</p>
                    </div>
                  )
                }
              </article> 
          )
        }
      </div>
  );
}

export default App;
