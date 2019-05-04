import { Action } from "@ngrx/store";
import { ProductActionTypes } from "./product-action-types.enum";
import { ProductState } from "./product-store.class";

const productState = ProductState;

export const ProductReducer = (state = productState, action: Action) => {
  switch (action.type) {
    case ProductActionTypes.ToggleProductCode:
      return {
        ...state,
        showProductCode: action['payload']
      }
  
    default:
      return state;
  }
}