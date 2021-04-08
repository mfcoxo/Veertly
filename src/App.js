import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ParticipantList from './ParticipantList';
import ParticipantDetails from './ParticipantDetails';

function App() {
  return (
    <div className="App">
      <h1> VEERTLY CHALLENGE</h1>
      <Switch>
        <Route path="/" exact component={ParticipantList} />
        <Route path="/participant/:participant" exact component={ParticipantDetails} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
