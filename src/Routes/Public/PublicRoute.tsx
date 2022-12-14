import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: any;
  isLoggedIn: boolean;
  redirect: string;
}

const HomePage: React.FC<Props> = ({
  children,
  isLoggedIn = true,
  redirect,
}) => {
  // const isLoggedIn = useSelector(getIsLoggedIn);
  // const isLoggedIn = true;
  // const shouldRedirect = isLoggedIn && restricted;
  return isLoggedIn ? children : <Navigate to={redirect} />;
};

export default HomePage;
