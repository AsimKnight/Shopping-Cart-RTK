// import { useDispatch, useSelector } from "react-redux";

// import {
//   increaseQuantityOfCartItem,
//   decreaseQuantityOfCartItem,
//   removeItemFromCart,
// } from "../STORE/cartReducer";

// export default function CartPage() {
//   const cartItems = useSelector((state) => state.cartItems);
//   const productsList = useSelector((state) => state.products);

//   const dispatch = useDispatch();

//   // Combine product data with cart data
//   const matchingProduct = [];

//   cartItems.forEach((cartItem) => {
//     productsList.forEach((productItem) => {
//       if (cartItem.productId === productItem.id) {
//         matchingProduct.push({
//           ...productItem,
//           quantity: cartItem.quantity,
//         });
//       }
//     });
//   });

//   // Calculate total cart price
//   const cartTotal = matchingProduct.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0,
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="mx-auto w-full max-w-350 px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
//         {/* ================= TITLE ================= */}

//         <div className="mb-10">
//           <h1 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
//             Shopping Cart
//           </h1>

//           <p className="mt-2 text-gray-500">
//             {matchingProduct.length}{" "}
//             {matchingProduct.length === 1 ? "item" : "items"} in your cart
//           </p>
//         </div>

//         {/* =================================================
//             DESKTOP CART
//             ================================================= */}

//         <div className="hidden md:block">
//           {/* TABLE HEADER */}

//           <div
//             className="
//               grid
//               grid-cols-[minmax(500px,1fr)_150px_220px_170px]
//               items-center
//               border-b
//               border-gray-300
//               px-4
//               pb-5
//             "
//           >
//             <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
//               Item
//             </p>

//             <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500">
//               Price
//             </p>

//             <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500">
//               Quantity
//             </p>

//             <p className="text-right text-sm font-semibold uppercase tracking-wide text-gray-500">
//               Total
//             </p>
//           </div>

//           {/* PRODUCTS */}

//           {matchingProduct.map((cartItem) => (
//             <div
//               key={cartItem.id}
//               className="
//                 grid
//                 grid-cols-[minmax(500px,1fr)_150px_220px_170px]
//                 items-center
//                 border-b
//                 border-gray-200
//                 px-4
//                 py-8
//               "
//             >
//               {/* ================= PRODUCT ================= */}

//               <div className="flex min-w-0 items-center gap-7">
//                 {/* PRODUCT IMAGE */}

//                 <div
//                   className="
//                     flex
//                     h-36
//                     w-32
//                     shrink-0
//                     items-center
//                     justify-center
//                     overflow-hidden
//                     rounded-xl
//                     bg-gray-50
//                   "
//                 >
//                   <img
//                     src={cartItem.image}
//                     alt={cartItem.title}
//                     className="
//                       h-full
//                       w-full
//                       scale-125
//                       object-contain
//                       p-2
//                     "
//                   />
//                 </div>

//                 {/* PRODUCT INFORMATION */}

//                 <div className="min-w-0">
//                   <h2
//                     className="
//                       max-w-[600px]
//                       text-xl
//                       font-semibold
//                       leading-7
//                       text-gray-900
//                     "
//                   >
//                     {cartItem.title}
//                   </h2>

//                   {/* RATING */}

//                   <div className="mt-4 flex items-center gap-2">
//                     <span className="font-medium text-gray-700">
//                       {cartItem.rating?.rate}
//                     </span>

//                     <span className="text-lg tracking-wide text-yellow-500">
//                       ★★★★★
//                     </span>

//                     <span className="text-sm text-gray-400">
//                       ({cartItem.rating?.count})
//                     </span>
//                   </div>

//                   {/* CATEGORY */}

//                   <p className="mt-3 text-sm capitalize text-gray-500">
//                     {cartItem.category}
//                   </p>
//                 </div>
//               </div>

//               {/* ================= PRICE ================= */}

//               <div className="text-center text-lg text-gray-700">
//                 ${cartItem.price.toFixed(2)}
//               </div>

//               {/* ================= QUANTITY ================= */}

