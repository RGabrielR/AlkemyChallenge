import { combineReducers } from "redux";
import teamMembersReducer from './teamMembersReducer';


const rootReducer = combineReducers({
  teamMembers:   teamMembersReducer
});

export default rootReducer;