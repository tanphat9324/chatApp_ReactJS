import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route component={Login} path="/login"/>
      <Route component={ChatRoom} path="/"/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
