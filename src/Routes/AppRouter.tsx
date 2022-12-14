import React from 'react';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// import PrivateRoute from '../Routes/Private/PrivateRoute';
import PublicRoute from '../Routes/Public/PublicRoute';
import Layout from '../Layout/Layout';

const HomePage = lazy(() => import('../Pages/HomePage'));
const LoginPage = lazy(() => import('../Pages/LoginPage'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage'));

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PublicRoute isLoggedIn={true} redirect="/">
              <HomePage />
            </PublicRoute>
          }
        />

        <Route
          path="login"
          element={
            <PublicRoute isLoggedIn={true} redirect="/login">
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="register"
          element={
            <PublicRoute isLoggedIn={true} redirect="/register">
              <RegisterPage />
            </PublicRoute>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
