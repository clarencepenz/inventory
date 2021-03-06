import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../../users/login';
import Register from '../../users/register';
import Forgot from '../../users/forgotPassword';
import Auth from '../../users/auth/CheckAuth';
import Dashboard from '../dashboard/Dashboard';
import DashboardOperations from '../dashboard/operations/DashoardOperations';
import DashboardCustomClearance from '../dashboard/operations/DashboardCustomClearance';
import Pages from '../dashboard/operations';
import AdminDashboard from '../dashboard/admin/AdminDashboard';


function Routes() { 
  return (
    <Router>
      <div>
            <Route exact path="/" render={props => (
              <React.Fragment>
                  { localStorage.token ? <Dashboard/> : <Login/> }
              </React.Fragment>
            )} />
        
            <Route path="/dashboard" component={Auth(Dashboard)}/>
            <Route path="/dashboard-admin" component={Auth(AdminDashboard)}/>
            <Route path="/dashboard-category" component={Auth(DashboardOperations)}/>
            <Route path="/dashboard-import-custom-clearance" component={Auth(DashboardCustomClearance)}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Register}/>
            <Route path="/forgot-password" component={Forgot}/>
            <Route path="/pages" component={Auth(Pages)}/>
      </div>
    </Router>
  );
}

export default Routes;
