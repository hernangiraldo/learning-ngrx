import { Action } from "@ngrx/store";
import { Product } from "../product";

export enum ProductActionsTypes {
  ToggleProductCode = '[Product] Toggle Product Code',
  SetCurrentProduct = '[Product] Set Current Product',
  ClearCurrentProduct = '[Product] Clear Current Product',
  InitializeCurrentProduct = '[Product] Initialize Current Products',
  Load = '[Product] Load',
  LoadSuccess = '[Product] LoadSuccess',
  LoadFail = '[Product] LoadFail',
};

export class ToggleProductCode implements Action {
  readonly type = ProductActionsTypes.ToggleProductCode;

  constructor(public payload: boolean) { }
}

export class SetCurrentProduct implements Action {
  readonly type = ProductActionsTypes.SetCurrentProduct;

  constructor(public payload: Product) { }
}

export class ClearCurrentProduct implements Action {
  readonly type = ProductActionsTypes.ClearCurrentProduct;
}

export class InitializeCurrentProduct implements Action {
  readonly type = ProductActionsTypes.InitializeCurrentProduct;
}

export class Load implements Action {
  readonly type = ProductActionsTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = ProductActionsTypes.LoadSuccess;

  constructor(payload: Product[]) {}
}

export class LoadFail implements Action {
  readonly type = ProductActionsTypes.LoadSuccess;

  constructor(payload: string) {}
}

export type ProductActions = ToggleProductCode
  | SetCurrentProduct
  | ClearCurrentProduct
  | InitializeCurrentProduct
  | Load
  | LoadSuccess
  | LoadFail;