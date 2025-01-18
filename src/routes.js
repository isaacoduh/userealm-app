import { useRoutes } from 'react-router-dom';

import Home from '@pages/Home';
import Login from '@pages/Auth/Login';
import Register from '@pages/Auth/Register';
import SocialStream from '@pages/SStream';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/sstream',
      element: <SocialStream />
    }
  ]);
  return elements;
};
