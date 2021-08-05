// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { lazy, Suspense} from 'react';
import * as ROUTES from './constants/routes';


const Login = lazy( () => import ('./pages/login'))
const SignUp = lazy( () => import ('./pages/sign-up'))


function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login}/>
        <Route path={ROUTES.SIGNUP} component={SignUp}/>
      </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
