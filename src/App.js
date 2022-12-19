import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './users/pages/Users';


const App = () => {
  return <Router>
    <MainNavigation />
    <main>
      <Switch>
        <Route path={"/users"} exact>

          <Users />
        </Route>
        <Route path={"/:userId/places"}>
          <UserPlaces/>
        </Route>
        <Route path={"/places/new"} exact>
          <NewPlace />
        </Route>
        <Redirect to={"/"} />
      </Switch>
    </main>
  </Router>
}

export default App;