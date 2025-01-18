import { useRoutes } from 'react-router-dom';

import Home from '@pages/Home';
import Login from '@pages/Auth/Login';
import Register from '@pages/Auth/Register';

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
      path: '/home',
      element: <Home />
    }
  ]);
  return elements;
};
