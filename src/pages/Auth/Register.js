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

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [hasError, setHasError] = useState(false);
  const [user, setUser] = useState();
  const [setStoredUsername] = useLocalStorage('username', 'set');
  const [setLoggedIn] = useLocalStorage('keepLoggedIn', 'set');
  const [pageReload] = useSessionStorage('pageReload', 'set');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerUser = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const avatarColor = Utils.avatarColor();
      const avatarImage = Utils.generateAvatar(username.charAt(0).toUpperCase(), avatarColor);

      const result = await authService.signUp({
        username,
        email,
        password,
        avatarColor,
        avatarImage
      });
      setLoggedIn(true);
      setStoredUsername(username);
      setAlertType('alert-success');

      Utils.dispatchUser(result, pageReload, dispatch, setUser);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setHasError(true);
      setAlertType('alert-error');
      setErrorMessage(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    if (loading & !user) return;
    if (user) navigate('/home');
  }, [loading, user, navigate]);

  return (
    <div className="container mx-10 my-10">
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
          <CardTitle>Register</CardTitle>
          <CardDescription>Create a new account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={registerUser}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
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
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
            {/* <Button variant="outline" type="button">
              Cancel
            </Button> */}
            <Button type="submit" disabled={!username || !email || !password}>
              {loading ? 'Signing up...' : 'Register'}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </div>
  );
};

export default Register;
