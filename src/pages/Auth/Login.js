import { useEffect, useState } from 'react';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@components/ui/card';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useLocalStorage from '@hooks/useLocalStorage';
import useSessionStorage from '@hooks/useSessionStorage';
import { Utils } from '@services/utils/utils.service';
import { authService } from '@services/api/auth.service';
import { Alert, AlertDescription, AlertTitle } from '@components/ui/alert';
import { Terminal } from 'lucide-react';
import { Checkbox } from '@components/ui/checkbox';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [user, setUser] = useState();
  const [setStoredUsername] = useLocalStorage('username', 'set');
  const [setLoggedIn] = useLocalStorage('keepLoggedIn', 'set');
  const [pageReload] = useSessionStorage('pageReload', 'set');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUser = async (event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const result = await authService.signIn({ username, password });
      setLoggedIn(keepLoggedIn);
      setStoredUsername(username);
      setHasError(false);
      setAlertType('alert-success');
      Utils.dispatch(result, pageReload, dispatch, setUser);
    } catch (error) {
      setLoading(false);
      setHasError(true);
      setAlertType('alert-error');
      setErrorMessage(error?.response?.data.message);
    }
  };

  useEffect(() => {
    if (loading && !user) return;
    if (user) navigate('/home');
  }, [loading, user, navigate]);

  return (
    <div className="container mx-auto">
      <Card className="w-[350px]">
        {hasError && errorMessage && (
          <>
            <p>{hasError}</p>
            <p>{errorMessage}</p>
            <div className={`alerts ${alertType}`} role="alert">
              {errorMessage}
            </div>
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>You can add components and dependencies to your app using the cli.</AlertDescription>
            </Alert>
          </>
        )}
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={loginUser}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="username"
                  placeholder="Your Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  // style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Choose a password"
                  value={password}
                  // style={{ border: `${hasError ? '1px solid #fa9b8a' : ''}` }}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <Checkbox checked={keepLoggedIn} onCheckedChange={() => setKeepLoggedIn(!keepLoggedIn)} />
            <Button type="submit">{loading ? 'Logging In....' : 'Login'}</Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">{/* <Button variant="outline">Cancel</Button> */}</CardFooter>
      </Card>
    </div>
  );
};

export default Login;
