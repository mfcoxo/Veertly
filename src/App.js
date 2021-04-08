import './App.css';
import {
  BrowserRouter as
  Switch,
  Route,
  Redirect,
  NavLink
} from "react-router-dom";
import ParticipantList from './ParticipantList';
import ParticipantDetails from './ParticipantDetails';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Switch>
      <NavLink to="/">
        <Nav/>
      </NavLink>
        <Route path="/" exact component={ParticipantList} />
        <Route path="/participant/:participant" exact component={ParticipantDetails} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