//               <div className="flex items-center justify-center">
//                 <div className="flex items-center overflow-hidden rounded-lg border border-gray-300">
//                   <button
//                     onClick={() =>
//                       dispatch(decreaseQuantityOfCartItem(cartItem))
//                     }
//                     className="
//                       flex
//                       h-11
//                       w-11
//                       items-center
//                       justify-center
//                       text-xl
//                       text-gray-700
//                       transition
//                       hover:bg-gray-100
//                       active:bg-gray-200
//                     "
//                   >
//                     −
//                   </button>
//                   <span
//                     className="
//                       flex
//                       h-11
//                       w-12
//                       items-center
//                       justify-center
//                       border-x
//                       border-gray-300
//                       font-semibold
//                       text-gray-900
//                     "
//                   >
//                     {cartItem.quantity}
//                   </span>
//                   <button
//                     onClick={() => {
//                       return dispatch(increaseQuantityOfCartItem(cartItem));
//                     }}
//                     className="
//                       flex
//                       h-11
//                       w-11
//                       items-center
//                       justify-center
//                       text-xl
//                       text-gray-700
//                       transition
//                       hover:bg-gray-100
//                       active:bg-gray-200
//                     "
//                   >
//                     +
//                   </button>
//                 </div>
//                 <button
//                   onClick={() => dispatch(removeItemFromCart(cartItem))}
//                   className="ml-2 border border-red-500"
//                 >
//                   Remove
//                 </button>
//               </div>

//               {/* ================= TOTAL ================= */}

//               <div className="text-right text-lg font-semibold text-gray-900">
//                 ${(cartItem.price * cartItem.quantity).toFixed(2)}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* =================================================
//             MOBILE CART
//             ================================================= */}

//         <div className="space-y-4 md:hidden">
//           {matchingProduct.map((cartItem) => (
//             <div
//               key={cartItem.id}
//               className="
//                 rounded-xl
//                 border
//                 border-gray-200
//                 bg-white
//                 p-4
//                 shadow-sm
//               "
//             >
//               {/* PRODUCT */}

//               <div className="flex gap-4">
//                 {/* IMAGE */}

//                 <div
//                   className="
//                     flex
//                     h-28
//                     w-24
//                     shrink-0
//                     items-center
//                     justify-center
//                     rounded-lg
//                     bg-gray-50
//                   "
//                 >
//                   <img
//                     src={cartItem.image}
//                     alt={cartItem.title}
//                     className="
//                       h-full
//                       w-full
//                       scale-110
//                       object-contain
//                       p-1
//                     "
//                   />
//                 </div>

//                 {/* DETAILS */}

//                 <div className="min-w-0">
//                   <h2 className="text-base font-semibold leading-5 text-gray-900">
//                     {cartItem.title}
//                   </h2>

//                   <div className="mt-2 flex items-center gap-1 text-sm">
//                     <span>{cartItem.rating?.rate}</span>

//                     <span className="text-yellow-500">★★★★★</span>
//                   </div>

//                   <p className="mt-2 font-medium text-gray-800">
//                     ${cartItem.price.toFixed(2)}
//                   </p>
//                 </div>
//               </div>

//               {/* MOBILE CONTROLS */}

//               <div
//                 className="
//                   mt-4
//                   flex
//                   items-center
//                   justify-between
//                   border-t
//                   border-gray-100
//                   pt-4
//                 "
//               >
//                 {/* QUANTITY */}

//                 <div className="flex items-center overflow-hidden rounded-lg border border-gray-300">
//                   <button
//                     onClick={() =>
//                       dispatch(decreaseQuantityOfCartItem(cartItem))
//                     }
//                     className="
//                       flex
//                       h-9
//                       w-9
//                       items-center
//                       justify-center
//                       text-lg
//                       hover:bg-gray-100
//                     "
//                   >
//                     −
//                   </button>

//                   <span
//                     className="
//                       flex
//                       h-9
//                       w-10
//                       items-center
//                       justify-center
//                       border-x
//                       border-gray-300
//                       font-medium
//                     "
//                   >
//                     {cartItem.quantity}
//                   </span>

//                   <button
//                     onClick={() =>
//                       dispatch(increaseQuantityOfCartItem(cartItem))
//                     }
//                     className="
//                       flex
//                       h-9
//                       w-9
//                       items-center
//                       justify-center
//                       text-lg
//                       hover:bg-gray-100
//                     "
//                   >
//                     +
//                   </button>
//                 </div>

