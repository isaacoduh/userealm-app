import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Toast from '@components/toast/Toast';

const App = () => {
  const { notifications } = useSelector((state) => state);
  useEffect(() => {}, []);

  return (
    <>
      {notifications && notifications.length > 0 && (
        <Toast position="top-right" toastList={notifications} autoDelete={true} />
      )}
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
};

export default App;
