import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Heroes from "./Pages/Heroes";
import Login from "./Pages/Login";
import Main from "./Pages/Main";

const App = () =>  {
  const token = localStorage.hasOwnProperty('token')
  console.log(token );
  return (
    
    <Router>
      <Switch>
        <Route exact path="/">
         {token ? <Main /> : <Redirect to="/login" /> } 
        </Route>
        <Route path="/heroes">
         {token ? <Heroes /> : <Redirect to="/login" /> } 
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
  
}

export default App;
