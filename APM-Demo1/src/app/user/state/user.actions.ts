import { Action } from "@ngrx/store";

export enum UserActionsTypes {
  MarkUserName = '[User] MarkUserName'
}

export class MarkUserName implements Action {
  readonly type = UserActionsTypes.MarkUserName;

  constructor(public payload: boolean) { }
}

export type UserActions = MarkUserName;