import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLogin }) => {
  if (!isLogin) {
    return <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;
