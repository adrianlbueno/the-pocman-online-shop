import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/Auth/AuthContext.jsx';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  console.log('isAuthenticated', isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
