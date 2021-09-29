import { combineReducers } from "redux";
import teamMembersReducer from './teamMembersReducer';
import goodHeroesReducer from './goodHeroesReducer';
import badHeroesReducer from './badHeroesReducer';

const rootReducer = combineReducers({
  teamMembers:   teamMembersReducer,
  goodHeroesCounter: goodHeroesReducer, 
  badHeroesCounter: badHeroesReducer, 
  
});

export default rootReducer;