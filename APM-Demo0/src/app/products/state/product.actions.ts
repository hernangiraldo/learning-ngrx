import { Action } from "@ngrx/store";
import { ProductActionTypes } from "./product-action-types.enum";

export class ToggleActionProduct implements Action {
  readonly type = ProductActionTypes.ToggleProductCode;

  constructor(public payload: boolean) {}
}