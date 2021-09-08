import * as t from '../types';

const initialState = {
  loading: false,
  members: [],
  error: ''
}

const teamMembersReducer = (state = initialState ,  action) => {
    switch(action.type) {
     case t.NEW_HERO:
        return {
          members: [...state.members, action.payload],
          loading: true
        }
        case t.HANDLE_ERROR:
        return {
          loading: true,
          error: action.payload
        }
        case t.DELETE_HERO:
        return {
          loading: true,
          members: action.payload
        }
      default:
      return state;
    }
}

export default teamMembersReducer;