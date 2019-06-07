
import { Action, createReducer, on } from '@ngrx/store';

export interface State {

}

export const initialState: State = {

};

const adminReducer = createReducer(initialState)

export function reducer(state = initialState, action: Action): State {
  return adminReducer(state, action);
}
