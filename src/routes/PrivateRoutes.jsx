import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUser } from '../utils/utils';

const PrivateRoutes = () => {
  const { response: AuthData } = useSelector(state => state.user.signIn);
  const localStorageData = getUser();

  const isAuthenticated = AuthData?.success ||
    (localStorageData && localStorageData.message === 'Login successful') ||
    (localStorageData && localStorageData.message === 'Updated Successful');
  return (
    isAuthenticated ? <Outlet /> : <Navigate to="/login" />
  );
};

export default PrivateRoutes;

