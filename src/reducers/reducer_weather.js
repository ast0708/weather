import React from 'react';
import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
  switch(action.type){
  case FETCH_WEATHER:
        console.log('payload:', action.payload.data);
        return [action.payload.data, ...state];
  }
  return state;
}
