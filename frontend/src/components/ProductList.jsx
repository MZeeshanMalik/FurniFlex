import { FiShoppingCart } from "react-icons/fi";
import data from "../data.json";
import { useDispatch } from "react-redux";
import { addItem } from "../Features/cart/CartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CartBadge,
  LayoutWrapper,
  PaginationWrapper,
  ProductCard,
  ProductGrid,
  Sidebar,
  SidebarItem,
} from "./productListCss";
import React from "react";
// import { addItem } from "../Features/cart/CartSlice";

// Dummy product data
const products = data;
const SidebarItems = ["Rocking chair", "Side chair", "Lounge chair"];

const ProductLayout = () => {
  const dispatch = useDispatch();
  function handleAddCartItems(item) {
    dispatch(addItem(item));
    toast.success(` ${item.name}  Added to cart`);
  }
  return (
    <LayoutWrapper>
      <ToastContainer position="top-center" autoClose="3000" />

      {/* Sidebar */}
      <Sidebar>
        {SidebarItems.map((item, index) => (
          <React.Fragment key={index}>
            <SidebarItem className={index === 0 ? "active" : ""}>
              {item}
            </SidebarItem>

            {SidebarItems.length > index + 1 ? <hr /> : ""}
          </React.Fragment>
        ))}
      </Sidebar>
      {/* Product Grid */}
      <ProductGrid>
        {products.map((product, index) => (
          <ProductCard key={index}>
            <img src={`../../Images/${product.image}.png`} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">
              <span className="new-price">{product.price}</span>
              <span className="old-price">{product.oldPrice}</span>
              30% off
            </p>
            <p>{product.description}</p>
            <button onClick={() => handleAddCartItems(product)}>
              <FiShoppingCart />
              <CartBadge>2</CartBadge>
              &nbsp; Add to cart
            </button>
          </ProductCard>
        ))}

        {/* Pagination */}
        <PaginationWrapper>
          <button className="active">1</button>
          <button>2</button>
          <button>...</button>
          <button>10</button>
        </PaginationWrapper>
      </ProductGrid>
    </LayoutWrapper>
  );
};

export default ProductLayout;
