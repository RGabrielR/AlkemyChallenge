import * as t from '../types';
import axios from 'axios';

export const addHero = id => {
    return (dispatch) => {
        axios({
      method: "get",
      url: `/api/${process.env.REACT_APP_TOKEN}/${id}`,
      headers: {},
    })
      .then((response) => {
          if(!response) return "cargando..."
        dispatch(newHero(response))
      })
      // .catch((error) => {
      //   dispatch(error(error))
      // });
    }
}

export const deleteHero = (id, members) =>{
  return (dispatch) => {
    const newTeam = members.filter(members => members.data.id !== id)
    dispatch(deleteMember(newTeam))
  }
}
export const deleteMember = newTeam => {
  return{
    type: t.DELETE_HERO,
    payload: newTeam
  }
}
export const newHero = hero =>{
    return{
        type: t.NEW_HERO,
        payload: hero
    }
}

export const error = error =>{
  return{
    type:t.ERROR,
    payload: error
  }
}