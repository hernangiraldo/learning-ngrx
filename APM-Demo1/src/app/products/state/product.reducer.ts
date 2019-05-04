import { Product } from "../product";
import { Action } from "@ngrx/store";
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductActionsTypes, ProductActions } from "./product.actions";

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

export interface State extends fromRoot.State {
  products: ProductState
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};

const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  state => state.currentProduct
);

export const getCurrentProductId = createSelector(
  getCurrentProduct,
  state => state.id
);

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
);

export function reducer(state = initialState, action: ProductActions): ProductState {
  switch (action.type) {

    case ProductActionsTypes.ToggleProductCode:
      return {
        ...state,
        showProductCode: action.payload
      };
    case ProductActionsTypes.SetCurrentProduct:
      return {
        ...state,
        currentProduct: {...action.payload}
      };
    case ProductActionsTypes.ClearCurrentProduct:
      return {
        ...state,
        currentProduct: null
      };
    case ProductActionsTypes.InitializeCurrentProduct:
      return {
        ...state,
        currentProduct: {
          id: 0,
          productName: '',
          productCode: 'New',
          description: '',
          starRating: 0
        }
      };

    default:
      return state;
  }
}
