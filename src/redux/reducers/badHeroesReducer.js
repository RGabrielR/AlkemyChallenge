import * as t from '../types';

const badHeroesReducer = (state= 0, action) => {
    switch(action.type) {
        case t.ADD_BAD:
        return state + 1
        case t.DELETE_BAD:
        return  state - 1
        default:
          return  state;
        
    }
}

export default badHeroesReducer;