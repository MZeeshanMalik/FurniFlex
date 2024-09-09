import React, { useState } from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { FiMenu } from "react-icons/fi"; // Import the menu icon
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCart } from "../Features/cart/CartSlice";

// Styled components
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px;
    margin-right: 0.5rem;
  }

  h1 {
    font-size: 1.5rem;
    color: black;
    font-weight: bold;

    span {
      color: #696cff;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    color: black;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.2s ease;
    padding: 0.5rem;
    &:hover {
      color: #696cff;
    }

    &.active {
      background-color: #f8f8f8;
      /* padding: 0.5rem; */
      border-radius: 8px;
      /* color: #696cff; */
    }
  }

  @media (max-width: 768px) {
    display: none; // Hide navigation on small screens
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const CartIcon = styled.div`
  position: relative;
  font-size: 1.5rem;
  color: black;

  &:hover {
    color: #696cff;
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #e53935;
  color: white;
  font-size: 0.8rem;
  border-radius: 50%;
  padding: 2px 6px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #ececf1;
`;

const Hamburger = styled(FiMenu)`
  font-size: 1.5rem;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block; // Show hamburger icon on small screens
  }
`;

const Sidebar = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;

  a {
    display: block;
    padding: 1rem 0;
    font-size: 1.2rem;
    color: black;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: #696cff;
    }
  }
`;

const Overlay = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 999;
`;

// Header Component
const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const cart = useSelector(getCart);

  return (
    <>
      <HeaderWrapper>
        {/* Logo */}
        <Logo>
          {/* <img src="/path/to/logo.png" alt="FurniFlex Logo" /> */}
          <h1>
            Furni<span>Flex</span>
          </h1>
        </Logo>

        {/* Hamburger Icon */}
        <Hamburger onClick={toggleSidebar} />

        {/* Navigation */}
        <Nav>
          <a href="/">Home</a>
          <a href="#" className="active">
            Products
          </a>
          <a href="#">Categories</a>
          <a href="#">Custom</a>
          <a href="#">Blog</a>
        </Nav>

        {/* Cart and Profile */}
        <IconsWrapper>
          <a href="/cart">
            <CartIcon>
              <FiShoppingCart />
              <CartBadge>{cart.cart.length}</CartBadge>
            </CartIcon>
          </a>
          <ProfileImage src="../../public/images/account.svg" alt="Profile" />
        </IconsWrapper>
      </HeaderWrapper>

      {/* Sidebar for small screens */}
      <Overlay isOpen={sidebarOpen} onClick={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen}>
        <a href="/" className="active">
          Home
        </a>
        <a href="#">Products</a>
        <a href="#">Categories</a>
        <a href="#">Custom</a>
        <a href="#">Blog</a>
      </Sidebar>
    </>
  );
};

export default Header;
