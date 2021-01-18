import React from "react";
import "./style.css";
import Product from "./components/ProductComponent";
import { PRODUCTS } from "./shared/product";

export default function App() {
  return (
    <div>
      <Product />
    </div>
  );
}
