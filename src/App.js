import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Heroes from "./Pages/Heroes";
// import Login from "./Pages/Login";
import Main from "./Pages/Main";
// import { connect } from "react-redux";
// import {loggedIn, loggedOut} from './redux/actions/loggedActions';
const App = props =>  {
  //  const {logState} = props;
  return (
    <Router>
    {/* {logState ? ( */}
    <Switch>
        <Route exact path="/">
         <Main />  
        </Route>
        <Route path="/heroes">
          <Heroes />  
        </Route>
        <Route path="/login">
           <Redirect to="/" />
        </Route>
      </Switch>
      {/* ) : ( */}
        {/* <>
        <Route  path="/">
         <Redirect to="/login" />  
        </Route>
         <Route path="/login">
          <Login />
        </Route>
        </>
      ) } */}
    </Router>
  );
}
// const mapStateToProps = (state) => ({
//   logState: state.logState
// });
// const mapDispatchToProps = (dispatch) => {
//   return {
//     loggedIn: () => dispatch(loggedOut()),
//     loggedout: () => dispatch(loggedOut())
//   };
// };

export default App;

// connect(mapStateToProps, mapDispatchToProps)(App);
