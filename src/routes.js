import { useRoutes } from 'react-router-dom';

import Home from '@pages/Home';
import Login from '@pages/Auth/Login';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    }
  ]);
  return elements;
};
