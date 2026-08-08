import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

export default function PublicRoute() {
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return <Outlet />;
}