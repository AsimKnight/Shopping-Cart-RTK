// import { useDispatch } from "react-redux";
// import { addItemInCart } from "../STORE/cartReducer";

// export default function Product({ title, rating, price, imageUrl, productId }) {
//   const dispatch = useDispatch();
//   return (
//     // <div className="product">
//     //   <div className="product-image">
//     //     <img src={imageUrl} alt={title} />
//     //   </div>
//     //   <div className="title-container">
//     //     <h3>
//     //       <a href="#">{title}</a>
//     //     </h3>
//     //   </div>
//     //   <div className="price-rating-container">
//     //     <p className="rating">{+rating} ★ ★ ★ ★</p>
//     //     <p className="price">${price}</p>
//     //   </div>
//     //   <div className="cta-container">
//     //     <button
//     //       className="border border-black px-3 py-2"
//     //       onClick={() => {
//     //         dispatch(addItemInCart(productId));
//     //       }}
//     //     >
//     //       Add to Cart
//     //     </button>
//     //     <button className="border border-black px-3 py-2">Buy Now</button>
//     //   </div>
//     // </div>
//     <div className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md max-w-sm w-full lg:max-w-md">
//       {/* Image Container */}
//       <div className="product-image relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100 mb-4">
//         <img
//           src={imageUrl}
//           alt={title}
//           className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
//         />
//       </div>

//       {/* Main Content Area */}
//       <div className="flex flex-1 flex-col justify-between">
//         <div className="title-container mb-3">
//           <h3 className="line-clamp-2 text-base font-semibold text-gray-800 transition-colors hover:text-black lg:text-lg">
//             <a href="#" className="hover:underline">
//               {title}
//             </a>
//           </h3>
//         </div>

//         {/* Price & Rating Container */}
//         <div className="price-rating-container mb-4 flex flex-wrap items-center justify-between gap-2">
//           <p className="rating flex items-center gap-1 text-sm font-medium text-amber-500">
//             <span>{+rating}</span>
//             <span className="text-base">★ ★ ★ ★</span>
//           </p>
//           <p className="price text-lg font-bold text-gray-900 lg:text-xl">
//             ${price}
//           </p>
//         </div>

//         {/* CTA Buttons Container */}
//         <div className="cta-container flex flex-col gap-2 sm:flex-row sm:items-center">
//           <button
//             className="w-full sm:flex-1 rounded-lg border border-black bg-white px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white active:scale-95"
//             onClick={() => {
//               dispatch(addItemInCart({ productId, quantity: 1 }));
//             }}
//           >
//             Add to Cart
//           </button>
//           <button className="w-full sm:flex-1 rounded-lg border border-black bg-black px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 active:scale-95">
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

//=====================================
import { useDispatch } from "react-redux";
import { addItemInCart } from "../STORE/cartReducer";

export default function Product({ title, rating, price, imageUrl, productId }) {
  const dispatch = useDispatch();
  return (
    // <div className="product">
    //   <div className="product-image">
    //     <img src={imageUrl} alt={title} />
    //   </div>
    //   <div className="title-container">
    //     <h3>
    //       <a href="#">{title}</a>
    //     </h3>
    //   </div>
    //   <div className="price-rating-container">
    //     <p className="rating">{+rating} ★ ★ ★ ★</p>
    //     <p className="price">${price}</p>
    //   </div>
    //   <div className="cta-container">
    //     <button
    //       className="border border-black px-3 py-2"
    //       onClick={() => {
    //         dispatch(addItemInCart(productId));
    //       }}
    //     >
    //       Add to Cart
    //     </button>
    //     <button className="border border-black px-3 py-2">Buy Now</button>
    //   </div>
    // </div>
    <div className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Image Container */}
      <div className="product-image relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100 mb-4">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col justify-between">
        <div className="title-container mb-3">
          <h3 className="line-clamp-2 text-base font-semibold text-gray-800 transition-colors hover:text-black lg:text-lg">
            <a href="#" className="hover:underline">
              {title}
            </a>
          </h3>
        </div>

        {/* Price & Rating Container */}
        <div className="price-rating-container mb-4 flex flex-wrap items-center justify-between gap-2">
          <p className="rating flex items-center gap-1 text-sm font-medium text-amber-500">
            <span>{+rating}</span>
            <span className="text-base">★ ★ ★ ★</span>
          </p>
          <p className="price text-lg font-bold text-gray-900 lg:text-xl">
            ${price}
          </p>
        </div>

        {/* CTA Buttons Container */}
        <div className="cta-container flex flex-col gap-2 sm:flex-row sm:items-center">
          <button
            className="w-full sm:flex-1 rounded-lg border border-black bg-white px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white active:scale-95"
            onClick={() => {
              dispatch(addItemInCart({ productId, quantity: 1 }));
            }}
          >
            Add to Cart
          </button>
          <button className="w-full sm:flex-1 rounded-lg border border-black bg-black px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 active:scale-95">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
