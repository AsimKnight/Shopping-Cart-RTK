// import Product from "./Product";
// import { useSelector } from "react-redux";

// const ShowProdcts = () => {
//   const productsArray = useSelector((state) => state.products);
//   // console.log(productsArray);

//   return (
//     <div>
//       {productsArray.map((product) => {
//         return (
//           <Product
//             key={product.id}
//             productId={product.id}
//             title={product.title}
//             rating={product.rating.rate}
//             price={product.price}
//             imageUrl={product.image}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default ShowProdcts;

//=======================================
import Product from "./Product";
import { useSelector } from "react-redux";

const ShowProdcts = () => {
  const productsArray = useSelector((state) => state.products);

  return (
    <div className="mx-auto w-full max-w-350 px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <div
        className="
          grid
          grid-cols-1
          gap-6

          sm:grid-cols-2

          lg:grid-cols-3
          lg:gap-8

          xl:grid-cols-4

          2xl:grid-cols-5
        "
      >
        {productsArray.map((product) => {
          return (
            <Product
              key={product.id}
              productId={product.id}
              title={product.title}
              rating={product.rating.rate}
              price={product.price}
              imageUrl={product.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShowProdcts;