//                 {/* TOTAL */}

//                 <span className="font-semibold text-gray-900">
//                   ${(cartItem.price * cartItem.quantity).toFixed(2)}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* =================================================
//             ORDER SUMMARY
//             ================================================= */}

//         <div className="mt-14 flex justify-end">
//           <div
//             className="
//               w-full
//               rounded-2xl
//               border
//               border-gray-200
//               bg-white
//               p-7
//               shadow-md

//               sm:p-8

//               md:w-[520px]

//               lg:w-[560px]
//               lg:p-10

//               xl:w-[600px]
//               xl:p-10

//               2xl:w-[650px]
//             "
//           >
//             {/* TITLE */}

//             <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
//               Order Summary
//             </h2>

//             {/* SUMMARY DETAILS */}

//             <div className="mt-8 space-y-5">
//               {/* SUBTOTAL */}

//               <div className="flex items-center justify-between text-lg text-gray-600">
//                 <span>Subtotal</span>

//                 <span className="font-medium text-gray-900">
//                   ${cartTotal.toFixed(2)}
//                 </span>
//               </div>

//               {/* SHIPPING */}

//               <div className="flex items-center justify-between text-lg text-gray-600">
//                 <span>Shipping</span>

//                 <span className="font-medium text-green-600">Free</span>
//               </div>

//               {/* TAX */}

//               <div className="flex items-center justify-between text-lg text-gray-600">
//                 <span>Tax</span>

//                 <span className="font-medium text-gray-900">$0.00</span>
//               </div>
//             </div>

//             {/* DIVIDER */}

//             <div className="my-8 border-t border-gray-200" />

//             {/* TOTAL */}

//             <div className="flex items-center justify-between">
//               <span className="text-xl font-semibold text-gray-900 lg:text-2xl">
//                 Total
//               </span>

//               <span className="text-3xl font-bold text-gray-900 lg:text-4xl">
//                 ${cartTotal.toFixed(2)}
//               </span>
//             </div>

//             {/* CHECKOUT BUTTON */}

//             <button
//               className="
//                 mt-8
//                 w-full
//                 rounded-xl
//                 bg-black
//                 py-4
//                 text-lg
//                 font-semibold
//                 text-white
//                 transition
//                 hover:bg-gray-800
//                 active:scale-[0.99]

//                 lg:py-5
//                 lg:text-xl
//               "
//             >
//               Proceed to Checkout
//             </button>

//             {/* FOOTER */}

//             <div className="mt-5 flex items-center justify-center gap-2 text-sm text-gray-400">
//               <span>🔒</span>
//               <span>Secure checkout</span>
//               <span>•</span>
//               <span>Free shipping</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

//=============================

