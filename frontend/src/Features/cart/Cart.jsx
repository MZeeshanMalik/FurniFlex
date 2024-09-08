import React from "react";
import styled from "styled-components";
import data from "../../data.json";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  decreaseQuantity,
  deleteItem,
  getCart,
  getTotalCartPrice,
  increasQuantity,
} from "./CartSlice";
import {
  Button,
  CheckoutButton,
  Container,
  Details,
  Image,
  ItemContent,
  Name,
  OrderContainer,
  OrderItem,
  Price,
  Quantity,
  QuantityControl,
  RemoveButton,
  SummaryContainer,
  SummaryItem,
  SummaryLabel,
  SummaryPrice,
  SummaryTitle,
  Title,
  Total,
  TotalLabel,
  TotalPrice,
} from "./cartCss";

const Cart = () => {
  // const items = data;
  const dispatch = useDispatch();
  const totalCartPrices = useSelector(getTotalCartPrice);
  function increasecartQuantity(id, itemQuantity) {
    if (itemQuantity < 100) {
      dispatch(increasQuantity(id));
    }
  }
  function decreasecartQuantity(id, itemQuantity) {
    if (itemQuantity > 1) {
      dispatch(decreaseQuantity(id));
    }
  }
  function handleRemoveItem(id) {
    dispatch(deleteItem({ id }));
    toast.success("Item  Deleted");
  }
  const items = useSelector(getCart);
  return (
    <Container>
      <ToastContainer position="top-center" />
      <OrderContainer>
        <Title>An overview of your order</Title>
        {items.cart.length > 0 ? (
          items.cart.map((item, index) => (
            <OrderItem key={index}>
              <ItemContent>
                <QuantityControl>
                  <Button
                    onClick={() =>
                      decreasecartQuantity(item.id, item.itemQuantity)
                    }
                  >
                    -
                  </Button>
                  <Quantity>{item.itemQuantity}</Quantity>
                  <Button
                    onClick={() =>
                      increasecartQuantity(item.id, item.itemQuantity)
                    }
                  >
                    +
                  </Button>
                </QuantityControl>
                <Image src={`../../Images/${item.image}.png`} alt={item.name} />
                <Details>
                  <Name>{item.name}</Name>
                </Details>
              </ItemContent>
              <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                ❌
              </RemoveButton>
              <Price>€{Math.round(item.totalPrice)}</Price>
            </OrderItem>
          ))
        ) : (
          <span>There are no items in cart</span>
        )}
      </OrderContainer>
      <SummaryContainer>
        <SummaryTitle>Order details</SummaryTitle>
        <SummaryItem>
          <SummaryLabel>Subtotal</SummaryLabel>
          <SummaryPrice>€{totalCartPrices}</SummaryPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>Shipping</SummaryLabel>
          <SummaryPrice>Free</SummaryPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryLabel>Estimated Tax</SummaryLabel>
          <SummaryPrice>€ {0}</SummaryPrice>
        </SummaryItem>
        <Total>
          <TotalLabel>Total</TotalLabel>
          <TotalPrice>€ {totalCartPrices}</TotalPrice>
        </Total>
        <CheckoutButton>GO TO CHECKOUT</CheckoutButton>
      </SummaryContainer>
    </Container>
  );
};

export default Cart;
