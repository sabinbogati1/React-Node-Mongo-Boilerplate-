import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AdminSignUp from "./SignUp/AdminSignup"
import ClientSignUp from "./SignUp/ClientSignup"
import ServiceProviderSignup from "./SignUp/ServiceProviderSignup"


const Routes = () => (
  <main>
    <Switch>

      <Route path='/signup/admin' component={AdminSignUp}/>
      <Route path='/signup/client' component={ClientSignUp}/>
      <Route path='/signup/serviceProvider' component={ServiceProviderSignup}/>

    </Switch>
  </main>
)

export default Routes;
