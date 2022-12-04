import React from 'react'

export const dashboardContext = React.createContext();

function DashboardContextComponent({children}) {
    let data = {
        monthlyearing: "40,000",
        yearlyearning: "215,000",
        task: 60,
        pending: 18
    }

  return <dashboardContext.Provider value={data}>
    {children}
  </dashboardContext.Provider> 
}

export default DashboardContextComponent
