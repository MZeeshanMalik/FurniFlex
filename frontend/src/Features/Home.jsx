import React from "react";
import { GlobalStyle } from "../GlobalStyles";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <GlobalStyle />
      <ProductList />
    </>
  );
}

export default Home;
