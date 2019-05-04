import { Action, createFeatureSelector, createSelector } from "@ngrx/store";
import { UserActions, UserActionsTypes } from "./user.actions";

export interface User {
  userName: string;
  password: string;
}

export interface UserState {
  maskUserName: false,
  currentUser: User
}

const initialUser: UserState = {
  maskUserName: false,
  currentUser: null
}

const getUserState = createFeatureSelector<UserState>('users');

export const getMasktUserName = createSelector(
  getUserState,
  state => state.maskUserName
)

export const getCurrentUser= createSelector(
  getUserState,
  state => state.currentUser
)

export function reducer(state = initialUser, action: UserActions) {
  switch (action.type) {

    case UserActionsTypes.MarkUserName:
      return {
        ...state,
        maskUserName: action.payload
      };

    default:
      return state;
  }
}
