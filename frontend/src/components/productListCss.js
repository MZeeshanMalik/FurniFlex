import styled from "styled-components";

// Styled Components
export const LayoutWrapper = styled.div`
  display: flex;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const Sidebar = styled.aside`
  flex: 1;
  max-width: 200px;
  margin-right: 2rem;
  border-right: 2px solid #8f8f8f;
  @media (max-width: 768px) {
    margin-bottom: 2rem;
    max-width: 100%;
  }
  hr {
    width: 80%;
  }
`;

export const SidebarItem = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) => (props.active ? "white" : "black")};
  background-color: ${(props) => (props.active ? "black" : "transparent")};

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const ProductGrid = styled.section`
  flex: 3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const ProductCard = styled.div`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  padding: 1rem;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #888;
    margin-bottom: 1rem;
  }

  .price {
    font-size: 1.1rem;
    font-weight: bold;
    color: #e53935;
    margin-bottom: 0.5rem;
  }
  .new-price {
    color: #202020;
  }

  .old-price {
    font-size: 0.9rem;
    color: #aaa;
    text-decoration: line-through;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  button {
    background-color: #202020;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 90%;
    &:hover {
      background-color: #3e3e43;
    }
  }
`;

export const PaginationWrapper = styled.div`
  grid-column: 1 / -1; /* Spans the entire grid */
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }

  button {
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 0.5rem 1rem;
    margin: 0 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f0f0f0;
    }

    &.active {
      background-color: #696cff;
      color: white;
      border-color: #696cff;
    }

    @media (max-width: 480px) {
      margin: 0.25rem 0;
      width: 100%;
    }
  }
`;
export const CartBadge = styled.span`
  /* position: absolute;
  top: -8px;
  right: -8px; */
  background-color: #e53935;
  color: white;
  font-size: 0.5rem;
  border-radius: 50%;
  padding: 2px 6px;
`;
