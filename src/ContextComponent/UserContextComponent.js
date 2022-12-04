import React,{useState} from 'react'

export const userContext = React.createContext();

function UserContextComponent({children}) {

    let [users,setUsers] = useState([
        {
          name: "Ponraj",
          email: "ponrajsm@gmail.com",
          mobile: "9191919191",
          batch: "B38WET",
          timing: "11am to 2pm"
        },{
          name: "Praveen",
          email: "praveen@gmail.com",
          mobile: "9191919191",
          batch: "B38WET",
          timing: "11am to 2pm"
        },{
          name: "Selva",
          email: "selva@gmail.com",
          mobile: "9191919191",
          batch: "B38WET",
          timing: "11am to 2pm"
        },{
          name: "Vasanth",
          email: "vasanth@gmail.com",
          mobile: "9191919191",
          batch: "B38WET",
          timing: "11am to 2pm"
        }
      ])

  return <userContext.Provider value={{users,setUsers}}>
    {children}
  </userContext.Provider> 
}

export default UserContextComponent
