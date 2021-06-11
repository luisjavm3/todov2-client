import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Welcome from '../views/Welcome';
import Signup from '../views/Signup';
import Login from '../views/Login';
import Error404 from '../views/Error404';

import ProtectedRoute from './ProtectedRoute';
import PrivateAppRoutes from './PrivateAppRoutes';
import { useSelector } from 'react-redux';

const AppRouter = () => {
  const isAuthenticated = useSelector(
    (state) => state.authData.isAuthenticated
  );

  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              isAuthenticated ? <Redirect to="/app" /> : <Welcome />
            }
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <ProtectedRoute
            path="/app"
            component={PrivateAppRoutes}
            isAuthenticated={isAuthenticated}
          />
          <Route path="*" component={Error404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
