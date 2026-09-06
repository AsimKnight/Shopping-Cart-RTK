// import { produce } from "immer";
import { createSlice, current } from "@reduxjs/toolkit";

const CART_ADD_ITEM = "cart/addCartItem";
const CART_REMOVE_ITEM = "cart/removeCartItem";
const CART_INCREASE_ITEM_QUANTITY = "cart/increaseCartItemQuantity";
const CART_DECREASE_ITEM_QUANTITY = "cart/decreaseCartItemQuantity";

//===================== NON MUTAING WAY =====================
// export default function cartReducer(state = [], action) {
//   switch (action.type) {
//     case CART_ADD_ITEM:
//       const isExist = state.some(
//         (cartItem) => cartItem.productId === action.payload.productId,
//       );

//       if (!isExist) {
//         return [...state, action.payload];
//       }

//       return state.map((cartItem) => {
//         return cartItem.productId === action.payload.productId
//           ? { ...cartItem, quantity: cartItem.quantity + 1 }
//           : cartItem;
//       });

//     case CART_REMOVE_ITEM:
//       return state.filter((item) => {
//         return item.productId !== action.payload.productId;
//       });

//     case CART_INCREASE_ITEM_QUANTITY:
//       return state.map((item) => {
//         if (item.productId === action.payload.productId) {
//           return {
//             ...item,
//             quantity: item.quantity + action.payload.amount,
//           };
//         }
//         return item;
//       });

//     case CART_DECREASE_ITEM_QUANTITY:
//       return state
//         .map((item) => {
//           return item.productId === action.payload.productId
//             ? {
//                 ...item,
//                 quantity: item.quantity - 1,
//               }
//             : item;
//         })
//         .filter((item) => item.quantity > 0);

//     default:
//       return state;
//   }
// }

//===================== MUTAING WAY (using immer.js) ==============

// export default function cartReducer(originalState = [], action) {
//   return produce(originalState, (state) => {
//     const ExistingItemIndex = state.findIndex((item) => {
//       return item.productId === action.payload.productId;
//     });
//     switch (action.type) {
//       case CART_ADD_ITEM:
//         if (ExistingItemIndex === -1) {
//           state.push(action.payload);
//           return state;
//         }
//         const ExistingItem = state.find((item) => {
//           return item.productId === action.payload.productId;
//         });
//         state[ExistingItemIndex] = {
//           ...ExistingItem,
//           quantity: ExistingItem.quantity + 1,
//         };
//         return state;

//       case CART_REMOVE_ITEM:
//         state.splice(ExistingItemIndex, 1);
//         return state;

//       case CART_INCREASE_ITEM_QUANTITY:
//         state[ExistingItemIndex].quantity += 1;
//         return state;
//       case CART_DECREASE_ITEM_QUANTITY:
//         state[ExistingItemIndex].quantity -= 1;
//         if (state[ExistingItemIndex].quantity < 1) {
//           state.splice(ExistingItemIndex, 1);
//         }
//         return state;

//       default:
//         return state;
//     }
//   });
// }

//HERE 4 ACTION CREATORS
// export function addItemInCart(id) {
//   return {
//     type: CART_ADD_ITEM,
//     payload: { productId: id, quantity: 1 },
//   };
// }

// export function removeItemFromCart(id) {
//   return {
//     type: CART_REMOVE_ITEM,
//     payload: { productId: id },
//   };
// }

// export function increseQuantityOfCartItem(productIdValue, amountValue = 1) {
//   return {
//     type: CART_INCREASE_ITEM_QUANTITY,
//     payload: { productId: productIdValue, amount: amountValue },
//   };
// }

// export function decreaseQuantityOfCartItem(productIdValue, amountValue = 1) {
//   return {
//     type: CART_DECREASE_ITEM_QUANTITY,
//     payload: { productId: productIdValue, amount: amountValue },
//   };
// }

const findItemIndex = (state, action) => {
  console.log('state is : ', current(state));
  console.log("action : ", action);

  const indexNo = state.findIndex((item) => {
    console.log(item.productId, " vs ", action.payload.id);
    return item.productId === action.payload.id;
  });
  console.log("Index No : ", indexNo);
  return indexNo;
};

//===================== BEST WAY (using RTK) ==============

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // addItemInCart: function (state, action) {
    //   const ExistingItemIndex = findItemIndex(state, action);
    //   if (ExistingItemIndex === -1) {
    //     state.push(action.payload);
    //     return state;
    //   }
    //   state[ExistingItemIndex].quantity += 1;
    //   return state;
    // },
    addCartItem: function (state, action) {
      const ExistingItemIndex = findItemIndex(state, action);

      if (ExistingItemIndex === -1) {
        state.push(action.payload);
        return state;
      }
      state[ExistingItemIndex].quantity += 1;
      return state;
    },
    removeCartItem: function (state, action) {
      const ExistingItemIndex = findItemIndex(state, action);

      state.splice(ExistingItemIndex, 1);
      return state;
    },

    increaseCartItemQuantity: function (state, action) {
      const ExistingItemIndex = findItemIndex(state, action);

      state[ExistingItemIndex].quantity += 1;
      return state;
    },

    decreaseCartItemQuantity: function (state, action) {
      const ExistingItemIndex = findItemIndex(state, action);
      state[ExistingItemIndex].quantity -= 1;

      if (state[ExistingItemIndex].quantity < 1) {
        state.splice(ExistingItemIndex, 1);
      }
      return state;
    },
  },
});

console.log(cartSlice);

export const {
  addCartItem: addItemInCart,
  removeCartItem: removeItemFromCart,
  increaseCartItemQuantity: increaseQuantityOfCartItem,
  decreaseCartItemQuantity: decreaseQuantityOfCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;
