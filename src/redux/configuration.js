import {createStore } from 'redux'
import {reducer, initalState, Reducer, initialState} from './reducer';

export const ConfigureStore =() => {
    const store =createStore(
        Reducer,
        initialState
    );
    return store;

}