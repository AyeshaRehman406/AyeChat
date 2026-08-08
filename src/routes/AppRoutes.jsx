import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import AuthPage from '../pages/AuthPage';
import DashBoardPage from '../pages/DashBoardPage';
import NotFoundPage from '../pages/NotFoundPage';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import AppLayout from '../components/layout/AppLayout';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path={ROUTES.LOGIN} element={<AuthPage />} />
        <Route path={ROUTES.SIGNUP} element={<AuthPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route
          path={ROUTES.DASHBOARD}
          element={
            <AppLayout>
              <DashBoardPage />
            </AppLayout>
          }
        />
      </Route>

      <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.LOGIN} replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}