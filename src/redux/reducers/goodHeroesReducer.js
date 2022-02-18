import * as t from '../types';

const goodHeroesReducer = (state= 0, action) => {
    switch(action.type) {
        case t.ADD_GOOD:
        return  state +1
        case t.DELETE_GOOD:
        return state -1
        default:
          return  state;
    }
}

export default goodHeroesReducer;