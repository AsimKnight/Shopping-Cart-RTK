import { combineReducers, legacy_createStore as createStore } from "redux";
import productReducer from "./productsReducer.js";
import cartReducer, { increaseQuantityOfCartItem } from "./cartReducer.js";
import wishlistReducer, {
  increaseWishList,
  removeWishListItem,
  WISHLIST_ADD_ITEM,
  WISHLIST_REMOVE_ITEM,
} from "./wishListReducer.js";
import { configureStore } from "@reduxjs/toolkit";

//using rtk way to create store
const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartReducer,
    wishlist: wishlistReducer,
  },
});

// using redux way to create store

// const reducer = combineReducers({
//   products: productReducer,
//   cartItems: cartReducer,
//   wishlist: wishlistReducer,
// });

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

// const users = [
//   {
//     id: 100,
//     name: "jhon",
//     age: 40,
//     city: "New-York",
//   },
//   {
//     id: 200,
//     name: "umar",
//     age: 30,
//     city: "Moscow",
//   },
//   {
//     id: 300,
//     name: "virat",
//     age: 38,
//     city: "Delhi",
//   },
// ];

// //Mutating Object
// users[2].age = 39;

// //Non Mutatig Way
// const updatedUsers = users.map((user) => {
//   return user.id === 300 ? { ...user, age: 40 } : user;
// });
// console.log(updatedUsers);

// //using immerjs function 'produce'

// const newUsers = produce(users, (copyUsers) => {
//   copyUsers[2].age = 41;
// });

// store.dispatch({
//   type: CART_ADD_ITEM,
//   payload: { productId: 1, quantity: 1 },
// });

// store.dispatch({
//   type: CART_DECREASE_ITEM_QUANTITY,
//   payload: { productId: 1 },
// });

// store.dispatch({
//   type: CART_ADD_ITEM,
//   payload: { productId: 2, quantity: 1 },
// });

// store.dispatch({
//   type: CART_ADD_ITEM,
//   payload: { productId: 3, quantity: 1 },
// });

// store.dispatch({
//   type: CART_REMOVE_ITEM,
//   payload: { productId: 3 },
// });

// store.dispatch({
//   type: CART_INCREASE_ITEM_QUANTITY,
//   payload: { productId: 2, amount: 10 },
// });

// store.dispatch({
//   type: CART_INCREASE_ITEM_QUANTITY,
//   payload: { productId: 1, amount: 90 },
// });

// store.dispatch(increaseQuantityOfCartItem(2, 300));

// store.dispatch({
//   type: WISHLIST_ADD_ITEM,
//   payload: { title: "School Bag", price: 550, productId: 121 },
// });

// store.dispatch({
//   type: WISHLIST_ADD_ITEM,
//   payload: { title: "Pen", price: 20, productId: 122 },
// });
// store.dispatch({ type: WISHLIST_REMOVE_ITEM, payload: { productId: 121 } });
// store.dispatch(increaseWishList({ title: "Book", price: 920, productId: 123 }));

// store.dispatch(removeWishListItem(122));

export { store };
export default store;
