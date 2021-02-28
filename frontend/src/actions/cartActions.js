//And the reason we're bringing in Axios is because when we add an item to the cart, we want to make a request to API products and then the I.D. to get the the the fields to get the data for that particular product to add to our cart.So we need axios.
import axios from 'axios'
import { CART_ADD_ITEM } from '../constants/cartConstants'

//to take in an I.D. and quantity which in the screen we can get from the URL and then we're going to use thunk
//Now we're also going to be saving our entire cart to local storage here.And along with dispatch, we can actually pass and get state and that allows us to get our entire state tree. So anything we want, like product list, product details or cart, we can grab that with get state dot and then whatever we want from here and we're going to want the cart items.So we're going to pass that in and then let's make our requests.
export const addToCart = (id, qty) => async (dispatch, getState) => {
	const { data } = await axios.get(`/api/products/${id}`)

	dispatch({
		type: CART_ADD_ITEM,
		payload: {
			product: data._id,
			name: data.name,
			image: data.image,
			price: data.price,
			countInStock: data.countInStock,
			qty
		}
	})
	//we want to save it in local storage so we can use our local storage API call set item.So this is where we use get state and we can say cart and then we want the cart items in our state.Now, this is going to give us a JSON JavaScript object.So we want to call JSON.stringify because we can only save string's in local storage and then once we take it out, we'll have to use JSON.parse to pass it back to JavaScript.
	localStorage.setItem('cartItems', JSON.stringify(getState().cart.carItems))
}