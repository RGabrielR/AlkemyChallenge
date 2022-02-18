import * as t from '../types';

export const addGood = () => {
    return{
    type: t.ADD_GOOD
}}

export const deleteGood = () => {
    return{
    type: t.DELETE_GOOD
}}

export const addBad = () => {
    return{
    type: t.ADD_BAD
}}

export const deleteBad = () => {
    return{
    type: t.DELETE_BAD
}}