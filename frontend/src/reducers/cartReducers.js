import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants.js'

//state object will have cartitem because there can be more than 1 product, also passing in action.
export const cartReducer = (state = { cartItems: [] }, action) => {
	//swith for action type
	switch (action.type) {
		case CART_ADD_ITEM:
			//if we add cart and it is already there 
			const item = action.payload
			//find if it item exist, we can get from state in our cart items and find if it exist
			//for x in x.products 
			const existItem = state.cartItems.find(x => x.products === item.product)
			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
				}
			} else {
				//if item already exist then just add to current items in cart and add the new item
				return {
					...state,
					cartItems: [...state.cartItems, item]
				}
			}
		case CART_REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter((x) => x.product !== action.payload)
			}
		default:
			return state;
	}
}