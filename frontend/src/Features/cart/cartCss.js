import styled from "styled-components";
// Styled Components

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f5f5f5;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const OrderContainer = styled.div`
  flex: 3;
  overflow-x: auto; /* Allows horizontal scrolling on smaller screens */
`;

export const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const OrderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 10px;
  position: relative; /* Allows absolute positioning for the delete button */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin-right: 20px;
`;

export const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Name = styled.div`
  font-size: 16px;
`;

export const Price = styled.div`
  font-size: 16px;
  color: grey;
  text-align: right;
  margin-right: 20px; /* Space between price and quantity controls */
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: lightgrey;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Quantity = styled.div`
  margin: 0 10px;
  font-size: 16px;
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  color: red;
  cursor: pointer;
  font-size: 20px;
  border: none;
  position: absolute;
  right: 10px; /* Adjusted position for better alignment */
  top: 50%;
  transform: translateY(-50%);
`;

export const SummaryContainer = styled.div`
  flex: 1;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  margin-left: 20px;
  @media (max-width: 1024px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

export const SummaryTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const SummaryLabel = styled.div`
  font-size: 16px;
`;

export const SummaryPrice = styled.div`
  font-size: 16px;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
`;

export const TotalLabel = styled.div``;

export const TotalPrice = styled.div``;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
`;
