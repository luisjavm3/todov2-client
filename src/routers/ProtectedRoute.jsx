import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, component: Component }) => {
  return (
    <Route
      render={() =>
        isAuthenticated ? <Component /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
