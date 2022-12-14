import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../Components/smart/AppBar';
import AppFooter from '../Components/smart/AppFooter';
import AppMain from '../Components/smart/AppMain';

const Layout: React.FC = () => {
  return (
    <>
      <AppBar />
      <AppMain>
        <Suspense>
          <Outlet />
        </Suspense>
      </AppMain>
      <AppFooter />
    </>
  );
};

export default Layout;
