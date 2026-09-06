// import { ShoppingCart } from "lucide-react";
// import { NavLink } from "react-router-dom";

// export default function Navbar({ cartCount = 0, companyName = "MyCompany" }) {
//   return (
//     <nav style={styles.navbar}>
//       <NavLink to="/">
//         <div style={styles.logo}>{companyName}</div>
//       </NavLink>
//       <NavLink to="/cart">
//         <div style={styles.cartContainer}>
//           <ShoppingCart size={24} style={styles.cartIcon} />
//           {cartCount > 0 && <span style={styles.badge}>{cartCount}</span>}
//         </div>
//       </NavLink>
//     </nav>
//   );
// }

// const styles = {
//   navbar: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "1rem 2rem",
//     backgroundColor: "#ffffff",
//     boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//     fontFamily: "sans-serif",
//   },
//   logo: {
//     fontSize: "1.5rem",
//     fontWeight: "bold",
//     color: "#333",
//   },
//   cartContainer: {
//     position: "relative",
//     cursor: "pointer",
//     display: "flex",
//     alignItems: "center",
//   },
//   cartIcon: {
//     color: "#333",
//   },
//   badge: {
//     position: "absolute",
//     top: "-8px",
//     right: "-8px",
//     backgroundColor: "#ff4d4f",
//     color: "white",
//     borderRadius: "50%",
//     padding: "2px 6px",
//     fontSize: "0.75rem",
//     fontWeight: "bold",
//     minWidth: "18px",
//     textAlign: "center",
//   },
// };

//=================================================
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar({ cartCount = 0, companyName = "MyCompany" }) {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-5 py-4 shadow-sm sm:px-8 lg:px-12">
      <NavLink to="/">
        <div className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
          {companyName}
        </div>
      </NavLink>

      <NavLink to="/cart">
        <div className="relative flex cursor-pointer items-center">
          <ShoppingCart
            size={24}
            className="text-gray-800 transition-colors hover:text-black sm:h-7 sm:w-7"
          />
          {cartCount > 0 && (
            <span className="absolute -right-2 -top-2 flex min-w-[18px] items-center justify-center rounded-full bg-red-500 px-1.5 py-0.5 text-xs font-bold text-white">
              {cartCount}
            </span>
          )}
        </div>
      </NavLink>
    </nav>
  );
}
