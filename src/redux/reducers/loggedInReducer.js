import * as t from '../types';

const loggedInReducer = (state= false, action) => {
    switch(action.type) {
        case t.LOGGED_IN:
        return  state = true;
        case t.LOGGED_OUT:
        return state = false;
        default:
          return  state;
    }
}

export default loggedInReducer;