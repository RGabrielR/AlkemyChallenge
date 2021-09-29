import * as t from '../types';

export const loggedIn = () => {
    return{
        type: t.LOGGED_IN
    }}

export const loggedOut = () => {
    return{
        type: t.LOGGED_OUT
    }}