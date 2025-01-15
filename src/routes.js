import { useRoutes } from 'react-router-dom';

import Home from '@pages/Home';

export const AppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <Home />
    }
  ]);
  return elements;
};
