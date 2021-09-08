import * as t from '../types';
import axios from 'axios';

export const addHero = id => {
    return (dispatch) => {
    const config = {method: 'get', url: `https://evening-depths-13521.herokuapp.com/${id}`, headers: { }};
    axios(config).then( (response) => {dispatch(newHero(response))})
              .catch((error) => dispatch(handleError(error)))
}}

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

export const handleError = error =>{
  return{
    type:t.HANDLE_ERROR,
    payload: error
  }
}