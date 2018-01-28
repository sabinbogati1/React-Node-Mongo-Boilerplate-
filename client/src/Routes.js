import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AdminSignUp from "./SignUp/AdminSignup"


const Routes = () => (
  <main>
    <Switch>

      <Route path='/signup/admin' component={AdminSignUp}/>

    </Switch>
  </main>
)

export default Routes;