import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantityOfCartItem,
  decreaseQuantityOfCartItem,
  removeItemFromCart,
} from "../STORE/cartReducer";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cartItems);
  const productsList = useSelector((state) => state.products);

  const dispatch = useDispatch();

  // Combine product data with cart data
  const matchingProduct = [];

  cartItems.forEach((cartItem) => {
    productsList.forEach((productItem) => {
      if (cartItem.productId === productItem.id) {
        matchingProduct.push({
          ...productItem,
          quantity: cartItem.quantity,
        });
      }
    });
  });

  // Calculate total cart price
  const cartTotal = matchingProduct.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto w-full max-w-350 px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        {/* ================= TITLE ================= */}

        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
            Shopping Cart
          </h1>

          <p className="mt-2 text-gray-500">
            {matchingProduct.length}{" "}
            {matchingProduct.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        {/* =================================================
            DESKTOP CART
            ================================================= */}

        <div className="hidden md:block">
          {/* TABLE HEADER */}

          <div
            className="
              grid
              grid-cols-[minmax(280px,1fr)_90px_150px_110px]
              items-center
              border-b
              border-gray-300
              px-4
              pb-5

              lg:grid-cols-[minmax(380px,1fr)_120px_190px_140px]

              xl:grid-cols-[minmax(500px,1fr)_150px_220px_170px]
            "
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Item
            </p>

            <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500">
              Price
            </p>

            <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500">
              Quantity
            </p>

            <p className="text-right text-sm font-semibold uppercase tracking-wide text-gray-500">
              Total
            </p>
          </div>

          {/* PRODUCTS */}

          {matchingProduct.map((cartItem) => (
            <div
              key={cartItem.id}
              className="
                grid
                grid-cols-[minmax(280px,1fr)_90px_150px_110px]
                items-center
                border-b
                border-gray-200
                px-4
                py-8

                lg:grid-cols-[minmax(380px,1fr)_120px_190px_140px]

                xl:grid-cols-[minmax(500px,1fr)_150px_220px_170px]
              "
            >
              {/* ================= PRODUCT ================= */}

              <div className="flex min-w-0 items-center gap-4 lg:gap-7">
                {/* PRODUCT IMAGE */}

                <div
                  className="
                    flex
                    h-24
                    w-20
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-xl
                    bg-gray-50

                    lg:h-32
                    lg:w-28

                    xl:h-36
                    xl:w-32
                  "
                >
                  <img
                    src={cartItem.image}
                    alt={cartItem.title}
                    className="
                      h-full
                      w-full
                      scale-125
                      object-contain
                      p-2
                    "
                  />
                </div>

                {/* PRODUCT INFORMATION */}

                <div className="min-w-0">
                  <h2
                    className="
                      max-w-[600px]
                      text-base
                      font-semibold
                      leading-6
                      text-gray-900

                      lg:text-lg
                      lg:leading-7

                      xl:text-xl
                    "
                  >
                    {cartItem.title}
                  </h2>

                  {/* RATING */}

                  <div className="mt-2 flex items-center gap-2 lg:mt-4">
                    <span className="font-medium text-gray-700">
                      {cartItem.rating?.rate}
                    </span>

                    <span className="text-lg tracking-wide text-yellow-500">
                      ★★★★★
                    </span>

                    <span className="text-sm text-gray-400">
                      ({cartItem.rating?.count})
                    </span>
                  </div>

                  {/* CATEGORY */}

                  <p className="mt-2 text-sm capitalize text-gray-500 lg:mt-3">
                    {cartItem.category}
                  </p>
                </div>
              </div>

              {/* ================= PRICE ================= */}

              <div className="text-center text-base text-gray-700 lg:text-lg">
                ${cartItem.price.toFixed(2)}
              </div>

              {/* ================= QUANTITY ================= */}

              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center overflow-hidden rounded-lg border border-gray-300">
                  <button
                    onClick={() =>
                      dispatch(decreaseQuantityOfCartItem(cartItem))
                    }
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      text-xl
                      text-gray-700
                      transition
                      hover:bg-gray-100
                      active:bg-gray-200

                      lg:h-11
                      lg:w-11
                    "
                  >
                    −
                  </button>
                  <span
                    className="
                      flex
                      h-9
                      w-10
                      items-center
                      justify-center
                      border-x
                      border-gray-300
                      font-semibold
                      text-gray-900

                      lg:h-11
                      lg:w-12
                    "
                  >
                    {cartItem.quantity}
                  </span>
                  <button
                    onClick={() => {
                      return dispatch(increaseQuantityOfCartItem(cartItem));
                    }}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      text-xl
                      text-gray-700
                      transition
                      hover:bg-gray-100
                      active:bg-gray-200

                      lg:h-11
                      lg:w-11
                    "
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => dispatch(removeItemFromCart(cartItem))}
                  className="ml-1 whitespace-nowrap border border-red-500 px-2 py-1 text-sm text-red-600 lg:ml-2 lg:px-3 lg:py-2 lg:text-base"
                >
                  Remove
                </button>
              </div>

              {/* ================= TOTAL ================= */}

              <div className="text-right text-base font-semibold text-gray-900 lg:text-lg">
                ${(cartItem.price * cartItem.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {/* =================================================
            MOBILE CART
            ================================================= */}

        <div className="space-y-4 md:hidden">
          {matchingProduct.map((cartItem) => (
            <div
              key={cartItem.id}
              className="
                rounded-xl
                border
                border-gray-200
                bg-white
                p-4
                shadow-sm
              "
            >
              {/* PRODUCT */}

              <div className="flex gap-4">
                {/* IMAGE */}

                <div
                  className="
                    flex
                    h-28
                    w-24
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-gray-50
                  "
                >
                  <img
                    src={cartItem.image}
                    alt={cartItem.title}
                    className="
                      h-full
                      w-full
                      scale-110
                      object-contain
                      p-1
                    "
                  />
                </div>

                {/* DETAILS */}

                <div className="min-w-0">
                  <h2 className="text-base font-semibold leading-5 text-gray-900">
                    {cartItem.title}
                  </h2>

                  <div className="mt-2 flex items-center gap-1 text-sm">
                    <span>{cartItem.rating?.rate}</span>

                    <span className="text-yellow-500">★★★★★</span>
                  </div>

                  <p className="mt-2 font-medium text-gray-800">
                    ${cartItem.price.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* MOBILE CONTROLS */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-between
                  border-t
                  border-gray-100
                  pt-4
                "
              >
                {/* QUANTITY */}

                <div className="flex items-center overflow-hidden rounded-lg border border-gray-300">
                  <button
                    onClick={() =>
                      dispatch(decreaseQuantityOfCartItem(cartItem))
                    }
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      text-lg
                      hover:bg-gray-100
                    "
                  >
                    −
                  </button>

                  <span
                    className="
                      flex
                      h-9
                      w-10
                      items-center
                      justify-center
                      border-x
                      border-gray-300
                      font-medium
                    "
                  >
                    {cartItem.quantity}
                  </span>

                  <button
                    onClick={() =>
                      dispatch(increaseQuantityOfCartItem(cartItem))
                    }
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      text-lg
                      hover:bg-gray-100
                    "
                  >
                    +
                  </button>
                </div>

                {/* TOTAL */}

                <span className="font-semibold text-gray-900">
                  ${(cartItem.price * cartItem.quantity).toFixed(2)}
                </span>
              </div>

              {/* REMOVE (mobile) */}

              <button
                onClick={() => dispatch(removeItemFromCart(cartItem))}
                className="mt-3 w-full rounded-lg border border-red-500 py-2 text-sm text-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* =================================================
            ORDER SUMMARY
            ================================================= */}

        <div className="mt-14 flex justify-end">
          <div
            className="
              w-full
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-7
              shadow-md

              sm:p-8

              md:w-[520px]

              lg:w-[560px]
              lg:p-10

              xl:w-[600px]
              xl:p-10

              2xl:w-[650px]
            "
          >
            {/* TITLE */}

            <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
              Order Summary
            </h2>

            {/* SUMMARY DETAILS */}

            <div className="mt-8 space-y-5">
              {/* SUBTOTAL */}

              <div className="flex items-center justify-between text-lg text-gray-600">
                <span>Subtotal</span>

                <span className="font-medium text-gray-900">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>

              {/* SHIPPING */}

              <div className="flex items-center justify-between text-lg text-gray-600">
                <span>Shipping</span>

                <span className="font-medium text-green-600">Free</span>
              </div>

              {/* TAX */}

              <div className="flex items-center justify-between text-lg text-gray-600">
                <span>Tax</span>

                <span className="font-medium text-gray-900">$0.00</span>
              </div>
            </div>

            {/* DIVIDER */}

            <div className="my-8 border-t border-gray-200" />

            {/* TOTAL */}

            <div className="flex items-center justify-between">
              <span className="text-xl font-semibold text-gray-900 lg:text-2xl">
                Total
              </span>

              <span className="text-3xl font-bold text-gray-900 lg:text-4xl">
                ${cartTotal.toFixed(2)}
              </span>
            </div>

            {/* CHECKOUT BUTTON */}

            <button
              className="
                mt-8
                w-full
                rounded-xl
                bg-black
                py-4
                text-lg
                font-semibold
                text-white
                transition
                hover:bg-gray-800
                active:scale-[0.99]

                lg:py-5
                lg:text-xl
              "
            >
              Proceed to Checkout
            </button>

            {/* FOOTER */}

            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-gray-400">
              <span>🔒</span>
              <span>Secure checkout</span>
              <span>•</span>
              <span>Free shipping</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
