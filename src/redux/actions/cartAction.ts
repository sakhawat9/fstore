import { IProduct } from 'type';
import { ActionType } from './../actionType';

interface addToCartAction {
  type: ActionType.ADD_TO_CART;
  payload: IProduct;
}

interface removeFromCartAction {
  type: ActionType.REMOVE_FROM_CART;
  payload: number;
}

interface clearCartAction {
  type: ActionType.CLEAR_CART;
}

export type CartAction =
  | addToCartAction
  | removeFromCartAction
  | clearCartAction;
