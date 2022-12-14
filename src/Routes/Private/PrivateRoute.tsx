import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: any;
  redirect: string;
}

const PrivateRoute: React.FC<Props> = ({ children, redirect }) => {
  // const isLoggedIn = useSelector(getIsLoggedIn);
  const isLoggedIn = true;
  return isLoggedIn ? children : <Navigate to={redirect} />;
};

export default PrivateRoute;
