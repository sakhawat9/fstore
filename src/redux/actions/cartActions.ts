import { ActionType } from 'redux/actionType';
import { IProduct } from 'type';

export const addToCart = (payload: IProduct) => {
  return {
    type: ActionType.ADD_TO_CART,
    payload,
  };
};

export const removeFromCart = (payload: IProduct) => {
  return {
    type: ActionType.REMOVE_FROM_CART,
    payload,
  };
};

export type CartAction =
  | ReturnType<typeof addToCart>
  | ReturnType<typeof removeFromCart>;