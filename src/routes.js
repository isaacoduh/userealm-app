import { useRoutes } from 'react-router-dom';
import { lazy } from 'react';

import Login from '@pages/Auth/Login';
import Register from '@pages/Auth/Register';
import ProtectedRoute from './pages/ProtectedRoute';

const Home = lazy(() => import('@pages/Home'));

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/app/home',
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      )
    }
  ]);
  return elements;
};
