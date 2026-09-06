import React from "react";
import Navbar from "../COMPONENTS/Navbar.jsx";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Layout() {
  // const cartItemsCount = useSelector((state) => state.cartItems.length);
  const cartItems = useSelector((state) => state.cartItems);
  const totalItemsInCart = cartItems?.reduce(
    (total, curr) => total + curr.quantity,
    0,
  );
  // console.log(totalItemsInCart);
  return (
    <div>
      <Navbar companyName="Shopees" cartCount={totalItemsInCart} />
      <Outlet />
    </div>
  );
}
