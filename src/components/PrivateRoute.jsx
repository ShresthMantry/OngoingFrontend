import { Navigate, useLocation } from 'react-router-dom';

function PrivateRoute({ children, path }) {
  const location = useLocation();

  return (
    isAuthenticated() ? (
      <Route path={path} element={children} />
    ) : (
      <Navigate to="/login" state={{ from: location }} replace />
    )
  );
}

export default PrivateRoute;