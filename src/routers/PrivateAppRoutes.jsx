import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Header from '../components/Header';
import Todos from '../views/Todos';
import UserDetails from '../views/UserDetails';
import UsersList from '../views/UsersList';

const PrivateAppRoutes = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="frame frame--padding">
        <Switch>
          <Route exact path="/app" component={Todos} />
          <Route exact path="/app/userdetails" component={UserDetails} />
          <Route exact path="/app/userslist" component={UsersList} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default PrivateAppRoutes;
