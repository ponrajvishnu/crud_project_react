import React,{useContext} from 'react'
import BasicCard from '../CardComponent/BasicCard'
import ProgressCard from '../CardComponent/ProgressCard'
import {dashboardContext} from '../ContextComponent/DashboardContextComponent';

function Dashboard() {
    let dashboard = useContext(dashboardContext)

    return <div id="content-wrapper" className="d-flex flex-column">

  {/* <!-- Main Content --> */}
  <div id="content">

      {/* <!-- Begin Page Content --> */}
      <div className="container-fluid">

          {/* <!-- Page Heading --> */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              <a href="javascript(void)" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                      className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
          </div>

          {/* <!-- Content Row --> */}
          <div className="row">

              <BasicCard label="Earnings (Monthly)" value={dashboard.monthlyearing} border="primary" text="primary" icon="fa-calendar" dollar="true" />

              <BasicCard label="Earnings (Annual)" value={dashboard.yearlyearning} border="success" text="success" icon="fa-dollar-sign" dollar="true" />
              
              <ProgressCard label="Tasks" value={dashboard.task} border="info" text="info" icon="fa-clipboard-list" dollar="false" />

              <BasicCard label="Pending Requests" value={dashboard.pending} border="warning" text="warning" icon="fa-comments"/>
              
          </div>
        </div>
    </div>
</div>
}

export default Dashboard
