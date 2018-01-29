import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AdminSignUp from "./SignUp/AdminSignup"
import ClientSignUp from "./SignUp/ClientSignup"
import ServiceProviderSignup from "./SignUp/ServiceProviderSignup"
import Login from "./LogIn/LogIn";
import AdminDashBoard from "./Dashboard/AdminDashboard";
import ReportAdminDashboard from "./Dashboard/ReportAdminDashboard";


const Routes = () => (
  <main>
    <Switch>

      <Route path='/signup/admin' component={AdminSignUp}/>
      <Route path='/signup/client' component={ClientSignUp}/>
      <Route path='/signup/serviceProvider' component={ServiceProviderSignup}/>
      <Route path='/login' component={Login}/>
      <Route path='/dashboard/admin' component={AdminDashBoard}/>
      <Route path='/dashboard/reportAdmin' component={ReportAdminDashboard}/>


    </Switch>
  </main>
)

export default Routes;
