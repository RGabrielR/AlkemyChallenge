import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Heroes from "./Pages/Heroes";
import Login from "./Pages/Login";
import Main from "./Pages/Main";

const App = () =>  {
   const token = localStorage.hasOwnProperty('token');
  return (
    <Router>
    {token ? (<Switch>
        <Route exact path="/">
         <Main />  
        </Route>
        <Route path="/heroes">
          <Heroes />  
        </Route>
        <Route path="/login">
           <Login />
        </Route>
      </Switch>) : (
        <>
        <Route  path="/">
         <Redirect to="/login" />  
        </Route>
         <Route path="/login">
          <Login />
        </Route>
        </>
      ) }
    </Router>
  );
}

export default App;
