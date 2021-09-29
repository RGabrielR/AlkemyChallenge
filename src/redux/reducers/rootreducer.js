import { combineReducers } from "redux";
import teamMembersReducer from './teamMembersReducer';
import goodHeroesReducer from './goodHeroesReducer';
import badHeroesReducer from './badHeroesReducer';
import loggedInReducer from './loggedInReducer';
const rootReducer = combineReducers({
  teamMembers:   teamMembersReducer,
  goodHeroesCounter: goodHeroesReducer, 
  badHeroesCounter: badHeroesReducer, 
  logState: loggedInReducer
  
});

export default rootReducer;